import React from 'react'
import { useParams } from 'react-router-dom'
const PostIdPage = () => {
    const params = useParams()

  return (
    <h1>Вы попали на страницу поста c ID {params.id}</h1>
  )
}

export default PostIdPage