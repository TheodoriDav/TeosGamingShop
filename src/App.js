import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import {Navbar} from './components/navbar';
import {Shop} from './pages/shop/shop';
import {Cart} from './pages/cart/cart';
import {ShopContextProvider} from './context/shop-context';
import {Watches} from './pages/shop/watches.jsx';
import {Tech} from './pages/shop/tech.jsx';
import Footer from './components/copyright';
import  CartCheckoutBtn  from './pages/cart/cartCheckoutBtn'; 


function App() {
  return (
    <div className="App">
       <ShopContextProvider>  
      <Router> 
        <Navbar />
        <Routes>  
          <Route path="/" element ={<Shop/>} /> 
          <Route path="/cart" element ={<Cart/>} />
          <Route path="/watches" element ={<Watches/>} />
          <Route path="/tech" element ={<Tech/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CartCheckoutBtn className="cartcheckoutbtn" />} />
        </Routes>
      </Router>
      <Footer />
      </ShopContextProvider>  
      
    </div>
  );
}

export default App;
