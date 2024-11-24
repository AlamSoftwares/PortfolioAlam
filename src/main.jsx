import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {  createBrowserRouter,  RouterProvider,} from "react-router-dom";
import App from './App.jsx'
import Navbar from './Componenets/Navbar.jsx';
import Blogs from './Componenets/Blogs.jsx';
import './index.css'
import Clickbait from './Componenets/Blog/Clickbait.jsx';

const Router = createBrowserRouter([
  {
    path: "/",
    element:<><Navbar/><App /></>,
  },
  {
    path: "/Blogs",
    element:<><Navbar/><Blogs/></>,
  },
  {
    path: "/Blog/Clickbait",
    element:<><Navbar/><Clickbait/></>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>,
)
