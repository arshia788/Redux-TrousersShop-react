import React from 'react';
import { Link } from 'react-router-dom';

import { FaHome} from "react-icons/fa";
import { FaShoppingBasket} from "react-icons/fa";


function Navbar() {
  return (
    <div className='nav'>
      
        <Link to='/'>
          <FaHome />
        </Link>

        <Link to='/cart'>
          <FaShoppingBasket />
        </Link>

    </div>
  )
}

export default Navbar