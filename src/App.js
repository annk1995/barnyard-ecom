import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import SideBar from './components/SideBar';
import Home from './Home';
import Products from './Products';
import Cart from './Cart';
function App() {
  return (
    <BrowserRouter>
    <div className='d-flex '>
     <div className='col-auto'>
      <SideBar />
     </div>


</div>
<Routes>
  <Route path="/" element={<Home />}></Route>
  <Route path="/products" element={<Products />}></Route>
  <Route path='./cart' element={<Cart />}></Route>
</Routes>
    </BrowserRouter>
 
  );
}

export default App;
