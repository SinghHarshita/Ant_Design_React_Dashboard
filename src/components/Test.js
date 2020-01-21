import React, { Component } from 'react'
import PageWrapper from './PageWrapper'
// import PageHeader from './Header';
// import PageFooter from './PageFooter';
import FirstContent from './FirstContent'

import { Layout } from 'antd';
// import { Typography } from 'antd';
// import { Avatar } from 'antd';
// const { Header, Content, Footer, Sider } = Layout;
// const { Title } = Typography;

export default class Test extends Component {
    render() {
        return (
            <Layout>
                <PageWrapper/>
                <Layout>
                    <FirstContent />
                    {/* <PageFooter /> */}
                </Layout>
            </Layout>
        )
    }
}
