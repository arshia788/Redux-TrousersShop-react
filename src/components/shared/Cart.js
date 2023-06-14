import React from 'react';

const Cart = ({data}) => {
    console.log(data);

    return (
        <div className='cart'>
            <img src={data.image}/>
            <div className='info'>
                <button>add-cart</button>

                <div>
                    <p>{data.title}</p>
                    <p>{data.price}  $</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;