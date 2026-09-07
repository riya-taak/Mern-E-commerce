import {createBrowserRouter, RouterProvider} from 'react-router';
import Home from "./Pages/home";
import Login from "./Pages/login";
import Signup from "./Pages/signup";
import ProductDetails from "./Pages/productDetails";

const router = createBrowserRouter([
  {path: "/", element : <Home/>},
  {path: "/login", element : <Login/>},
   {path: "/signup", element : <Signup/>},
    {path: "/product/:id", element : <ProductDetails/>},
]);

export default function app(){
  return <RouterProvider router ={router}/>;
}