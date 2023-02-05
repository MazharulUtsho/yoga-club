import React from 'react';
import personalImage from '../../utsho.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';
const Cart = () => {
    return (
        <div>
            <div className="cart-container">
                <div className="name-info">
                    <img src={personalImage} alt="" className='cart-image' />
                    <div className="names-info">
                        <h2> Md. Mazharul Islam</h2>
                        <p><FontAwesomeIcon icon={faLocationDot} /> Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div className="personal-info">
                    <div className="weight">
                        <h3>75kg</h3>
                        <p>Weight</p>
                    </div>
                    <div className="height">
                        <h3>5.7</h3>
                        <p>Height</p>
                    </div>
                    <div className="age">
                        <h3>25yrs</h3>
                        <p>Age</p>
                    </div>
                </div>
                <div className="break-info">
                    <h2>Take a Break</h2>
                    <div className="break-container">
                        <span> 10s
                        </span>
                        <span> 20s
                        </span>
                        <span> 30s
                        </span>
                        <span> 40s
                        </span>
                        <span> 50s
                        </span>
                    </div>
                </div>
                <div className="exercise-info">
                    <h2>Yoga Details</h2>
                    <div className="yoga-time">
                        <h3>Yoga Time<span>0</span></h3>

                    </div>
                </div>
                <div className="break-time">
                    <h3>Break Time<span>0</span></h3>
                </div>
                <button className='btn-2'>Finish Activity</button>
            </div>
        </div>
    );
};

export default Cart;