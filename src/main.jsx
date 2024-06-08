import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Products from './Components/Products/Products';
import Orders from './Components/Orders/Orders';
import ProductProvider from './Context/ProductProvider';
import OrderProvider from './Context/OrderProvider';
import Home from './Components/Home/Home';
import ProductsDetails from './Components/Products/ProductsDetails';

import { productLoader } from './Components/Products/ProductLoader';
import ProductsEdit from './Components/Products/ProductsEdit';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path: "/",
        element: <Products></Products>
      },
      {
        path: "/product/:id",
        element: <ProductsDetails />,
        loader: productLoader,
      },
      {
        path: "/product/edit/:editId",
        element: <ProductsEdit />,
      },
   
      {
        path: "/orders",
        element: <Orders></Orders>
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ProductProvider>
   <OrderProvider>
   <RouterProvider router={router} />
   </OrderProvider>
   </ProductProvider>
    
 
  </React.StrictMode>,
)
