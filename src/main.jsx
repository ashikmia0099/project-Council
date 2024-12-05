import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main.jsx';
import Home from './components/Body/Home.jsx';
import ContractUs from './components/Body/ContractUs.jsx';
import AboutUs from './components/Body/AboutUs.jsx';
import Auth from './components/Auth/Auth.jsx';
import Login from './components/Auth/Login.jsx';
import Register from './components/Auth/Register.jsx';
import Services from './components/Body/Services.jsx';
import Details from './components/Details/Details.jsx';
import AuthProvider, { AuthContext } from './Provider/AuthProvider.jsx';
import PrivateRouter from './Provider/PrivateRouter.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "services/details/:id",
        element: <PrivateRouter><Details></Details></PrivateRouter> ,
        loader : () => fetch('/blogs.json')
      },
      {
        path: "/contractus",
        element: <ContractUs></ContractUs>
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/auth",
        element: <Auth></Auth>,
        children: [
          {
            path: "login",
            element: <Login></Login>
          },
          {
            path: "register",
            element: <Register></Register>
          },
        ]
      },
    ]
  },
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    
  </StrictMode>,
)
