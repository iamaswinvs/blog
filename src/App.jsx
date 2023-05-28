import React from 'react'
import Nav1 from './units/Nav1'
import AddBlogs from './pages/AddBlogs'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"

export default function App() {
  return (
    <div>
      <Nav1 />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AddBlogs' element={<AddBlogs />} />
      </Routes>
    </div>
  )
}