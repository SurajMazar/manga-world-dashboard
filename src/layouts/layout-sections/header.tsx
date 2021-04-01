import React, { useCallback, useEffect } from 'react';
import { Layout, Menu, Popover} from 'antd';
import {PoweroffOutlined,SmileOutlined} from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import {fetchAuthProfile,logout as storeLogout} from '../../store/services/authService';


const { Header } = Layout;

interface state {
  auth:{
    user:{
      name:string
    },
    loadingUser:boolean
  },
}

const HeaderComponent = ()=>{

  const dispatch = useDispatch();

  const authState = useSelector((state:state)=>{
    const {auth} = state;
    const {loadingUser,user} = auth;
    return {
      loadingUser,
      user
    }
  });

  const {loadingUser,user:authUser} = authState;


  const logout = useCallback(()=>{
    dispatch(storeLogout())
  },[dispatch]);


  useEffect(()=>{
    dispatch(fetchAuthProfile());
  },[dispatch])//eslint-disable-line
    

  const userMenu = (
    <Menu style={{borderRight:'none'}} className='MWD_sidebar-nav'>
      <Menu.Item key="1" icon={<SmileOutlined />}>Profile</Menu.Item>
      <Menu.Item key="2" icon={<PoweroffOutlined/>}
        onClick={logout}
      >Logout</Menu.Item>
    </Menu>
  );
  return (
    <>
    <Header className="mwd-header">
    {
      !loadingUser && authUser?
        <div className="ant-row">
          <Popover content={userMenu} title={false} trigger="hover" className="header-menu">
            <p className="header-menu-title">Welcome, {authUser?.name}</p>
          </Popover>
        </div>
      :""
    }
    </Header>
    
    </>
  )
}


export default HeaderComponent;