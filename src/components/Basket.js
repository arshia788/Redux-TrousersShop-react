import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

// func
import {splitNum, checkItem} from '../func';

import { removeItem, increase, decrease } from '../redux/cartAction';



const Basket = () => {

    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const total= state.reduce((acc, product)=> acc+ product.price * product.qty , 0)

   
    return (
        <div >
            {
                state.map(item => {
                    return (
                        <div
                            key={item.id}
                            className='cart2'>
                            <img src={item.image} />
                            
                            
                            <div className='info'>
                                <h2>{item.title}</h2>
                                <p>price: {splitNum(item.price)} </p>
                                <p>total: {splitNum(item.qty * item.price)}</p>
                                <button 
                                onClick={()=> dispatch(removeItem(item))}
                                className='remove'>remove</button>
                            
                                <div className='btn'>
                                {
                                    checkItem(item) ?
                                    <button onClick={()=> dispatch(decrease(item))}>-1</button>
                                    :
                                    <button onClick={()=> dispatch(removeItem(item))}>remove</button>

                                }         

                                    <span>{item.qty}</span>
                                    <button onClick={()=> dispatch(increase(item))}>+1</button>
                                    
                                </div>

                            </div>


                        </div>
                    )
                })
            }
            <div style={{background:'navy', 
            color:'#fff', padding:'10px', 
            textAlign:'center', marginTop:'10px'}}>
                
                <p style={{fontSize:'1.4rem'}}>
                    {splitNum(total)} $

                </p>
            </div>

        </div>
    );
};

export default Basket;