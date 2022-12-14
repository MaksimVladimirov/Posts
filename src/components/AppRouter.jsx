import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Posts from '../pages/Posts'
import ErrorPage from '../pages/ErrorPage'
import PostIdPage from '../pages/PostIdPage'

const AppRouter = () => {
  return (
    <Routes>

      <Route path="*" element={<ErrorPage/>} />
      <Route path="about" element={<About />} />
      <Route path="posts" element={<Posts/>} />
      <Route path="posts/:id" element={<PostIdPage/>} />
      </Routes>
  )     
}

export default AppRouter