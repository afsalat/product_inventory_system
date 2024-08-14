import React, { useEffect, useState } from 'react';
import './ProductList.css';
import axios from 'axios';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [pageSize, setPageSize] = useState(5);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/products/', {
                    params: {
                        page: page,
                        page_size: pageSize
                    }
                });
                console.log(response.data);

                if (response.data && Array.isArray(response.data.results)) {
                    setProducts(response.data.results);
                    setTotalPages(Math.ceil(response.data.count / pageSize));
                } else {
                    setProducts([]);
                    setTotalPages(0);
                }
            } catch (error) {
                console.error('There was an error fetching the products!', error);
                setError('Unable to fetch products. Please try again later.');
            }
        };
        fetchProducts();
    }, [page, pageSize]);

    return (
        <div className="product-list">
            <h1 className="title">Product List</h1>
            {error ? (
                <div className="error-message">{error}</div>
            ) : (
                <>
                    <table className="product-table">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Product ID</th>
                                <th>Product Code</th>
                                <th>Total Stock</th>
                                <th>Created User</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.length > 0 ? (
                                products.map((product, index) => (
                                    <tr key={product.id}>
                                        <td>{product.ProductName}</td>
                                        <td>{product.ProductID}</td>
                                        <td>{product.ProductCode}</td>
                                        <td>{product.Totalstock}</td>
                                        <td>{product.CreatedUser}</td>
                                        <td>
                                            <div className="details-container">
                                                {product.variants && product.variants.map((variant, variantIndex) => (
                                                    <div key={variantIndex} className="variant-section">
                                                        <h3>{variant.name}</h3>
                                                        <ul className="sub-variants-list">
                                                            {variant.sub_variants && variant.sub_variants.map((subVariant, subIndex) => (
                                                                <li
                                                                    key={subIndex}
                                                                    className={subVariant.stock <= 0 ? 'out-of-stock' : 'in-stock'}
                                                                >
                                                                    {subVariant.option}: {Number(subVariant.stock).toFixed(2)}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7">No products available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <div className="pagination-controls">
                        <button
                            onClick={() => setPage(page - 1)}
                            disabled={page <= 1}
                        >
                            Previous
                        </button>
                        <span>Page {page} of {totalPages}</span>
                        <button
                            onClick={() => setPage(page + 1)}
                            disabled={page >= totalPages}
                        >
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default ProductList;