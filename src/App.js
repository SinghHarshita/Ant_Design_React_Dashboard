import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Layout } from 'antd';
// import { Typography } from 'antd';

import PageWrapper from './components/PageWrapper';
import Header from './components/Header';
import Footer from './components/PageFooter';
import FirstContent from './components/Test';
import SecondContent from './components/TestSecondContent';

// const { Content, Sider } = Layout;
// const { Title } = Typography;



function App() {
  return (
    <div>
       
        <BrowserRouter>
         {/* <Layout style={{height:'100%'}}> */}
          
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
          {/* </PageWrapper> */}
          {/* <FirstContent/> */}
          {/* <SecondContent/> */}
          {/* </Layout> */}
                  
          
        </BrowserRouter>


    </div>
  );
}

export default App;
