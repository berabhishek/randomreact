import React from "react";

export default function Icecream(props) {
    return (
        <div className="icecream">
            Name: {props.name} <br/>
            Availabe: {props.available} <br/>
            Price: {props.price} <br/>
            <button className="btnqty" onClick={() => props.removeScoop(props.name)}>
                -
            </button>
            <button className="btnqty" onClick={() => props.addScoop(props.name)}>
                +
            </button>
        </div>
    )
}