import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Layout } from 'antd';
// import { Typography } from 'antd';

import PageWrapper from './components/PageWrapper';
import Header from './components/Header';
import Footer from './components/PageFooter';
import FirstContent from './components/FirstContent';
import SecondContent from './components/SecondContent';

// const { Content, Sider } = Layout;
// const { Title } = Typography;



function App() {
  return (
    <div>
       
        <BrowserRouter>
         <Layout style={{height:'100%'}}>
          <PageWrapper>
            <Route 
              exact={true}
              path = "/"
              component = {FirstContent}
            />
            <Route 
              exact={true}
              path = "/second"
              component = {SecondContent}
            />
          </PageWrapper>
          <FirstContent/>
          </Layout>
                  
          
        </BrowserRouter>


    </div>
  );
}

export default App;
