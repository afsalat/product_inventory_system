import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import ProductForm from '../ProductForm/ProductForm';
import ProductList from '../ProductList/ProductList';
import StockManagement from '../StockManagement/StockManagement';
import SupplierManagement from '../SupplierManagement/SupplierManagement';
import { useNavigate } from 'react-router-dom';

function Menu() {
        const navigate = useNavigate();
        
        const logout = async (e) => {
            try {   
                localStorage.removeItem('username');
                navigate('/');
            } catch {
                alert("Logout failed");
            }
        };
    if (localStorage.getItem('username')) {
        return (
            <>
                <header>
                    <h1>Product Inventory System</h1>
                    <h6 onClick={logout}>Logout</h6>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="create-product">Create Product</Link></li>
                            <li><Link to="product-list">Product List</Link></li>
                            <li><Link to="stock-management">Stock Management</Link></li>
                            <li><Link to="supplier-management">Supplier Management</Link></li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="create-product" element={<ProductForm />} />
                        <Route path="product-list" element={<ProductList />} />
                        <Route path="stock-management" element={<StockManagement />} />
                        <Route path="supplier-management/*" element={<SupplierManagement />} />
                    </Routes>
                </main>
            </>
        );
    } else {
        return (
            <div>
                <h6>Please go back and signIn</h6>
                <button type="button" onClick={logout}>Back to Home</button>
            </div>
        )
        }
}

function Home() {
    return (
        <div>
            <h2>Welcome to the Product Inventory System</h2>
            <p>Use the navigation to manage products, view the product list, or handle stock management.</p>
        </div>
    );
}

export default Menu;
