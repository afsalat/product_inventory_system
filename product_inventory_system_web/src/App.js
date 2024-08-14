import React from 'react';
import ProductList from './components/ProductList/ProductList';
import './App.css'; // Import CSS for App component (optional)

function App() {
    // Sample product data
    const products = [
        {
            id: 1,
            name: 'Shirt',
            variants: [
                { name: 'Size', options: ['S', 'M', 'L'] },
                { name: 'Color', options: ['Red', 'Blue', 'Black'] },
            ],
        },
        {
            id: 2,
            name: 'Pants',
            variants: [
                { name: 'Size', options: ['32', '34', '36'] },
                { name: 'Color', options: ['Black', 'Blue', 'Gray'] },
            ],
        },
    ];

    return (
        <div className="app">
            <h1>Product Inventory System</h1>
            <ProductList products={products} />
        </div>
    );
}

export default App;