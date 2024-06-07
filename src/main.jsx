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




const router = createBrowserRouter([
  {
    path: "/",
    element: <Products></Products>
  },
  {
    path: "/orders",
    element: <Orders></Orders>
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
