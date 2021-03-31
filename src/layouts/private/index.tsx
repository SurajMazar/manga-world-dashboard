import React from 'react';
import { Layout } from 'antd';
import Sidebar from '../layout-sections/sidebar';
import Header from '../layout-sections/header';
const { Content } = Layout;

const PrivateLayout:React.FC = (props)=>{
  return(
    <>
    <Layout className="main-layout">
      <Sidebar/>
      <Layout>
        <Header/>
        <Content className="main-content">
          {props.children}
        </Content>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </Layout>
  </>
  )
}

export default PrivateLayout