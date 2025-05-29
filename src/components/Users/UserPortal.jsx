import React from 'react'
import Navbar from '../Navbar'
import Home from '../Home'
import Books from '../Books'
import ReadBooks from '../ReadBooks'
import {Route,Routes} from 'react-router-dom'
import Users from '../Users'
import Cart from './Cart'
import ViewUser from '../ViewUser'

const UserPortal = () => {
  return (
   <>
   <div>
   <Navbar/>
   
   <Routes>
     <Route element={<Home/>} path='/'></Route>
     <Route element={<Books/>} path='/books'></Route>
     <Route element={<ReadBooks/>} path='/readbook/:id'></Route>  
     <Route element={<Cart/>} path='/cart'></Route> 
     <Route element={<Users/>} path='/user'></Route>
      <Route path="/viewuser/:id" element={<ViewUser />} /> 
    
   </Routes>
   
   </div>
   </>
  )
}

export default UserPortal
