import {Route, Routes} from 'react-router-dom'
import './App.css'
import Products from './components/Products'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Home from './components/Home'
import Account from './components/Account'
import SingleProduct from './components/SingleProduct'
import Cart from './components/Cart'

function App() {

  return (
    <>
    <NavBar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/account' element={<Account/>}/>
          <Route path='/register' element={<Products/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/products/:id' element={<SingleProduct/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
    </>
  )
}

export default App
