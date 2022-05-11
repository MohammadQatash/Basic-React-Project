import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useGlobalContext } from './context';
//import Pages
import Cart from './page/Cart';
import SingleProduct from './page/SingleProduct';
import Error from './page/Error';
import Loading from './page/Loading';
//import Components
import Home from './components/Home';
import Navbar from './components/Navbar';

const App = () => {
  const {loading} = useGlobalContext();

  if(loading) {
    return <Loading />
  }
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/products/:id' element={<SingleProduct />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
