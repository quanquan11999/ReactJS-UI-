import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import About from './Components/About/About';
import Shop from './Components/Shop/Shop';
import Services from './Components/Services/Services';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout';
import Thankyou from './Components/Thankyou/Thankyou';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

function App() {
  return (
    <div >
     <Header/>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/About" element={<About />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/Thankyou" element={<Thankyou />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
        </Routes>
     <Footer/>
    
    </div>
  );
}

export default App;
