import {createBrowserRouter, RouterProvider} from 'react-router';
import ProductDetails from "./Pages/ProductDetails";
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import AddProduct from "./Pages/admin/AddProduct";
import ProductList from "./Pages/admin/ProductList";
import EditProduct from './Pages/admin/EditProduct';

const router = createBrowserRouter([
  {path: "/login", element : <Login/>},
   {path: "/signup", element : <Signup/>},
    {path: "/product/:id", element : <ProductDetails/>},
    {path: "/admin/products", element:<ProductList/>},
    {path: "/admin/products/add", element:<AddProduct/>},
    {path: "/admin/products/update/:id", element:<EditProduct/>},



]);

export default function App(){
  return <RouterProvider router ={router}/>;
}