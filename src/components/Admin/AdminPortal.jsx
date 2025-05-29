import React from 'react'
import Navbar from '../Navbar'
import {  Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Books from '../Books'
import ReadBooks from '../ReadBooks'
import AddBooks from './AddBooks'
import Users from '../Users'
import AddUsers from './AddUsers'
import ViewUser from '../ViewUser'

const AdminPortal = () => {
  return (
    <>
    <div>
    <Navbar/>
   
    <Routes>
      <Route element={<Home/>} path='/'></Route>
      <Route element={<Books/>} path='/books'></Route>
      <Route element={<ReadBooks/>} path='/readbook/:id'></Route>
      <Route element ={<AddBooks/>} path = "/addbooks"></Route>
      <Route element={<Users/>} path = '/user'></Route>
      <Route path="/viewuser/:id" element={<ViewUser />} />
      <Route element={<AddUsers/>} path='/addusers'></Route>
    </Routes>
    
   
    </div>
    </>
  )
}

export default AdminPortal
