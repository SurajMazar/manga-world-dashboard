import React, { useCallback } from 'react';
import {Row,Col,Form,Input} from 'antd';
import {useDispatch,useSelector} from 'react-redux';
import {login as storeLogin} from '../../store/services/authService';
import Button from '../../components/common/buttons/LoadingButton';

interface state {
  auth:{
    authLoading:boolean
  }
}

const LoginContainer:React.FC =  props =>{

  const dispatch = useDispatch();


  const Login = useCallback((formData:FormData)=>{
    dispatch(storeLogin(formData))
  },[dispatch]);

  const authLoading = useSelector((state:state)=>state.auth.authLoading);
  interface loginForm{
    email:string,
    password:string
  }

  const login = (values:loginForm)=>{
    let formData = new FormData();
    formData.append('email',values.email);
    formData.append('password',values.password);
    Login(formData);
  }

  
  return(
    <Row className="w-100 justify-content-center login-wrapper">
      <Col lg={8} md={12} xs={24}>
        <div className="login-signup-form">
          <h4>Welcome Back</h4>
          <Form
            name="basic"
              onFinish={login}
              // onFinishFailed={onFinishFailed}
            >
            <Form.Item
              name="email"
              rules={
                [
                  { required: true, message: 'Please input your username!' },
                  {type:'email',message:"Please enter a valid email"}
                ]}
            >
              <Input
              placeholder="Email"
              className="user-email"/>
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password 
                placeholder="Password"
              />
            </Form.Item>

            <Button title={'Login'} loading={authLoading}/>
          </Form>
        </div>
      </Col>
    </Row>
  )
}

export default LoginContainer