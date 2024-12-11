import React, { useEffect, useState } from 'react';
import './ViewAllSupplier.css';
import axios from 'axios';


function ViewAllSupplier() {

    const [supplier, setSupplier] =  useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSuppliers = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/get-all-supplier/', {
                    params: {
                        page: page,
                        page_size: pageSize
                    }
                });

                if (response.data && Array.isArray(response.data.results)) {
                    setSupplier(response.data.results);
                    setTotalPage(Math.ceil(response.data.count / pageSize));
                } else {
                    setSupplier([]);
                    setTotalPage(0);
                }
            } catch (error) {
                console.error('There was an error fetching the products!', error);
                setError('Unable to fetch products. Please try again later.');
            }
        };
        fetchSuppliers();
    }, [page, pageSize])


    return (
        <div className="supplier-list">
            <h1 className="title">Supplier List</h1>
            <>
            <table className='supplier-table'>
                <thead>
                    <tr>
                        <th>Supplier Name</th>
                        <th>Supplier Contact</th>
                        <th>Supplier Address</th>
                    </tr>
                </thead>
                <tbody>
                        { supplier.length > 0 ? (
                            supplier.map((supplier, index) => (
                                <tr key={supplier.id}>
                                    <td>{supplier.sub_name}</td>
                                    <td>{supplier.sub_contact}</td>
                                    <td>{supplier.sub_addrass}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7">No Suppliers Available</td>
                            </tr>
                        ) }
                </tbody>
            </table>
            </>
        </div>
    )
}

export default ViewAllSupplier