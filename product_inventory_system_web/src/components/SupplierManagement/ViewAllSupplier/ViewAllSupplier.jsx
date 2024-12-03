import React, { useEffect, useState } from 'react';
import './ViewAllSupplier.css';
import axios from 'axios';

function ViewAllSupplier() {

    [supplier, setSupplier] =  useState([])


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