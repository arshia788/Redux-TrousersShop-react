import React, { useState } from 'react';

import { Data } from './data';

function App() {

  const [products, setProducts]= useState(Data);

  return (
    <div>
        {
          products.map(item=> {
            return(
              <img key={item.id} src={item.image}/>
            )
          })
        }
    </div>
  )
}

export default App