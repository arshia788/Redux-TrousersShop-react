import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

// func
import splitNum from '../func';

import { removeItem } from '../redux/cartAction';

const Basket = () => {

    const state = useSelector(state => state)
    const dispatch = useDispatch()

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
                                <h2>{item.title}</h2>
                                <p>price: {splitNum(item.price)} </p>
                                <p>total: {splitNum(item.qty * item.price)}</p>
                                <button 
                                onClick={()=> dispatch({type:'remove', payload:item})}
                                className='remove'>remove</button>
                            
                                <div className='btn'>
                                    <button >-1</button>
                                    <span>{item.qty}</span>
                                    <button>+1</button>
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