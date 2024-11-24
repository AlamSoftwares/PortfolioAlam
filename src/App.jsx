import bgImg from "./assets/bg.mp4";
import "./App.css";
import Footer from "./Componenets/Footer"


import ReactTypingEffect from "react-typing-effect";
function App() {
  return (
    <>
      <section
        id="main-div"
        className=" w-full h-full justify-center gap-12 m-auto content-center md:flex "
      >
        <video
          className=" m-0 p-0 w-full h-full object-cover -z-10 fixed "
          src={bgImg}
          loop
          autoPlay
          muted
        ></video>
       
        
        <div id="title" className=" self-center text-white py-36 px-14 font-bold font-sans text-6xl">
          Md Mahir Alam
          <p id="skill1" className=" text-slate-500 font-semibold font-sans text-2xl py-1">
            Full Stack Web Developer
          </p>
          <p id="skill2" className=" text-slate-500 font-semibold font-sans text-2xl">
            SEO Customized Websites
          </p>
            {" "}
            <ReactTypingEffect className=" text-slate-100 font-semibold font-sans text-2xl py-2" speed={150} eraseSpeed={150} eraseDelay={2000} typingDelay={1000} text={["HTML 5", "CSS 3", "React JS" , "JavaScript", "Tailwind", "Python", "Flask"]} />
           <div className=" flex gap-3 py-4 "><a href="www.linkedin.com/in/md-mahir-alam-a6380630b"><img height="25px" width="25px" src="src/assets/linkedin-brands-solid.svg" alt="" /></a>
            <a href="https://github.com/AlamSoftwares"><img height="25px" width="25px" src="src/assets/github-brands-solid.svg" alt="" /></a>
            <a href="https://wa.me/"><img height="25px" width="25px" src="src/assets/whatsapp-brands-solid.svg" alt="" /></a></div> 
        </div>
        <div id="profile_img" className=" m-auto my-36 w-max h-max" ><div  className=" w-56 h-56  bg-hero bg-no-repeat bg-cover "></div></div>
      </section><br />
      <hr className=" m-7 my-20 bg-white "/>
      <section className="py-36 px-8">
      <div>
      <p className="font-extrabold text-6xl text-white text-left ">Witness My Skills:</p>
      <p className=" font-semibold text-2xl text-blue-600 underline block p-2 "></p>
      <div className=" rounded-md bg-slate-200  my-14 ">
        <iframe src="http://mastereddevelopers.c1.biz/" alt="Avatar" className=" hidden  w-full md:block  h-screen  "></iframe>
        <div className=" p-5 ">
        <p className=" font-bold text-slate-800 text-3xl " >My Website</p> 
        <p className="font-semibold text-2xl text-blue-600 underline block p-2" ><a href="http://mastereddevelopers.c1.biz/">http://www.mas....</a></p> 
      </div>
      </div>
      <div className=" rounded-md bg-slate-200  my-14 ">
        <iframe src="http://weathxbyalam.c1.biz/" alt="Avatar" className=" hidden  w-full md:block  h-screen  "></iframe>
        <div className=" p-5 ">
        <p className=" font-bold text-slate-800 text-3xl " >My Website</p> 
        <p className="font-semibold text-2xl text-blue-600 underline block p-2" ><a href="http://weathxbyalam.c1.biz/">http://weathx....</a></p> 
      </div>
      </div>
      <div className=" rounded-md bg-slate-200  my-14 ">
        <iframe src="http://notesbyalam.c1.biz" alt="Avatar" className=" hidden  w-full md:block  h-screen  "></iframe>
        <div className=" p-5 ">
        <p className=" font-bold text-slate-800 text-3xl " >A Notes Taking App To Take Notes On The Go..</p> 
        <p className="font-semibold text-2xl text-blue-600 underline block p-2" ><a href="http://notesbyalam.c1.biz">http://note....</a></p> 
      </div>
      </div>
      <div className=" p-5 rounded-md bg-slate-200 my-14 ">
        <p className=" font-bold text-slate-800 text-3xl " >More Advanced Projects On Github...Find Me There:  </p> 
        <p className="font-semibold text-2xl text-blue-600 underline block p-2" ><a href="https://github.com/AlamSoftwares"><img height="50px" width="50px" src="/src/assets/github-brands-solid.svg" alt="" /></a></p> 
      </div>
      </div>
      </section>
      <Footer/>
    </>
  );
}

export default App;
