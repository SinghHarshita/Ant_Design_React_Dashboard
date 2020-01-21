import React, { Component } from 'react'
import { Layout, Breadcrumb } from 'antd';

import Header from './Header';
import Footer from './PageFooter';

// import { Typography } from 'antd';
const { Content} = Layout;
// const { Title } = Typography;

export default class FirstContent extends Component {
    render() {
        return (
            <Layout>
                <Header />
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ background: '#fff', padding: 24, minHeight: 580, height:'100%' }}>
                        First Content
                    </div>
                </Content>
                <Footer />
            </Layout>
        )
    }
}
