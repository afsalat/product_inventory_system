import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './SupplierManagement.css';
import CreateSupplier from '../SupplierManagement/CreateSupplier/CreateSupplier';
import SearchAndUpdate from './SearchAndUpdateSupplier/SearchAndUpdateSupplier';
import ViewAllSupplier from './ViewAllSupplier/ViewAllSupplier';

function SupplierManagement() {
    return (
        <div>
            <Link to="create-supplier">
                <button className='sup_btn' type="button">Create Supplier</button>
            </Link>
            <Link to="search-and-update-supplier">
                <button className='sup_btn' type="button">Update Supplier</button>
            </Link>
            <Link to="view-all-suppliers">
                <button className='sup_btn' type="button">View All Supplier</button>
            </Link>
            <main>
                <Routes>
                    <Route path='create-supplier' element={<CreateSupplier />} />
                    <Route path='search-and-update-supplier' element={<SearchAndUpdate />} />
                    <Route path='view-all-suppliers' element={<ViewAllSupplier />} />
                </Routes>
            </main>
        </div>
    );
}

export default SupplierManagement;
