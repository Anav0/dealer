import React from "react";
import ProductListByCategory from "pages/ProductListByCategory";
import ProductListByProducer from "pages/ProductListByProducer";

export default  [
    {
        path: "/",
        exact: true,
        name: 'Home',
        main: () => <ProductListByCategory/>
    },
    {
        path: "/products/producer/:id",
        exact: true,
        name: 'ProductsByProducer',
        main: () => <ProductListByProducer/>
    },
    {
        path: "/products/category/:id",
        exact: true,
        name: 'ProductsByCategory',
        main: () => <ProductListByCategory/>
    }
]