import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ProductsEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);
    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [type, setType] = useState("");
    const [origin, setOrigin] = useState("");
    const [color, setColor] = useState("");
    const [spec, setSpec] = useState("");
    const [size, setSize] = useState("");

    // Fetch product data when the component mounts or the id changes
    
  
    useEffect(() => {
        fetch(`https://reactjr.coderslab.online/api/products/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Product not found');
                }
                return res.json(); // Assuming response is JSON
            })
            .then((data) => {
              
                setProduct(data);
                setName(data?.data?.name);
                setBrand(data?.data?.brand);
                setType(data?.data?.type);
                setOrigin(data?.data?.origin);
                if (data?.data?.variants && data?.data?.variants.length > 0) {
                    setColor(data?.data?.variants[0].color);
                    setSpec(data?.data?.variants[0].specification);
                    setSize(data?.data?.variants[0].size);
                }
            })
            .catch((error) => {
                console.error('Error fetching product:', error);
            });
    }, [id]);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedProduct =
         {
            id,
            name,
            brand,
            type,
            origin,
           
            updated_at: new Date().toISOString(),
            variants: [{
                id,
                product_id: id,
                color,
                specification: spec,
                size,
               
                updated_at: new Date().toISOString()
            }]
        };

        const apiUrl = `https://reactjr.coderslab.online/api/products/${id}`;
        fetch(apiUrl, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedProduct)
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error('Failed to update product');
            }
            return res.json();
        })
        .then((data) => {
            console.log('Product updated:', data);
            alert('Updated successfully.');
            navigate('/');
        })
        .catch((err) => {
            console.error('Error updating product:', err.message);
            alert(`Error updating product: ${err.message}`);
        });
    };
    return (
        <div>
            <h3 className="font-semibold text-center mb-4 mt-10 text-2xl">Product Edit</h3>
            {
                product ? (
                    <div className="bg-white p-10 flex justify-center">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <div className='flex justify-center mb-6 gap-4'>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="input input-bordered input-info w-full max-w-xs"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Brand"
                                        value={brand}
                                        onChange={(e) => setBrand(e.target.value)}
                                        className="input input-bordered input-info w-full max-w-xs"
                                    />
                                </div>
                                <div className='flex justify-center gap-4'>
                                    <input
                                        type="text"
                                        placeholder="Type"
                                        value={type}
                                        onChange={(e) => setType(e.target.value)}
                                        className="input input-bordered input-info w-full max-w-xs"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Origin"
                                        value={origin}
                                        onChange={(e) => setOrigin(e.target.value)}
                                        className="input input-bordered input-info w-full max-w-xs"
                                    />
                                </div>
                            </div>
                            <div className='mt-10'>
                                <h3 className="font-semibold text-center mb-10 text-2xl">Variants</h3>
                                <div className='flex gap-4'>
                                    <input
                                        type="text"
                                        placeholder="Color"
                                        value={color}
                                        onChange={(e) => setColor(e.target.value)}
                                        className="input input-bordered input-info"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Specification"
                                        value={spec}
                                        onChange={(e) => setSpec(e.target.value)}
                                        className="input input-bordered input-info"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Size"
                                        value={size}
                                        onChange={(e) => setSize(e.target.value)}
                                        className="input input-bordered input-info"
                                    />
                                    <button className="btn btn-outline btn-primary">+</button>
                                    <button className="btn btn-outline btn-primary">-</button>
                                </div>
                            </div>
                            <div className="flex justify-center mt-12">
                                <Link to="/" className="btn px-10 btn-outline btn-primary mr-6">Cancel</Link>
                                <input type="submit" className='btn px-10 btn-outline btn-primary' />
                            </div>
                        </form>
                    </div>
                ) : (
                    <p>Loading product...</p>
                )
            }
        </div>
    );
}

export default ProductsEdit;







