import './App.css'
import { React} from 'react'
import Item from './components/Item';
import Carts from './components/Carts';

export default function App() {
  return (
   <div>
    <h1>Products</h1>
    <Item name="HP-Laptop" price="44000"/>
    <Item name="Dell-Laptop" price="40000"/>
    <Item name="Accer-Laptop" price="35000"/>
    <Carts/>
   </div>
  );
};
