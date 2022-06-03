import logo from './logo.svg';
import './App.css';
import Icecream from './components/Icecream';
import React, {useState, useEffect} from "react";
import Cart from './components/Cart';
function App() {
  const [icecreams, setIcecream] = useState({
    "Vanilla": {
      available: 10,
      price: 100
    },
    "Chocolate": {
      available: 20,
      price: 180
    },
    "Blueberry": {
      available: 30,
      price: 190
    }
  });
  const [userCart, setUserCart] = useState({});
  const addScoopToCart = function (icecream) {
    if (icecreams[icecream] && icecreams[icecream].available > 0) {
      let cart = userCart;
      if (cart[icecream] === undefined) {
        cart[icecream] = 0;
      }
      cart[icecream] += 1;
      setUserCart(Object.assign({}, cart));
     
      let icecreamwarehouse = icecreams;
      icecreamwarehouse[icecream].available -= 1;
      setIcecream(...{icecreamwarehouse});
    }
  };

  const removeScoopFromCart = function (icecream) {
    if (userCart[icecream] && userCart[icecream] > 0) {
      let prevCart = userCart;
      prevCart[icecream] -= 1;
      if (prevCart[icecream] == 0) {
        delete prevCart[icecream];
      }
      setUserCart(Object.assign({},prevCart));
      let icecreamwarehouse = icecreams;
      icecreamwarehouse[icecream].available += 1;
      setIcecream(icecreamwarehouse);
    }
  }
  return (
    <div className="icecreamroot">
      <div className='icecreamstore'>
        {Object.keys(icecreams).map(icecream => {
          return (
            <Icecream name={icecream} {...icecreams[icecream]} addScoop={addScoopToCart} removeScoop={removeScoopFromCart} />
          )
        })}
      </div>
      <div className='icecreamcart'>
        <Cart cart={userCart} icecreams={icecreams}/>
      </div>
    </div>
  );
}

export default App;
