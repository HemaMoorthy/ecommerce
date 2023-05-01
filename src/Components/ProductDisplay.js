import React, { useState } from 'react'
import "./Card.css";
import axios from 'axios';

const ProductDisplay = (props) => {

    const [quantity,setQuantity] = useState(0);

    const addQuantity = ()=>{
        setQuantity(quantity+1)
    } 

    const subQuantity = ()=>{
        setQuantity(quantity-1)
    }

    const addToCart= async()=>{
        let obj={
                "CartId": 0,
                "CustId": 2,
                "ProductId": props.data.productId,
                "Quantity": quantity,
                "AddedDate": new Date()     
        }

        let res = await axios.post("http://onlinetestapi.gerasim.in/api/Ecomm/AddToCart",obj);
        console.log(res.data);
        if(res.status===200){
            alert("Successfully added to cart");
            props.callParent();
        }
    }

    
    

    return (

        <div className='card-container'>
            <br /><br />
            <div className="card" style={{ "width": "18rem;" }}>
                <img src={props.data.productImageUrl} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{props.data.productName}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div class="btn-group me-2" role="group" aria-label="Second group">
                        <button type="button" className="btn btn-secondary" onClick={()=>addQuantity()}>+</button>
                        <button type="button" className="btn btn-secondary active">{quantity}</button>
                        <button type="button" className="btn btn-secondary" onClick={()=>subQuantity()}>-</button>
                    </div>
                    <button className="btn btn-primary" onClick={()=>addToCart()}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDisplay