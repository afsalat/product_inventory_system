import React, { useState } from "react";
import "./CreateSupplier.css";

function CreateSupplier() {
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
            <input
                onChange={handleChange}
                type="text"
                name="contact_person"
                placeholder="Contact Person"
                value={supplier.contact_person}
            />
            <input
                onChange={handleChange}
                type="text"
                name="phone_number"
                placeholder="phone_number"
                value={supplier.phone_number}
            />
            <input
                onChange={handleChange}
                type="text"
                name="email"
                placeholder="email ID"
                value={supplier.email}
            />
            <input
                onChange={handleChange}
                type="text"
                name="address"
                placeholder="address"
                value={supplier.address}
            />
            <button type="submit">CREATE</button>
        </form>
    );
}

export default CreateSupplier;
