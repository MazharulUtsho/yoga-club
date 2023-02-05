import React, { useEffect, useState } from 'react';
import logo from '../../logo1.png';
import Cart from '../Cart/Cart';
import CartInfo from '../CartInfo/CartInfo';
import './Products.css';
const Products = () => {
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [])
    return (
        <div>
            <div className="container">
                <div className="row-1">
                    <div className="col-1">
                        <div className="header-1">
                            <img src={logo} alt="" className='logo-1' />
                            <h1>YOGA-CLUB</h1>
                        </div>
                        <div className="product-info">
                            <h1>Selected yoga exercise</h1>
                            <div className="cart-info">
                                {
                                    carts.map(cart => <CartInfo key={cart.id} cart={cart}></CartInfo>)
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <Cart></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;