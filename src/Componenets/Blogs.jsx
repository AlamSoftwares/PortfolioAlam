import React from 'react'
import bgImg from "../assets/bg.mp4";
import { Link } from 'react-router-dom';
import Clickbait from './Blog/Clickbait';


const Blogs = () => {
  return (
    <section
    id="blogs-div"
    className="w-screen h-screen overflow-x-hidden items-center gap-24"
  >
    <video
    className="w-full h-full object-cover -z-10 overflow-x-hidden fixed "
    src={bgImg}
    loop
    autoPlay
    muted
  ></video>
  <div className="font-extrabold text-7xl text-white text-left py-36 px-20 items-start">Blogs
  <hr className='mx-3 my-11' />
  <div className='text-3xl'>
    <Link to="/Blog/Clickbait">What Actually Are Clickbaits?</Link>
  </div>
  </div>
  
  </section>
  )
}

export default Blogs