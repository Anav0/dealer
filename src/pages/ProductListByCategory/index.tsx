import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import api from 'api';
import "./productListByCategory.css";
import ProductsGrid from "../../components/ProductsGrid";

export default () => {
    const {id: categoryId} = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            if (categoryId && categoryId !== 'all') {
                const {data: products} = await api.products.getProductsForCategory(categoryId);
                setProducts(products)
            } else {
                const {data: products} = await api.products.getProducts();
                setProducts(products)
            }
        }
        fetchProducts();
    }, [categoryId]);

    return (
        <ProductsGrid products={products}/>
    );
}
