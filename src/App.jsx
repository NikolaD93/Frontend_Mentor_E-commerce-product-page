import {useState} from "react";
import Navbar from "./components/Navbar"
import Product from "./components/Product"

const App = () => {

  const [price, setPrice] = useState(125.0);
  const [qty, setQty] = useState(0);


  return (
    <>
      <Navbar price={price} qty={qty} setQty={setQty}/>
      <Product price={price} qty={qty} setQty={setQty}/>
    </>
  )
}

export default App
