import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '/home/toor/Documents/com/comme/src/components/Sidebar.css';

function SideBar() {
  return (
    <div className="row">
      <div className="col-sm-3 col-md-3 min-vh-100 justify-content-between flex-column" id='barn'>
        <a className='text-decoration-none d-flex align-itemcenter' href="">
          <h1 className=''>BarnYard<i className='bi bi-flower3' id='title'></i></h1>
          <hr className='text-secondary'></hr>
        </a>
        <ul className="nav nav-pills flex-column">
        <li className="nav-item" aria-current="true">
            <Link to='/' className='nav-link fs-5'>
              <i className='bi bi-house'></i>
              <span className='ms-2'>Home</span>
            </Link>
          </li>
          <li className="nav-item" aria-current="true">
            <Link to={'/products'} className='nav-link fs-5'>
              <i className='bi bi-bag'></i>
              <span className='ms-2'>Products</span>
            </Link>
          </li>
          <li className="nav-item" aria-current="true">
            <Link to={'/cart'} className='nav-link fs-5'>
              <i className='bi bi-bag-heart'></i>
              <span className='ms-2'>Cart</span>
            </Link>
          </li>
          <li className="nav-item" aria-current="true">
            <a href="" className='nav-link fs-5'>
              <i className='bi bi-person'></i>
              <span className='ms-2'>Profile</span>
            </a>
          </li>
          <li className="nav-item" aria-current="true">
            <a href="" className='nav-link fs-5'>
              <i className='bi bi-arrow-bar-right'></i>
              <span className='ms-2'>Log out</span>
            </a>
          </li>
       
        </ul>
      </div>
      <div className="col-sm-9 col-md-9">
        <Outlet />
      </div>
    </div>
  );
}

export default SideBar;
