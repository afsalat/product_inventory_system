import React, { useState } from "react";
import "./SearchAndUpdateSupplier.css";

function SearchAndUpdateSupplier() {
    const [supplier, setSupplier] = useState({
        supplier_name: "",
        contact_person: "",
        phone_number: "",
        email: "",
        address: "",
    });

    const handleChange = (e) => {
        setSupplier({ ...supplier, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        alert("hiii");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>this is create supplier </h1>
            <input
                onChange={handleChange}
                type="text"
                name="supplier_name"
                placeholder="Supplier Name"
                value={supplier.supplier_name}
            />
            {supplier.length > 0 ? (
                supplier.map((supply, index) => (
                    <input 
                    onChange={handleChange}
                    type="text" 
                    name="supplier name"
                    placeholder="Supplier Name"
                    value={supply}
                    />
                ))
            ):(
                <h6>Supplier not found</h6>
            )}
            <input
                onChange={handleChange}
                type="text"
                name="contact_person"
                placeholder="Contact Person"
                value={supplier.contact_person}
            />

            <button type="submit">CREATE</button>
        </form>
    );
}

export default SearchAndUpdateSupplier;