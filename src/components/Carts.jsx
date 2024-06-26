import React from 'react'
import { useCart } from '../context/CartContext'
export default function Carts() {
    const cart = useCart();
    const total = cart.item.reduce((a, b) => a + parseInt(b.price), 0);
  return (
    <div>
        <h1>Cart</h1>
        {cart && cart.item.map(item => <li>
            {item.name} - {item.price}</li>
        )}
        Total: {total} PKR
    </div>
  )
}