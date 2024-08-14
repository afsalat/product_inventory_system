import React, { useState } from 'react';
import axios from 'axios';
import './ProductForm.css'

function ProductForm() {
    const [product, setProduct] = useState({ ProductName: '', ProductID: '', ProductCode: '', CreatedUser: 1, variants: [] });
    const [variantName, setVariantName] = useState('');
    const [variantOptions, setVariantOptions] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const handleProductChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleVariantAdd = () => {
        if (!variantName || !variantOptions) {
            setErrorMessage("Variant name and options cannot be empty.");
            return;
        }

        setProduct({
            ...product,
            variants: [
                ...product.variants,
                { name: variantName, options: variantOptions.split(',').map(option => option.trim()) }
            ]
        });
        setVariantName('');
        setVariantOptions('');
        setErrorMessage(null);
    };

    const handleVariantRemove = (index) => {
        setProduct({
            ...product,
            variants: product.variants.filter((_, i) => i !== index)
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://127.0.0.1:8000/api/products/create/', product);
            alert('Product created successfully');
            setProduct({ ProductName: '', ProductID: '', ProductCode: '', CreatedUser: 1, variants: [] });
        } catch (error) {
            setErrorMessage('Error creating product: ' + (error.response?.data?.message || error.message));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="ProductName"
                value={product.ProductName}
                onChange={handleProductChange}
                placeholder="Product Name"
                required
            />
            <input
                type="text"
                name="ProductID"
                value={product.ProductID}
                onChange={handleProductChange}
                placeholder="Product ID"
                required
            />
            <input
                type="text"
                name="ProductCode"
                value={product.ProductCode}
                onChange={handleProductChange}
                placeholder="Product Code"
                required
            />
            <input
                type="text"
                value={variantName}
                onChange={(e) => setVariantName(e.target.value)}
                placeholder="Variant Name"
            />
            <input
                type="text"
                value={variantOptions}
                onChange={(e) => setVariantOptions(e.target.value)}
                placeholder="Options (comma separated)"
            />
            <button type="button" onClick={handleVariantAdd}>Add Variant</button>

            {product.variants.length > 0 && (
                <div>
                    <h3>Variants</h3>
                    <ul>
                        {product.variants.map((variant, index) => (
                            <p key={index}>
                                <strong>{variant.name}:</strong> {variant.options.join(', ')}
                                <button type="button" onClick={() => handleVariantRemove(index)}>Remove</button>
                            </p>
                        ))}
                    </ul>
                </div>
            )}

            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <button type="submit">Create Product</button>
        </form>
    );
}

export default ProductForm;
