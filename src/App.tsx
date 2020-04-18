import React from 'react';
import './App.css';
import { Layout,  Breadcrumb } from 'antd';
import Navbar from 'components/Navbar'
const { Header, Content, Footer } = Layout;


function App() {
  return (
      <Layout className="app layout">
          <Header>
              <div className="logo" />
              <Navbar/>
          </Header>
          <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>List</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <div className="site-layout-content">Content</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Igor Motyka © 2020 Super sklep</Footer>
      </Layout>
  );
}

export default App;
