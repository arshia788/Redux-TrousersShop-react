import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Data } from './data';

// compo
import Navbar from './components/Navbar';
import Store from './components/Store';
import Cart from './components/shared/Cart';


function App() {

  const [products, setProducts]= useState(Data);

  return (
    <div>
        <Switch>
          <Route path='/' component={Store}/>
          <Route path='/cart' component={Cart}/>
        </Switch>
    </div>
  )
}

export default App