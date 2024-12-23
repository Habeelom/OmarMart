import React, { useContext } from 'react'
import { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

    const[menu,setMenu] = useState("Home");
    const {getTotalCartItems} = useContext(ShopContext);
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src= {logo} alt="" />
            <p>OmarMart</p>
        </div>
        <ul className="nav-menu">
        <li onClick={()=>{setMenu("Home")}}><Link style={{textDecoration: 'none'}}to='/home'>Home</Link>{menu==="Home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Grocery")}}><Link style={{textDecoration: 'none'}}to='/grocery'>Grocery</Link>{menu==="Grocery"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Electronics")}}><Link style={{textDecoration: 'none'}}to='/electronics'>Electronics</Link>{menu==="Electronics"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Furniture")}}><Link style={{textDecoration: 'none'}}to='/furniture'>Furniture</Link>{menu==="Furniture"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
           <Link to='/login'> <button>Login</button></Link>
           <Link to='/cart'> <img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar
