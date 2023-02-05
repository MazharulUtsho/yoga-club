import React from 'react';
import './CartInfo.css';
const CartInfo = (props) => {
    const cart = props.cart;
    console.log(cart);
    const { name, about, age, time, picture } = cart;
    return (
        <div className='infoCartDesign'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>{about}</p>
            <h3>For Age:{age}</h3>
            <h3>Time Duration:{time}</h3>
            <button className='btn-1'>Add to list</button>
        </div>
    );
};

export default CartInfo;