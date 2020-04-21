import React, {useEffect, useState} from 'react';
import {Layout, Menu} from 'antd';
import api from "api"
import {Category} from "../../common/models/category";
import {Producer} from "../../common/models/producer";
import "./index.css";
import {Link, useLocation} from "react-router-dom";

const {SubMenu} = Menu;
const {Sider} = Layout;

function Sidemenu() {
    const [categories, setCategories] = useState<Category[]>([])
    const [ids, setIds] = useState<string[]>([])
    const {pathname: currentPath} = useLocation();
    const id = currentPath.split("/").pop();

    useEffect(() => {
        const fetchCategories = async () => {
            const {data} = await api.categories.getCategories();
            setCategories(data)
        }
        fetchCategories();
    }, [])

    useEffect(()=>{
        setIds(categories.map(category=>category._id))
    },[categories])

    return (
        <Sider width={200} className="site-layout-background">
            <Menu
                mode="inline"
                defaultOpenKeys={ids}
                style={{height: '100%', borderRight: 0}}
            >
                {
                    categories.map(category => <SubMenu
                        key={category._id}
                        title={
                            <span >{category.name}</span>
                        }
                    >
                        <Menu.Item>
                            <Link to={`/products/category/${category._id}`}>All</Link>
                        </Menu.Item>
                        {
                        category.producers.map(producer=>{
                            const casted = producer as Producer;
                            return (
                            <Menu.Item key={category._id+casted._id} className={`${casted._id===id ? 'ant-menu-item-selected' : ''}`}>
                                <Link to={`/products/producer/${casted._id}`}>{casted.name}</Link>
                            </Menu.Item>)
                        })
                        }
                    </SubMenu>)
                }

            </Menu>
        </Sider>
    )
}

export default Sidemenu;