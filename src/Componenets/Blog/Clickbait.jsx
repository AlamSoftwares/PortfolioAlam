import React from 'react'
import bgImg from "/src/assets/bg.mp4";


const Clickbait = () => {
  return (
    
<section
    id="clickbait-blog"
    className="w-screen h-screen overflow-x-hidden items-center gap-24"
  >
    <video
    className="w-full h-full object-cover -z-10 overflow-x-hidden fixed justify-center items-center "
    src={bgImg}
    loop
    autoPlay
    muted
  ></video>
  <p className='text-5xl text-white py-20 '>Coming Soon!!!  Stay Tuned ...</p>
  </section>
  )
}
export default Clickbait