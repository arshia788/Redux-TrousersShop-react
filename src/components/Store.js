import React, { useState } from 'react';

import { Data } from '../data';

// campo
import Cart from './shared/Cart';

function Store() {

  const [products, setProducts]= useState(Data);

  return (
    <div className='store'>
        {
          products.map((item)=> <Cart key={item.id} data={item}/>)
        }
    </div>
  )
}

export default Store