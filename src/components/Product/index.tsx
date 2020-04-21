import React, {useState} from "react";
import "./product.css";
import {caluclatePrice} from "../../misc/helpers";
import {Result} from 'antd';
import {SmileOutlined} from '@ant-design/icons';


export default (props: any) => {
    const [isHovering, setIsHovering] = useState(false)

    return (
        <div className={`product-wrapper `} onMouseEnter={() => setIsHovering(true)}
             onMouseLeave={() => setIsHovering(false)}>
            <div className={`product-overlay ${isHovering ? 'visible' : 'hidden'}`}>
                <Result
                    icon={<SmileOutlined/>}
                    title="Dodaj do koszyka!"
                />
            </div>
            <img className={`product-image ${isHovering ? 'blur' : ''}`} alt={"product image"} src={props.image}/>
            <h3 className={`product-name ${isHovering ? 'blur' : ''}`}>{props.name}</h3>
            <h3 className={`product-price ${isHovering ? 'blur' : ''}`}>{caluclatePrice(props.price)}zł</h3>
        </div>
    )
}