import {createBrowserRouter, RouterProvider} from 'react-router';
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import Login from './Pages/Login';
import Signup from './Pages/Signup';

const router = createBrowserRouter([
  {path: "/home", element : <Home/>},
  {path: "/login", element : <Login/>},
   {path: "/signup", element : <Signup/>},
    {path: "/product/:id", element : <ProductDetails/>},
]);

export default function app(){
  return <RouterProvider router ={router}/>;
}