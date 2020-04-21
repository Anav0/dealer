import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import api from 'api';
import "./productListByProducer.css";
import ProductsGrid from "components/ProductsGrid";

export default () => {
    const {id: producerId} = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            if (producerId && producerId !== 'all') {
                const {data: products} = await api.products.getProductsForProducer(producerId);
                setProducts(products)
            } else {
                const {data: products} = await api.products.getProducts();
                setProducts(products)
            }
        }
        fetchProducts();
    }, [producerId]);

    return (
            <ProductsGrid products={products}/>
    );
}
