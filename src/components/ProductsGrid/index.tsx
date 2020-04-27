import React, {Component} from 'react';
import ProductComp from "components/Product";
import {Empty} from 'antd';
import {Product} from "common/models/product";
import "./productsGrid.css";
import cartSubjectInstance from "misc/CartSubject"
import CartObserver from "../../misc/CartObserver";

interface IProductGridProp {
    products: Product[];
}

interface IProductGridState {
    cartItems: Product[];
}

// WZORZEC OBSERWATOR - Observer
export default class ProductGrid extends Component<IProductGridProp, IProductGridState> implements CartObserver {

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

    update(cartItems: Product[]): void {
        this.setState({
            cartItems: [...cartItems]
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
                                    isInCart={this.state.cartItems.some(product=>product._id===casted._id)}
                                    onClick={() => {
                                        cartSubjectInstance.addItemToCart(casted)
                                    }} key={product._id} {...casted}/>)
                        })
                    }
                </div>
        );
    }
}
