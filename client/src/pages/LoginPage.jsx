import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginForm() {

    const navigate = useNavigate();

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
            const res = await fetch('http://localhost:3000/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ phone, password }),
            });

            if (res.ok) {
                const success = await res.json();
                setRes(success.message);
                navigate('/');
            } else {
                const error = await res.json();
                setRes(error.message);
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

                        <button className='h-12 self-center w-1/4 bg-blue-500 text-white rounded hover:bg-blue-700' type="submit">Log In</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
