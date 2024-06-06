import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';

const ProductContextProvider = createContext();
const ProductContext = ({children}) => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fechProducts();
    },[])

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/products`);
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const addProduct = async (product) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/products`, product);
            setProducts([...products, response.data]);
        } catch (error) {
            console.error("Error adding product:", error);
        }
    };

    const updateProduct = async (id, updatedProduct) => {
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/products/${id}`, {
                _method: 'PUT',
                ...updatedProduct
            });
            fetchProducts();
        } catch (error) {
            console.error("Error updating product:", error);
        }
    };

    const deleteProduct = async (id) => {
        try {
            await axios.delete(`${import.meta.env.VITE_API_URL}/products/${id}`);
            setProducts(products.filter(product => product.id !== id));
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };
  return (
    <div>
      
    </div>
  )
}

export default ProductContext
