import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/products/');
                setProducts(response.data);
            } catch (error) {
                console.error('There was an error fetching the products!', error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.ProductName}</li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;
