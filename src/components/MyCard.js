import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import { useCartDispatch, useCartState } from './ReducerContext';

export default function MyCard(props) {

    useEffect(()=>{
        setSize(priceRef.current.value);
    } , [])

    const dispatch = useCartDispatch();
    let data = useCartState();
    const priceRef = useRef();


    const [qty , setQty] = useState(1);
    const [size , setSize] = useState("");

    const handleCart = async()=>{
            await dispatch({type : "ADD" , id:props.foodItems._id , name : props.foodItems.name , img : props.foodItems.img, price : finalPrice , qty : qty , size : size})
        console.log(data);
    }


    const options = props.foodOptions;
    const optionType = Object.keys(options);


    let finalPrice = qty * parseInt(options[size])


    return (
        <div className='container'>
            <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                <img src={props.foodItems.img} className="card-img-top" alt="..." style={{ width: "100%", height: "200px", objectFit: "cover" }}/>
                <div className="card-body">
                    <h5 className="card-title">{props.foodItems.name}</h5>
                    {/* <p className="card-text">Some quick example text.</p> */}
                    <div className='container'>

                        <select className='m-2  h-100 bg-success rounded' onChange={(e)=>{setQty(e.target.value)}}>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100 bg-success rounded' ref={priceRef} onChange={(e)=>{setSize(e.target.value)}}>

                        {optionType.map((data)=>{
                            return(
                                <option key={data} value={data}>{data}</option>
                            )
                           
                        })}
                           
                        </select>

                    



                    </div>
                    <hr/>
                    <div className='d-flex align-items-center'>
                    <button className='m-2  h-100 bg-success' onClick={handleCart} >Add to cart</button>
                    <h5 className="card-title">₹{finalPrice}/-</h5>
                    </div>
                    

                </div>
            </div>

        </div>
    )
}
