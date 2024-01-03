// Home.js
import React from 'react';
import Banner from '/home/toor/Documents/com/comme/src/components/images/banner.jpg'
import './Home.css';
import { useState,useEffect } from 'react';
import {styled} from "styled-components"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

function Home() {
  const [categories,setCategories] =useState([])

  useEffect(() =>{
  fetch('https://fakestoreapi.com/products?limit=5')
  .then(res => res.json())
  .then(data => setCategories(data))
  .catch(err => console.log(err));
}, []);
  return (
    <div className='container'>
      <div className='image-container'>
        <img
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Banner"
        />
        <div className='overlay-text'>
          <h1>Your Text Goes Here</h1>
          <p>Additional description if needed</p>
        </div>
      </div>
      <div>
      <Wrapper >
            <h3 >Popular picks</h3>
            <Splide options={{ perPage:5,
            pagination: false,
            drag:'free',
            gap:'5rem'}}>
            {categories.map((category) => {
               return (
                  <SplideSlide key={category.id }>
                  <Card>
                     
                     <img style={{height:"380px"}}src={category.image} alt={category.title}/>
                     <p>{category.title}</p>
                     
                  
                  </Card>
                  </SplideSlide>
               )
            })}
            </Splide>
             </Wrapper>
      
       
      </div>

    </div>
  );
}
const Wrapper = styled.div`
margin :4rem 0rem;`;
const Card =styled.div`
margin:1rem 0rem
overflow:hidden
position:relative
img{
   border-radius:2rem
   position:absolute
   left:0
   width:50px
   height:30px
   object-fit:contain
}
p{
   position:absolute
   z-index:10
   left:50%
   bottom:0%
   transform:translate(-50% ,0%)
   color:white;
   width:100%
   text-align:center;
   font-weight:600
   font-size:1rem
   height:40%
   display:flex
   justify-content:center
   align-items:center
}`

export default Home;
