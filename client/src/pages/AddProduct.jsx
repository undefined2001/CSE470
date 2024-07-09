import React, { useState } from 'react';
import NavBar from '../components/NavBar';

export default function AddProduct() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        region: '',
        price: '',
        file: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            file: e.target.files[0]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('title', formData.title);
        data.append('description', formData.description);
        data.append('region', formData.region);
        data.append('price', formData.price);
        data.append('file', formData.file);

        try {
            const response = await fetch('http://localhost:3000/products/create', {
                method: 'POST',
                body: data
            });
            if (response.ok) {
                const result = await response.json();
                console.log('Product created successfully:', result);
            } else {
                console.error('Failed to create product');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <NavBar />
            <h1 className='text-center text-3xl'>Add Products</h1>
            <div className="container-fluid flex items-center justify-center">
                <form onSubmit={handleSubmit} encType='multipart/form-data' className='flex flex-col w-1/2'>
                    <input className='my-3 border-2 rounded-md h-12' type="text" name="title" placeholder="Title" onChange={handleChange} />
                    <input className='my-3 border-2 rounded-md h-40' type="text" name="description" placeholder="Description" onChange={handleChange} />
                    <input className='my-3 border-2 rounded-md h-12' type="text" name="region" placeholder="Region" onChange={handleChange} />
                    <input className='my-3 border-2 rounded-md h-12' type="text" name="price" placeholder="Price" onChange={handleChange} />
                    <input className='my-3' type="file" name="file" onChange={handleFileChange} />
                    <button className='p-3 bg-blue-400 rounded-md w-1/4 self-center' type="submit">Add Product</button>
                </form>
            </div>
        </>
    );
}
