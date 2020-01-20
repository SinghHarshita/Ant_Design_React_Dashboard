import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import { Typography } from 'antd';
import { Avatar } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

function App() {
  return (
    <div className="App">
       <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" >
            <Title level={3} type="warning">Testing</Title>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span className="nav-text">nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span className="nav-text">nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span className="nav-text">nav 3</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="user" />
              <span className="nav-text">nav 4</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: '10px', }} >
            <Avatar icon="user" style={{float: 'right', alignSelf: 'right'}} /> 
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 580 }}>Content</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design Dashboard Created by Harshita Singh</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
