import React,{useEffect,useState} from 'react';
import {Menu} from 'antd';
import {Link} from "react-router-dom";
import { useLocation } from 'react-router-dom'
const routes: any[] = []

function Navbar() {
   const {pathname: currentPath} = useLocation();
   const [selectedKey, setSelectedKey] = useState("")

    useEffect(() => {
        const matchingRoute = routes.find(route=>route.path===currentPath);
        if(matchingRoute)
            setSelectedKey(matchingRoute.path)
        else
            setSelectedKey("")
    }, [currentPath]);

    return (
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[selectedKey]}>
                {
                    routes.map((route) => {
                        return (
                            <Menu.Item key={route.path}>
                                <Link to={route.path}>{route.name}</Link>
                            </Menu.Item>
                        )
                    })
                }
            </Menu>
    );
}

export default Navbar;