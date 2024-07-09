import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className="bg-green-800 p-4 shadow-lg w-screen">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-xl font-bold">FarmXpert</div>
                <ul className="flex space-x-5">
                    <li className="mx-2 my-1 text-white hover:text-black cursor-pointer">Home</li>
                    <li className="mx-2 my-1 text-white hover:text-gray-300 cursor-pointer">Marketplace</li>
                    <li className="mx-2 my-1 text-white hover:text-gray-300 cursor-pointer">Talk to Expert</li>
                    <Link to="/users/register" className="mx-2 my-1 text-white hover:text-gray-300 cursor-pointer">Sign Up</Link>
                    <Link to="/users/login" className="mx-2 my-1 text-white hover:text-gray-300 cursor-pointer">Sign In</Link>
                </ul>
            </div>
        </nav>
    );
}
