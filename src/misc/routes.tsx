import React from "react";
import ProductListByCategory from "pages/ProductListByCategory";
import ProductListByProducer from "pages/ProductListByProducer";
import PaymentSuccessful from "pages/PaymentSuccessful";

export default [
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
    },
    {
        path: "/payment-successful",
        exact: true,
        name: 'PaymentSuccessful',
        main: () => <PaymentSuccessful/>
    },
]