import React, { Component } from 'react'
// import React, { Component } from 'react'
import { Layout } from 'antd';
// import { Typography } from 'antd';
// import { Avatar } from 'antd';
// import PageWrapper from './components/PageWrapper';
const { Footer } = Layout;
// const { Title } = Typography;

export default class PageFooter extends Component {
    render() {
        return (
            <Footer style={{ textAlign: 'center' }}>Ant Design Dashboard Created by Harshita Singh</Footer>
        )
    }
}
