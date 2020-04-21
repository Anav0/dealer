import React, {useEffect, useState} from 'react';
import {Layout, Menu} from 'antd';
import api from "api"
import {Category} from "../../common/models/category";
import {Producer} from "../../common/models/producer";
import "./index.css";

const {SubMenu} = Menu;
const {Sider} = Layout;

function Sidemenu() {

    const [categories, setCategories] = useState<Category[]>([])


    useEffect(() => {
        const fetchCategories = async () => {
            const {data} = await api.categories.getCategories();
            setCategories(data)
        }
        fetchCategories();

    }, [])
    return (
        <Sider width={200} className="site-layout-background">
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                style={{height: '100%', borderRight: 0}}
            >
                {
                    categories.map(category => <SubMenu
                        key={category._id}
                        title={
                            <span>{category.name}</span>
                        }
                    >
                        {
                        category.producers.map(producer=>{
                            const casted = producer as Producer;
                            return (<Menu.Item key={category._id+casted._id}>{casted.name}</Menu.Item>)
                        })
                        }
                    </SubMenu>)
                }

            </Menu>
        </Sider>
    )
}

export default Sidemenu;