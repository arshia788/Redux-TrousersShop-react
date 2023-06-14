import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {add} from '../../redux/cartAction'

const Cart = ({data}) => {

    const state= useSelector(state=> state)
    const dispatch= useDispatch()

    return (
        <div className='cart'>
            <img src={data.image}/>
            <div className='info'>
                <button onClick={()=> dispatch(add(data))}>add-cart</button>

                <div>
                    <p>{data.title}</p>
                    <p>{data.price}  $</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;