import React, {Component} from "react";
import {Badge, Button, Layout, Popover, Table, Typography} from "antd";
import {CloseOutlined, ShoppingCartOutlined} from '@ant-design/icons';
import {caluclatePrice} from "misc/helpers";
import cartSubjectInstance from "misc/CartSubject";
import "./index.css";
import ICartObserver from "misc/CartObserver";
import {Product} from "common/models/product";

const {Text} = Typography;

interface ICartState {
    cartItems: Product[]
}

interface ICartProps {
}

//TODO: save cart as cookie or in local storage
export default class Cart extends Component<ICartProps, ICartState> implements ICartObserver {

    constructor(props: any) {
        super(props)
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
            //NOTE: this is stupid, in order to achive reactivity it has to be this way
            cartItems: [...cartItems]
        })
    }

    removeItem(item: Product) {
        console.log(item)
        cartSubjectInstance.removeItemFromCart(item)
    }

    render() {
        const columns = [
            {
                title: 'Nazwa',
                dataIndex: 'name',
                key: 'name',
                // @ts-ignore
                render: text => <span>{text}</span>,
            },
            {
                title: 'Cena',
                dataIndex: 'price',
                key: 'price',
                // @ts-ignore
                render: price => <span>{caluclatePrice(price)}zł</span>,
            },
            {
                title: 'Usuń',
                key: 'usun',
                // @ts-ignore
                render: (text, item) => <Button onClick={() => this.removeItem(item)} shape="circle"
                                                size={"small"}><CloseOutlined/></Button>,
            },
        ]

        const content = (
            <Layout className={"card-layout"}>
                <Table scroll={{y: 250}} columns={columns} pagination={false} bordered={true}
                       dataSource={this.state.cartItems}
                       summary={(data) => {
                           let total = 0;
                           data.forEach(({price}) => total += price);
                           return (
                               <tr>
                                   <th>Suma</th>
                                   <td>
                                       <Text type="danger">{caluclatePrice(total)}zł</Text>
                                   </td>
                               </tr>
                           )
                       }}
                />
                <Button disabled={this.state.cartItems.length === 0} type={"primary"}
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