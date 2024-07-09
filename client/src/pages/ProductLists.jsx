import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';


const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch('http://localhost:3000/products', {
                    method: 'GET'
                });

                if (res.ok) {
                    const data = await res.json();
                    setProducts(data);
                } else {
                    console.error('Failed to fetch products');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchProducts();
    }, []); // Empty dependency array means this useEffect runs once when the component mounts

    return (
        <>
            <NavBar />
            <div className='container-fluid flex h-lvh flex-col bg-green-100'>
                <h1 className='text-center text-3xl'>Product List</h1>
                <div className='container-fluid h-5/6 flex justify-evenly items-center flex-wrap self-center'>
                    {products.map(product => (
                        <div key={product.id} className='w-1/5 h-1/4 bg-slate-100 m-3 flex shadow-lg rounded-r-sm'>
                            <img className='w-1/2 rounded-l-sm'  src="/pinapple.jpg" alt="" />
                            <div className='flex flex-col'>
                                <h2 className='m-2'>Name: {product.title}</h2>
                                <h2 className='m-2'>Region: {product.region}</h2>
                                <h2 className='m-2'>Price:{product.price}</h2>
                                <Link className='p-2 w-1/2 self-center text-center rounded-md bg-blue-400'>Buy</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProductList;
