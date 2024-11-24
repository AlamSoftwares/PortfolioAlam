import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className=' mix-blend-difference shadow-md shadow-black flex text-white bg-opacity-0 m-0 top-0 fixed w-screen h-16 items-center overflow-x-hidden border-b-2 border-b-white '>
        <ul className=' flex text-white list-none py-2 px-16 gap-5 items-center '>
        <li className='list-none text-5xl hover:border-b-white'>{"</>"}</li>
            <Link to="/"><li className='list-none hover:border-b-4 hover:border-b-white'>Home</li></Link>
            <Link to="/Blogs"><li className='list-none hover:border-b-4 hover:border-b-white'>Blogs</li></Link>
           
        </ul>
    </nav>
  )
}

export default Navbar