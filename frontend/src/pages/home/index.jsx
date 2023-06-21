import React, {useState} from 'react'
import Header from '../../compound/Header'
import Slider from '../../compound/Slider'
import Cards from '../../compound/Cards'
import Head from '../../compound/Head'
import Footer from '../../layouts/utilis/Footer'

const Home = () => {
  const [cartItems, setCartItems]=useState(0)
  const addToCart = () =>{
    setCartItems(cartItems + 1)
  }
  return (
    <div>
      <Head/>
        <Header cartCount={cartItems}/>
        <Slider/>
        <Cards addToCart={addToCart}/>
        <Footer/>
    </div>
  )
}

export default Home