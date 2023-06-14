import React, { useState } from 'react';

import { Data } from '../data';

import { useSelector, useDispatch } from 'react-redux';
import { add } from '../redux/cartAction';

import {splitNum} from '../func';

function Store() {

  const [products, setProducts] = useState(Data);

  const state = useSelector(state => state)
  const dispatch = useDispatch()
  console.log(state);



  return (
    <div className='store'>
      {
        products.map((item) => {
          item.qty=1
          return (
            <div
              key={item.id}
              className='cart'>
              <img src={item.image} />
              <div className='info'>
                <button onClick={() => dispatch(add(item))}>add-cart</button>
                <div>
                  <p>{item.title}</p>
                  <p>{splitNum(item.price)}  $</p>
                </div>

              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Store