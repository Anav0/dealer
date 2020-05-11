import React, {Component} from 'react';
import ProductComp from "components/Product";
import {Empty} from 'antd';
import {Product} from "common/models/product";
import "./productsGrid.css";
import cartSubjectInstance, {CartSubject} from "misc/Observer/CartSubject"
import IObserver from "misc/Observer/IObserver";
import {ISubject} from "misc/Observer/ISubject";

interface IProductGridProp {
    products: Product[];
}

interface IProductGridState {
    cartItems: Product[];
}

// WZORZEC OBSERWATOR - Observer
export default class ProductGrid extends Component<IProductGridProp, IProductGridState> implements IObserver {

    constructor(props: IProductGridProp) {
        super(props);
        this.state = {
            cartItems: []
        }
    }

    componentDidMount(): void {
        cartSubjectInstance.addObserver(this)
    }

    componentWillUnmount(): void {
        cartSubjectInstance.removeObserver(this)
    }

    update(subject: ISubject): void {
        const casted = subject as CartSubject
        this.setState({
            cartItems: [...casted.cartItems]
        })
    }

    render() {
        return (
            this.props.products.length === 0 ?
                <Empty className={'no-product'} description={'Brak produktów'} image={Empty.PRESENTED_IMAGE_SIMPLE}/> :
                <div className='products-grid'>
                    {
                        this.props.products.map(product => {
                            const casted = product as Product;
                            return (
                                // @ts-ignore
                                <ProductComp
                                    isInCart={this.state.cartItems.some(product => product._id === casted._id)}
                                    onClick={() => {
                                        cartSubjectInstance.addItemToCart(casted)
                                    }} key={product._id} {...casted}/>)
                        })
                    }
                </div>
        );
    }
}
