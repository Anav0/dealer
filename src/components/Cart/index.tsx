import React, {Component} from "react";
import {Avatar, Badge, Button, Layout, List, Popover, Typography} from "antd";
import {CloseOutlined, ShoppingCartOutlined} from '@ant-design/icons';
import {calculatePrice} from "misc/helpers";
import {ISubject} from "misc/Observer/ISubject";
import cartSubjectInstance, {CartSubject} from "misc/Observer/CartSubject"
import "./index.css";
import IObserver from "misc/Observer/IObserver";
import {Product} from "common/models/product";
import api from "api";
import {loadStripe} from "@stripe/stripe-js";
import notificationManager from "misc/Notification/ActiveNotificationManager"

const {Text, Title} = Typography;

interface ICartState {
    cartItems: Product[],
    stripe: any,
    isLoading: boolean
}

// WZORZEC OBSERWATOR - Observer
export default class Cart extends Component<{}, ICartState> implements IObserver {

    constructor(props: any) {
        super(props)
        this.state = {
            cartItems: [],
            stripe: undefined,
            isLoading: false
        }
    }

    componentDidMount(): void {
        cartSubjectInstance.addObserver(this)
        const load = async () => {
            this.setState({
                stripe: await loadStripe(process.env.REACT_APP_STRAPI_KEY as string)
            })
        }
        load()
    }

    componentWillUnmount(): void {
        cartSubjectInstance.removeObserver(this)
    }

    update(subject: ISubject): void {
        const casted = subject as CartSubject;
        this.setState({
            //NOTE: this is stupid, in order to achieve reactivity it has to be this way
            cartItems: [...casted.cartItems]
        })
    }

    removeItem(item: Product) {
        cartSubjectInstance.removeItemFromCart(item)
    }


    goToPayment = async () => {
        try {
            this.setState({
                isLoading: true
            })
            const {data: sessionId} = await api.payment.createPaymentSession(this.state.cartItems.map(item => item._id), window.location.href)
            const {error} = await this.state.stripe.redirectToCheckout({
                sessionId
            })
            notificationManager.showError("Ups", error.message)
        } catch (error) {
            notificationManager.showError("Ups", "Coś poszło nie tak spróbuj ponownie za kilka minut")
        } finally {
            this.setState({
                isLoading: false
            })
        }
    };

    render() {
        const content = (
            <Layout className={"card-layout"}>
                <List
                    className={'payment-items'}
                    itemLayout="horizontal"
                    dataSource={this.state.cartItems}
                    footer={
                        <div className={'payment-summary'}>
                            <Title style={{'float': 'left'}} level={4}>W sumie:</Title>
                            <Title level={4} style={{'float': 'right'}}
                                   type="danger">{calculatePrice(this.state.cartItems.reduce((prevValue, currentItem, currentIndex) => prevValue + currentItem.price, 0))}zł</Title>
                        </div>

                    }
                    renderItem={item => (
                        <List.Item key={item._id} actions={[
                            <Text type="danger">{calculatePrice(item.price)}zł</Text>,
                            <Button onClick={() => this.removeItem(item)} type={'ghost'} shape="circle"
                                    icon={<CloseOutlined/>} size={"small"}/>
                        ]}>
                            <List.Item.Meta
                                avatar={<Avatar size={96} shape={"square"} src={item.image}/>}
                                title={<Title level={4}>{item.name}</Title>}
                                description={item.desc}
                            />
                        </List.Item>
                    )}
                />
                <Button loading={this.state.isLoading} onClick={this.goToPayment}
                        disabled={this.state.cartItems.length === 0} type={"primary"}
                        className={"cart-pay-btn"}>Zapłać</Button>
            </Layout>
        );

        return (
            <Popover placement={"bottom"} content={content} trigger="click">
                <Badge count={this.state.cartItems.length}>
                    <Button type="primary" shape="circle" size={"large"} icon={<ShoppingCartOutlined/>}/>
                </Badge>
            </Popover>
        )
    }
}