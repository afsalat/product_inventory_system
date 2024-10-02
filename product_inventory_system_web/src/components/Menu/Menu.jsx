import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductForm from '../ProductForm/ProductForm';
import ProductList from '../ProductList/ProductList';
import StockManagement from '../StockManagement/StockManagement';
import SupplierManagement from '../SupplierManagement/SupplierManagement';
import { useNavigate } from 'react-router-dom';

function Menu() {
    const navigate = useNavigate()
    
    const logout = async (e) => {
        try {
            localStorage.removeItem('username')
            console.log("----logout,", localStorage.getItem('username'))
            navigate('/')
        } catch {
            alert("not work")
        }
    }
    return (
        <><header>
            <h1>Product Inventory System</h1>
            <h6 onClick={logout}>Logout</h6>
            <nav>
                <ul>
                    <li><a href="/log/">Home</a></li>
                    <li><a href="create-product">Create Product</a></li>
                    <li><a href="product-list">Product List</a></li>
                    <li><a href="stock-management">Stock Management</a></li>
                    <li><a href="supplier-management/">Supplier Management</a></li>
                </ul>
            </nav>
        </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="create-product" element={<ProductForm />} />
                    <Route path="product-list" element={<ProductList />} />
                    <Route path="stock-management" element={<StockManagement />} />
                    <Route path="supplier-management/" element={<SupplierManagement />} />
                </Routes> 
            </main>
            </>
    );
}

function Home() {
    return (
        <div>
            <h2>Welcome to the Product Inventory System</h2>
            <p>Use the navigation to manage products, view the product list, or handle stock management.</p>
        </div>
    );
}

export default Menu