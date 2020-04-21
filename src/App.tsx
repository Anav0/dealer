import React from 'react';
import './App.css';
import {Breadcrumb, Layout} from 'antd';
import Navbar from 'components/Navbar'
import Sidemenu from 'components/Sidemenu'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import routes from "misc/routes";

const {Header, Content, Footer} = Layout;

function App() {
    return (
        <Router>
            <Layout className="app layout">
                <Header className="header">
                    <div className="logo"/>
                    <Navbar/>
                </Header>
                <Layout>
                    <Sidemenu/>
                    <Layout style={{margin: '0 24px 0'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content className="site-layout-background"
                                 style={{
                                     padding: 24,
                                     margin: 0,
                                     minHeight: 280,
                                 }}>
                            <Switch>
                                {
                                    routes.map(route => (
                                        <Route key={route.path} path={route.path} exact={route.exact} children={route.main}/>
                                    ))
                                }
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
                <Footer style={{textAlign: 'center'}}>Igor Motyka © 2020 Super sklep</Footer>
            </Layout>
        </Router>
    );
}

export default App;
