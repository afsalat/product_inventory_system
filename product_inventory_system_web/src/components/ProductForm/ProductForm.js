import React, { useState } from 'react';
import axios from 'axios';

function ProductForm() {
    const [name, setName] = useState('');
    const [variants, setVariants] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/products/create/', {
                name,
                variants,
            });
            alert('Product created successfully!');
        } catch (error) {
            console.error('There was an error creating the product!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Product Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            {/* Add variant input fields here */}
            <button type="submit">Create Product</button>
        </form>
    );
}

export default ProductForm;
