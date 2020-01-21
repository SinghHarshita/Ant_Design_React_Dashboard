import React, { Component } from 'react'
import { Layout, Breadcrumb, Form } from 'antd';

import Header from '../Header';
import PageWrapper from '../PageWrapper';
import PageFooter from '../PageFooter';

const { Content} = Layout;

export default class MainForm extends Component {
    render() {
        return (
            <Layout>
                <PageWrapper />
                <Layout>
                    <Header/>
                    <Content style={{ padding: '0 50px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>Form</Breadcrumb.Item>
                        </Breadcrumb>
                        <Form name="form" id="form">
                            
                        </Form>
                    </Content>
                    <PageFooter />
                </Layout>
            </Layout>
        )
    }
}
