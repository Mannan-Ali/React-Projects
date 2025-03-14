import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import {  StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import User from "./components/User.jsx";
import GitHub from "./components/gitHub/GitHub.jsx";
import githubInfoLoader from "./components/gitHub/githubInfoLoader.js";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home/>,
//       },
//       {
//         path: "/about",
//         element: <About/>,
//       },
//       {
//         path: "/contact",
//         element: <Contact/>,
//       },
//       {
//         path: "user/:userId",
//         element: <User/>,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="" element={<Home/>} />
      <Route path="about" element={<About/>} />
      <Route path="contact" element={<Contact/>} />
      <Route path="user/:userId" element={<User/>} />
      <Route path="github/:userName?" element={<GitHub/>} 
      //  2.] inside loader we can directly call anynomoys 
      //function loader{()=>{ fetch() ....}}
      //and do everything here but better is to do in 
      //in the new file or the file with the element
      loader = {githubInfoLoader}/>

    </Route>
  )
)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
