import React from 'react';
import { Genre } from '../../models/genre.model';
import {Modal,Form,Input,Button} from 'antd';
import {CheckCircleOutlined} from '@ant-design/icons';
import {slugGenerator,setFormdata} from '../../utils/common.utils';
import { useDispatch, useSelector } from 'react-redux';
import {createGenre as CG,updateGenre as UG} from '../../store/services/genre.services';
import Loader from '../common/loaderPrimary';

const {TextArea} = Input;

interface props {
  editMode:boolean
  showModal:boolean
  closeModal:()=>void
  data?:Genre|null
}

interface state{
  genre:{
    createEditLoading:boolean
  }
}

const CreateEditModal:React.FC<props>= props =>{

  const {
    editMode,
    showModal,
    data,
    closeModal,
  } = props;


  const [form] = Form.useForm();
  // state hooks
  const dispatch = useDispatch();
  const state = useSelector((state:state)=>{
    const {genre} = state;
    return genre;
  })
  const {createEditLoading} = state;
  // end state hooks

  React.useEffect(()=>{
    if(data){
      form.setFieldsValue(data);
    }else{
      form.resetFields();
    }
  },[data,form,showModal]) // set edit value in the form

  // slug helper 
  const onNameChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
    const slug = slugGenerator(event.target.value)
    form.setFieldsValue({
      slug:slug
    })
  }

  const onSlugChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
    const slug = slugGenerator(event.target.value)
    form.setFieldsValue({
      slug:slug
    })
  }


  // create update function
  const createEditGenre = (values:Genre)=>{
    const Fd = setFormdata(values);
    dispatch(CG(Fd,closeModal));
  }; //eslint-disable-line

  const updateGenre =(values:Genre)=>{
    const Fd = setFormdata(values);
    // console.log(data?.id);
    dispatch(UG(Fd,data?.id,closeModal));
  } //eslint-disable-line



  return(
    <Modal
      title={editMode?'Edit Genre':'Create Genre'}
      visible={showModal}
      onCancel={closeModal}
      footer={[
        <div key={1} >
        {createEditLoading?
          <Loader/>
        :
        <Button className="btn btn-mwd" icon={<CheckCircleOutlined/>} 
           form="manga-world-dashboard-genre-form" htmlType="submit"
           size="large"
         >
           {editMode?'Update':'Create'} genre
        </Button>
        }
        </div>
      ]}
    >
      <Form
        layout='vertical'
        className="mwd-backend-form"
        form={form}
        id="manga-world-dashboard-genre-form"
        onFinish={editMode?updateGenre:createEditGenre}
      >
        <Form.Item
          label="Genre name"
          name="name"
          rules={[
            {required: true, message: 'Please enter genre name' },
          ]}
        >
          <Input type={'text'} placeholder="Genre name" size="large"  
          onChange={(value)=>onNameChange(value)}/>
        </Form.Item>

        <Form.Item
          label="Slug"
          name="slug"
          rules={[
            {required: true, message: 'Please enter slug name' },
          ]}
        >
          <Input type={'text'} placeholder="slug" size="large"
          onChange={(value)=>onSlugChange(value)}/>
        </Form.Item>


        <Form.Item
          label="Description"
          name="description"
        >
          <TextArea placeholder="Description" size="large"/>
        </Form.Item>

      </Form>

    </Modal>
  );
}

export default CreateEditModal;