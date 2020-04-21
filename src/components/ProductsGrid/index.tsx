import React from 'react';
import ProductComp from "components/Product";
import { Empty } from 'antd';
import {Product} from "common/models/product";
import "./productsGrid.css";

type ProductGridProp = {
    products: Product[];
}
export default (props: ProductGridProp) => {

    return (
        props.products.length===0 ? <Empty className={'no-product'} description={'No products available'} image={Empty.PRESENTED_IMAGE_SIMPLE} /> :
        <div className='products-grid'>
            {
                props.products.map(product => {
                    const casted = product as Product;
                    return (<ProductComp key={product._id} {...casted}/>)
                })
            }
        </div>
    );
}
