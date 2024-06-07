import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Products from './Components/Products/Products';
import Orders from './Components/Orders/Orders';
// import { ProductProvider } from './context/ProductContext';


function App() {

    return (
        <div>
            <h1>Product Management</h1>
          
           <BrowserRouter>
                <Routes>
                {/* <Route path='/' element={<Orders/>}></Route> */}
                    <Route path='/' element={<Products/>}></Route>
                   
                </Routes>
            </BrowserRouter>
         
        </div>

    );

}

export default App;
