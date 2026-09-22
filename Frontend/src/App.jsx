import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';
import Home from "./Pages/Home";
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import AddProduct from "./Pages/admin/AddProduct";
import ProductList from "./Pages/admin/ProductList";
import EditProduct from './Pages/admin/EditProduct';
import Navbar from './components/Navbar';
import AllProduct from "./components/AllProducts";
import MyCart from './components/MyCart';
import Wishlist from './components/Wishlist';

 function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {path: "/", element : <Home/>},
      {path: "/login", element : <Login/>},
      {path: "/signup", element : <Signup/>},
      {path: "/cart", element : <MyCart/>},
      {path: "/wishlist", element : <Wishlist/>},
      {path: "/admin/products", element:<ProductList/>},
      {path: "/admin/products/add", element:<AddProduct/>},
      {path: "/admin/products/update/:id", element:<EditProduct/>},
      {path: "/allproduct" ,element:<AllProduct/>}

    ],
  },
]);

export default function App() {
  return <RouterProvider router ={router}/>;
}