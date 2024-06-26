import React from 'react'
import { useCart } from '../context/CartContext';

export default function Item(props) {
  const cart = useCart();
  console.log(cart);
  return (
    <>
    <div style={{marginTop:"5px"}}>
        <h2>Name: {props.name}</h2>
        <h2>Price: {props.price} PKR</h2>
        <button onClick={() => cart.Updateitem([...cart.item, 
          {name: props.name, price: props.price}
        ])}>Add to cart</button>
    </div>
    </>
  )
}
