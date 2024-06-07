import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Product from './Components/Products/Products';

function App() {

    return (
        <div>
            <h1>Product Management</h1>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Product/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>

    );

}

export default App;
