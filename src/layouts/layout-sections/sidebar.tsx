import React from 'react'
import {Link} from 'react-router-dom'
import { Layout,Menu} from 'antd'
import {menuItems} from './menu'
const { Sider } = Layout;

const Sidebar = ()=>{

  return(
    <>
    <Sider className="MWD_sidebar" 
     breakpoint="lg"
     collapsedWidth="0"
     onBreakpoint={broken => {
       console.log(broken);
     }}
     onCollapse={(collapsed, type) => {
       console.log(collapsed, type);
     }}
    >
      <Menu
        mode="inline"
        style={{ height: '100%' }}
        className="MWD_sidebar-nav"
      >
        {
          menuItems.map((item,index:number)=>(
            // nav header
            <Menu.Item key={index+1}
              icon={item.Icon?<item.Icon/>:""}
              className={item.path!==""?"MWD_sidebar-nav-menu":"MWD_sidebar-nav-header"}
              >
              {item.path===""?<span>{item.title}</span>:<Link to={item.path}>{item.title}</Link>}
              </Menu.Item>
            ))
        }
      </Menu>

      {/* // side bar menu */}
   
    </Sider>
    </>
  )
}

export default Sidebar