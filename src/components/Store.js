import React, { useState } from 'react';

import { Data } from '../data';

import { useSelector, useDispatch } from 'react-redux';

// campo
import Cart from './shared/Cart';

function Store() {

  const [products, setProducts]= useState(Data);

  const state= useSelector(state=> state)
  const dispatch= useDispatch()
  console.log(state);



  return (
    <div className='store'>
        {
          products.map((item)=> <Cart key={item.id} data={item}/>)
        }
    </div>
  )
}

export default Store