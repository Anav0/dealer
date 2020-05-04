import React from 'react';
import './App.css';
import {Layout} from 'antd';
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
                    <Layout style={{margin: '32px 24px 0'}}>
                        <Content className="site-layout-background"
                                 style={{
                                     padding: 24,
                                     margin: 0,
                                     minHeight: 280,
                                 }}>
                            <Switch>
                                {
                                    routes.map(route => (
                                        <Route key={route.path} path={route.path} exact={route.exact}
                                               children={route.main}/>
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
