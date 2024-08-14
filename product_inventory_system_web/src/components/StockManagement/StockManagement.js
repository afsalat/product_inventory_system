import React, { useState } from 'react';
import axios from 'axios';

function StockManagement({ productId }) {
    const [subvariantId, setSubvariantId] = useState('');
    const [stock, setStock] = useState('');

    const handleAddStock = async () => {
        try {
            await axios.patch(`/api/products/${productId}/subvariants/${subvariantId}/add_stock/`, { stock });
            alert('Stock added successfully!');
        } catch (error) {
            console.error('There was an error adding the stock!', error);
        }
    };

    const handleRemoveStock = async () => {
        try {
            await axios.patch(`/api/products/${productId}/subvariants/${subvariantId}/remove_stock/`, { stock });
            alert('Stock removed successfully!');
        } catch (error) {
            console.error('There was an error removing the stock!', error);
        }
    };

    return (
        <div>
            <h1>Stock Management</h1>
            <input type="text" value={subvariantId} onChange={(e) => setSubvariantId(e.target.value)} placeholder="SubVariant ID" />
            <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} placeholder="Stock" />
            <button onClick={handleAddStock}>Add Stock</button>
            <button onClick={handleRemoveStock}>Remove Stock</button>
        </div>
    );
}

export default StockManagement;
