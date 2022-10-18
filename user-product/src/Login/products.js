import React, { useEffect, useState } from 'react';
import './login.css'
import axios from 'axios'
import Table from 'react-bootstrap/Table';

function Products() {
const [productsdata,setProductsdata]=useState([]);
useEffect(()=>{
    axios.get("http://localhost:5005/products").then(res=>{setProductsdata(res.data)})
},[]);
  return (
    <>
    <div> <h2>Welcome to Products Page</h2> </div>
    <Table striped bordered hover>
            <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Cost</th>
                <th>quantity</th>
            </tr>
            </thead>
            <tbody>
    {productsdata.map((productsdata)=>{return(
            <tr>
            <td>{productsdata.name}</td>
            <td>{productsdata.type}</td>
            <td>{productsdata.cost}</td>
            <td>{productsdata.quantity}</td>
            </tr>
    )})}
    </tbody>
    </Table>
    </>
  )
}

export default Products