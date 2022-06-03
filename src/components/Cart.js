import React from "react";
import TotalBill from "./TotalBill";

export default function Cart(props) {
    const sadMessage = () => {
        if (Object.keys(props.cart).length === 0) {
            return "No items in your cart :(";
        }
        return "";
    }
    const getBill = function() {
        let bill = 0;
        let keys = Object.keys(props.cart);
        keys.forEach(key => {
            bill += props.icecreams[key].price * props.cart[key];
            console.log( props.icecreams[key].price,  props.cart[key], bill)
        });
        return bill;
    }
    return (
        <div>
            {sadMessage()}
            <ul>
                {Object.keys(props.cart).map(icecream => {
                    return (
                        <li>
                            {icecream} : {props.cart[icecream]} X {props.icecreams[icecream].price} = {props.cart[icecream] * props.icecreams[icecream].price } 
                        </li>
                    )
                })}

            </ul>
          
            <TotalBill bill={getBill()} />
        </div>
    )
}