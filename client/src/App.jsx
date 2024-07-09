import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterForm from './pages/RegisterPage';
import LoginForm from './pages/LoginPage';
import ProductList from './pages/ProductLists';
import AddProduct from './pages/AddProduct';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/users/register' element={<RegisterForm />} />
          <Route path='/users/login' element={<LoginForm />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/products/add' element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
