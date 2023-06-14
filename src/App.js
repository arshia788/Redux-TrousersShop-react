import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux'
import store from './redux/store';

import { Data } from './data';

// compo
import Navbar from './components/Navbar';
import Store from './components/Store';
import Cart from './components/shared/Cart';


function App() {

  const [products, setProducts] = useState(Data);

  return (
    <div>
      <Provider store={store}>
        <Navbar />

        <Switch>
          <Route path='/' component={Store} />
          <Route path='/cart' component={Cart} />
        </Switch>

      </Provider>
    </div>
  )
}

export default App