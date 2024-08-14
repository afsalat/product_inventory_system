import React, { useState } from 'react';
import axios from 'axios';
import './StockManagement.css';

function StockManagement() {
    const [productName, setProductName] = useState('');
    const [variantName, setVariantName] = useState('');
    const [option, setOption] = useState('');
    const [stock, setStock] = useState(''); 
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleAddStock = async () => {
        if (!productName || !variantName || !option || !stock) {
            setError('Product Name, Variant Name, Option, and Stock are required.');
            return;
        }
        setError('');
        setSuccess('');

        try {
            await axios.patch('http://127.0.0.1:8000/api/products/add_stock/', { 
                productname: productName, 
                variantname: variantName, 
                option, 
                stock 
            });
            setSuccess('Stock added successfully!');
        } catch (error) {
            if (error.response && error.response.data) {
                setError(`Error: ${error.response.data.message}`);
            } else {
                setError('There was an error adding the stock. Please try again.');
            }
        }
    };

    const handleRemoveStock = async () => {
        if (!productName || !variantName || !option || !stock) {
            setError('Product Name, Variant Name, Option, and Stock are required.');
            return;
        }
        setError('');
        setSuccess('');

        try {
            await axios.patch('http://127.0.0.1:8000/api/products/remove_stock/', { 
                productname: productName, 
                variantname: variantName, 
                option, 
                stock 
            });
            setSuccess('Stock removed successfully!');
        } catch (error) {
            if (error.response && error.response.data) {
                setError(`Error: ${error.response.data.message}`);
            } else {
                setError('There was an error removing the stock. Please try again.');
            }
        }
    };

    return (
        <div className="stock-management">
            <h1 className="title">Stock Management</h1>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
            <input
                className="input"
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Product Name"
            />
            <input
                className="input"
                type="text"
                value={variantName}
                onChange={(e) => setVariantName(e.target.value)}
                placeholder="Variant Name"
            />
            <input
                className="input"
                type="text"
                value={option}
                onChange={(e) => setOption(e.target.value)}
                placeholder="Option"
            />
            <input
                className="input"
                type="number"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                placeholder="Stock"
            />
            <div className="buttons">
                <button className="button" onClick={handleAddStock}>Add Stock</button>
                <button className="button" onClick={handleRemoveStock}>Remove Stock</button>
            </div>
        </div>
    );
}

export default StockManagement;
