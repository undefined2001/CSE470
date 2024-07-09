import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RegisterForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        password: '',
        password_two: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const [res, setRes] = useState();

    async function handleSubmit(event) {
        event.preventDefault();
        const { firstName, lastName, phone, password } = formData;
        try {
            const res = await fetch('http://localhost:3000/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ firstName, lastName, phone, password }),
            });

            if (res.ok) {
                const data = await res.json();
                setRes(data.message);
            } else {
                const data = await res.json();
                setRes(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className='flex items-center justify-center h-screen bg-green-100'>
            <div className="w-3/4 flex flex-row h-5/6 shadow-lg">
                <img className='w-2/4 rounded-l-lg' src="/register-image.jpg" alt="Register" />
                <div className="w-2/4 bg-green-800 p-8 rounded-r-lg">
                    <h1 className='text-center text-white text-3xl mb-5'>Register</h1>
                    {res && <div className="text-center bg-orange-400 text-white p-2 mb-4 rounded">{res}</div>}
                    <form onSubmit={handleSubmit} className='flex flex-col'>
                        <input
                            onChange={handleChange}
                            value={formData.firstName}
                            className='mb-5 h-12 p-2 rounded'
                            type="text"
                            name="firstName"
                            placeholder="Enter Your First Name"
                        />
                        <input
                            onChange={handleChange}
                            value={formData.lastName}
                            className='mb-5 h-12 p-2 rounded'
                            type="text"
                            name="lastName"
                            placeholder="Enter Your Last Name"
                        />
                        <input
                            onChange={handleChange}
                            value={formData.phone}
                            className='mb-5 h-12 p-2 rounded'
                            type="text"
                            name="phone"
                            placeholder="Enter Your Phone Number"
                        />
                        <input
                            onChange={handleChange}
                            value={formData.password}
                            className='mb-5 h-12 p-2 rounded'
                            type="password"
                            name="password"
                            placeholder="Enter Your Password"
                        />
                        <input
                            onChange={handleChange}
                            value={formData.password_two}
                            className='mb-5 h-12 p-2 rounded'
                            type="password"
                            name="password_two"
                            placeholder="Confirm Password"
                        />
                        <button className='h-12 self-center w-1/4 bg-blue-500 text-white rounded hover:bg-blue-700' type="submit">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
