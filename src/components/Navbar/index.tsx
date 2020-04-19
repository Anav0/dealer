import React from 'react';
import {Menu} from 'antd';
import {BrowserRouter as Router, Link} from "react-router-dom";

const routes = [
    {name: 'Home', link: "/"},
]

function Navbar() {
    return (
        <Router>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[routes[0].link]}>
                {
                    routes.map((route) => {
                        return (
                            <Menu.Item key={route.link}>
                                <Link to={route.link}>{route.name}</Link>
                            </Menu.Item>
                        )
                    })
                }
            </Menu>
        </Router>

    );
}

export default Navbar;