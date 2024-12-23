import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Footer from './Components/Footer/Footer';
import grocery_banner from './Components/Assets/banner_grocery.png';
import electronics_banner from './Components/Assets/banner_electronics.png';
import furniture_banner from './Components/Assets/banner_furniture.png';
import Cart from './Pages/Cart';
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/grocery' element={<ShopCategory banner={grocery_banner}category="grocery"/>}/>
        <Route path='/electronics' element={<ShopCategory banner={electronics_banner}category="electronics"/>}/>
        <Route path='/furniture' element={<ShopCategory banner={furniture_banner}category="furniture"/>}/>
        <Route path='/Product' element={<Product/>}>
          <Route path=':productID' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
