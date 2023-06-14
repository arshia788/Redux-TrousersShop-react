import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Cart from './shared/Cart';

const Basket = () => {

    const state = useSelector(state => state)
    const dispatch = useDispatch()
    console.log(state);

    return (
        <div style={{padding:"10px"}}>
            {
                state.map(item => {
                    return (
                        <div
                            key={item.id}
                            className='cart2'>
                            <img src={item.image} />
                            <div className='info'>
                                <div>
                                <h2>{item.title}</h2>
                                    <p>{item.title}</p>
                                    <p>{item.price}  $</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Basket;