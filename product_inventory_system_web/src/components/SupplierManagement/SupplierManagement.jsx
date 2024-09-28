import React from 'react'
import './SupplierManagement.css'
import { Router, Routes, Route } from 'react-router-dom'
import CreateSupplier from './CreateSupplier/CreateSupplier'
import SearchAndUpdate from './SearchAndUpdateSupplier/SearchAndUpdateSupplier'
import ViewAllSupplier from './ViewAllSupplier/ViewAllSupplier'

function SupplierManagement() {
    return (
        <div>
            <a href="create-supplier">
                <button className='sup_btn' type="button">Create Supplier</button>
            </a>
            <a href="search-and-update-supplier">
                <button className='sup_btn' type="button">Search and Update Supplier</button>
            </a>
            <a href="view-all-supplier">
                <button className='sup_btn' type="button">View All Supplier</button>
            </a>
            <Routes>
                <Route path='create-supplier' element={<CreateSupplier/>} />
                <Route path='search-and-update-supplier' element={<SearchAndUpdate/>}/>
                <Route path='view-all-suppliers' element={<ViewAllSupplier/>} />
            </Routes>
        </div>
    )
}

export default SupplierManagement