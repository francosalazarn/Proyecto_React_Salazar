import React from 'react'
import "./CartWidget.css"

const CartWidget = () => {
  return (

    <>
        <div className='cart_widget'>
            <img src="/shopping-cart.png" alt="cart.svg" />
            <p>0</p>
        </div>
    </>
  )
}

export default CartWidget