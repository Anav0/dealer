import React from "react";
import "./product.css";
import {caluclatePrice} from "../../misc/helpers";

export default (props: any) => {
    return (
        <div className='product-wrapper'>
            <img className='product-image' alt={"product image"} src={props.image}/>
            <h3 className='product-name'>{props.name}</h3>
            <h3 className='product-price'>{caluclatePrice(props.price)}zł</h3>
        </div>
    )
}