import React, {useState} from "react";
import "./product.css";
import {caluclatePrice} from "../../misc/helpers";
import {Result,  } from 'antd';
import {CheckOutlined, ShoppingCartOutlined} from '@ant-design/icons';

interface IProductProps {
    name: string;
    image: string;
    price: number;
    isInCart: boolean;

    onClick(): void;
}

export default (props: IProductProps) => {
    const [isHovering, setIsHovering] = useState(false)

    return (
        <div className={`product-wrapper `} onMouseEnter={() => setIsHovering(true)}
             onMouseLeave={() => setIsHovering(false)}>
            {
                props.isInCart ? (
                    <div className={`product-overlay`}>
                        <Result
                            icon={<CheckOutlined/>}
                            title="W koszyku!"
                        />
                    </div>) : (
                    <div className={`product-overlay ${isHovering ? 'visible' : 'hidden'}`}
                         onClick={() => props.onClick()}>
                        <Result
                            icon={<ShoppingCartOutlined/>}
                            title="Dodaj do koszyka!"
                        />
                    </div>)
            }

            <img className={`product-image ${isHovering || props.isInCart ? 'blur' : ''}`} alt={"product image"}
                 src={props.image}/>
            <h3 className={`product-name ${isHovering || props.isInCart ? 'blur' : ''}`}>{props.name}</h3>
            <h3 className={`product-price ${isHovering || props.isInCart ? 'blur' : ''}`}>{caluclatePrice(props.price)}zł</h3>
        </div>
    )
}