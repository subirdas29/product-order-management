import { createContext, useEffect, useState } from "react";


export const ProductContext = createContext(null);

const ProductProvider = ({children}) => {

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetch('https://reactjr.coderslab.online/api/products')
    .then((res)=>res.json())
    .then(data => setProducts(data))
  },[])


  return (
    <ProductContext.Provider value={{products}}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider;

