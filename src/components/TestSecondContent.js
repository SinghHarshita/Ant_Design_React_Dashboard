import React, { Component } from 'react'
import PageWrapper from './PageWrapper'
// import PageHeader from './Header';
// import PageFooter from './PageFooter';
import SecondContent from './SecondContent'

import { Layout } from 'antd';
// import { Typography } from 'antd';
// import { Avatar } from 'antd';
// const { Header, Content, Footer, Sider } = Layout;
// const { Title } = Typography;

export default class TestSecondContent extends Component {
    render() {
        return (
            <Layout>
                <PageWrapper/>
                <Layout>
                    <SecondContent />
                    {/* <PageFooter /> */}
                </Layout>
            </Layout>
        )
    }
}
