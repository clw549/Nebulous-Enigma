import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <title> Home </title>
      <Link to='/game' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'> PLAY </Link>
    </div>
  )
}


export default Home;
