import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cart from './Cart';

function Products() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity,setQuantity]=useState(1)
 
 const navigate =useNavigate()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err));
  }, []);
  const handleDecrement =() => {
    setQuantity(prevCount => prevCount -1)
  } 
  const handleIncrement =() => {
    setQuantity(prevCount => prevCount +1)
  } 
  const submitAddToCart =(e) =>{
    e.preventDefault();
    const data ={
      product_id:products.id,
      product_qty:quantity,
    }
    // axios.post(`https://fakestoreapi.com/carts/5`,data) .then(res=>res.json())
    fetch('https://fakestoreapi.com/carts/5')
            .then(res=>res.json())
            .then(json=>console.log(json))
    
  
  }
  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  
  return (
    <>
      <Grid>
        {products.map(product => (
          <ProductCard key={product.id}>
            <img src={product.image} alt="" />
            <h4>{product.title}</h4>
            <h6>{product.category}</h6>
            <p>Price: {product.price}$</p>
            <button className='btn btn-primary' onClick={() => openModal(product)}>Show product</button>
          </ProductCard>
        ))}
      </Grid>

      {isModalOpen && (
        <Modal>
          <ModalContent>
            <span onClick={closeModal}>&times;</span>
            <img src={selectedProduct.image} alt="" />
            <h2>{selectedProduct.title}</h2>
            <p>Category: {selectedProduct.category}</p>
            <p>Price: {selectedProduct.price}$</p>
            <button className='btn btn-primary 'onClick={submitAddToCart }>Add to cart </button>
            <button className='btn btn-primary'onClick={handleIncrement}>+</button>
            <div  className='form-control text-center '>{quantity}</div> 
            <button className='btn btn-warning' onClickCapture={handleDecrement}>-</button>
            {/* Add more details if needed */}
          </ModalContent>
        </Modal>
      )}
    </>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  width: 85%;
  height: 90%;
  margin: 80px auto 0;
  margin-left: 15%;
  position: absolute;
  top: 1px;
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  text-align: center;

  img {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 10px;
  }
`;

const Modal = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.7);
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 30%;  /* Adjust the width to your desired size */

  span {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
  }

  img {
    width: 50%; /* Ensure the image takes the full width of the container */
    max-height: 200px; /* Adjust the max-height to your desired size */
    object-fit:contain;
    border-radius: 8px;
    margin-bottom: 10px;
  }
`;

export default Products;
