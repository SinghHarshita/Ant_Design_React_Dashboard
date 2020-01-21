import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import { Typography } from 'antd';
// import { Avatar } from 'antd';
const { Sider } = Layout;
const { Title } = Typography;

export default class PageWrapper extends Component {
    render() {
        return (
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
                            <a href="/">
                                <Icon type="user" />
                                <span className="nav-text">Dashboard</span>
                            </a>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <a href="/second">
                                <Icon type="video-camera" />
                                <span className="nav-text">nav 2</span> 
                            </a>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <a href="/form">
                                <Icon type="upload" />
                                <span className="nav-text">nav 3</span>
                            </a>
                        
                        </Menu.Item>
                        <Menu.Item key="4">
                        <Icon type="user" />
                        <span className="nav-text">nav 4</span>
                        </Menu.Item>
                    </Menu>
                </Sider>

        )
    }
}
