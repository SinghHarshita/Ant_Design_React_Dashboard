import React, { Component } from 'react'
import { Layout } from 'antd';
// import { Typography } from 'antd';
import { Avatar } from 'antd';
// import PageWrapper from './components/PageWrapper';
const { Header } = Layout;
// const { Title } = Typography;

export default class PageHeader extends Component {
    render() {
        return (
            <Header style={{ background: '#fff', padding: '10px', }} >
                <Avatar icon="user" style={{float: 'right', alignSelf: 'right'}} /> 
            </Header> 
        )
    }
}
