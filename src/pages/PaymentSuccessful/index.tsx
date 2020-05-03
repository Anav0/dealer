import React, {useEffect} from "react";
import {Button, Result} from 'antd';
import {Link} from "react-router-dom";
import cartSubjectInstance from "misc/Cart/CartSubject"
import "./index.css";

export default () => {

    useEffect(() => {
        cartSubjectInstance.clearCart()
    }, [])

    return (
        <Result
            className={'successful-payment-wrapper'}
            status="success"
            title="Gratulujemy zakupu!"
            subTitle="Zapraszamy ponownie."
            extra={[
                <Link to={'/'}>
                    <Button>
                        Wróć do strony głównej
                    </Button>,
                </Link>
            ]}
        />
    )
}