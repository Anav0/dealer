import React from 'react';
import './App.css';
import {Breadcrumb, Layout} from 'antd';
import Navbar from 'components/Navbar'
import Sidemenu from 'components/Sidemenu'

const {Header, Content, Footer} = Layout;


function App() {
    return (
        <Layout className="app layout">
            <Header>
                <div className="logo"/>
                <Navbar/>
            </Header>
            <Layout>
                <Sidemenu/>
                <Layout style={{padding: '0 24px 24px'}}>
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
                        Content
                    </Content>
                </Layout>
            </Layout>
            <Footer style={{textAlign: 'center'}}>Igor Motyka © 2020 Super sklep</Footer>
        </Layout>
    );
}

export default App;
