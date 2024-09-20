import React, { useState } from "react";
import './CreateSupplier.css'


function CreateSupplier() {
    const [supplier,setSupplier] = useState({
        supplier_name:'',
        contact_person:'',
        phone_number:'',
        email:'',
        address:''
    })

    const handleChange = (e) => {
        setSupplier
    }

    return (
        <form onSubmit={}>
            <input type="text" name="name" placeholder="Supplier Name" value={Supplier} />
        </form>
    )
}