import React from 'react'
import {Row,Col,Form,Input,Checkbox} from 'antd'
// import {} from '@ant-design/icons'
import {useHistory} from 'react-router-dom'

const LoginContainer:React.FC =  props =>{
  let history = useHistory()

  const login = ()=>{
    history.push('/')
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
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
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

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <button className="btn btn-mwd" type="submit">
              Login
            </button>
          </Form>
        </div>
      </Col>
    </Row>
  )
}

export default LoginContainer