import React from 'react';
import {Form,Row,Col,Input,Upload,Card,Select,Switch,DatePicker} from 'antd';
import { slugGenerator, dummyRequest, setFormdata} from '../../../utils/common.utils';
import { RcFile } from 'antd/lib/upload';
import {DeleteOutlined} from '@ant-design/icons';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import {createManga} from '../../../store/services/manga.services';
import LoadingButton from '../../../components/common/buttons/LoadingButton';

const { TextArea } = Input;
const {Option} = Select;


interface state{
  manga:{
    loadingManga:boolean
  }
}

const MangaCreateEdit:React.FC = () =>{


  const [form] = Form.useForm(); 
  const dispatch = useDispatch();

  //redux states
  const state =  useSelector((state:state)=>{
    const {manga} = state;
    return manga;
  });

  const {loadingManga}  = state;
  // end redu state
  
  // slug helper 
  const onNameChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
    const slug = slugGenerator(event.target.value);
    form.setFieldsValue({
      slug:slug
    });
  }

  const onSlugChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
    const slug = slugGenerator(event.target.value)
    form.setFieldsValue({
      slug:slug
    })
  }



  
  // image handelers
  interface file{
    url:string,
    file:File
  }
  const [coverImage, setCoverImage]  =  React.useState<file|null>(null);
  const [thumbnail, setThumbnail]  =  React.useState<file|null>(null);

  const imageRemover = (key:'cover'|'thumbnail') => {
    if(key=== 'cover'){
      setCoverImage(null); // removes cover image if is set
    }else{
      setThumbnail(null); // removes thumbnail image if is set
    }
  }
 
  // end image handlers



  // on formSubmit 

  const onSubmit = (values:any) =>{

    const form = setFormdata({
      title:values.title || '',
      slug:values.slug || '',
      excerpt:values.excerpt || '',
      description:values.description || '',
      published:values.published || '',
      published_date:moment(values.publish_date).format('YYYY-MM-DD'),
      cover_picture:coverImage?.file || null,
      thumbnail:thumbnail?.file || null,
    })
    dispatch(createManga(form));
  }



return(
  <section className="section-container-2">
    <Col xs={24}>
      <h3 className="text-26 mb-1">Add Manga</h3>
    </Col>

    <Form
      layout="vertical"
      className="mwd-backend-form"
      form={form}
      onFinish={onSubmit}
      id="mw-dashboard-manga-create-form"
    >
      <Row gutter={[10,10]}>

        <Col lg={16} md={16} sm={24} xs={24}>


          {/* // title field */}
          <Col xs={24}>
            <Form.Item
              name="title"
              label="Title"
              rules={[
                {required:true,message:"Title is required"}
              ]}
            >
              <Input placeholder="Enter manga title" size="large" onChange={(value)=>onNameChange(value)}/>
            </Form.Item>
          </Col>



          {/* // slug field/ */}
          <Col xs={24} className="section-break-2">
            <Form.Item
              label="Slug"
              name="slug"
              rules={[
                {required: true, message: 'Slug is required' },
              ]}>
              <Input type={'text'} placeholder="slug" size="large"
               onChange={(value)=>onSlugChange(value)}/>
            </Form.Item>
          </Col>


          <div className="d-flex">
            <Col xs={8}>
              <Form.Item
                label="Published"
                name="published"
                valuePropName="checked"
                >
                <Switch/>
              </Form.Item>
            </Col>

            <Col xs={8}>
              <Form.Item
                label="publish Date"
                name="publish_date">
                <DatePicker size="large"/>
              </Form.Item>
            </Col>

            <Col xs={8}>
              <Form.Item
                label="Status"
                name="status"
                rules={[
                  {required: true, message: 'Please set a status' },
                ]}
              >
                <Select placeholder="Select status" size="large">
                  <Option key="ongoing" value="on going">
                    On going
                  </Option>
                  <Option key="completed" value="completed">
                    Completed
                  </Option>
                </Select>
              </Form.Item>
            </Col>
        

          </div>

            {/* // excerpt */}
          <Col xs={24}>
            <Form.Item
              label="Excerpt"
              name="excerpt"
            >
              <TextArea  placeholder="write something..."/>
            </Form.Item>
          </Col>


          {/* // description */}
          <Col xs={24} className="section-break-2">
            <Form.Item
              label="Description"
              name="description"
            >
              <TextArea  placeholder="Manga description..." rows={10}/>
            </Form.Item>
          </Col>


        </Col>


        <Col lg={8} md={8} sm={24} xs={24}>
          
          {/* // file handler for thumbnail image */}
          <Col xs={24} className="section-break-2 mb-1">
            <Card title="Feature image" bordered={false} style={{textAlign:'center'}}>

              {
                thumbnail && thumbnail.url?
                <div className="preview-image-wrapper mb-1">
                  <img src={thumbnail.url} alt="" className="preview-img"/>
                  <DeleteOutlined title="remove image" onClick = {()=>imageRemover('thumbnail')}/>
                </div>
                :''
              }

              <Upload
                beforeUpload={async(file:RcFile)=>{
                  setThumbnail({
                    file:file,
                    url:URL.createObjectURL(file)
                  })
                }}
                customRequest={dummyRequest}
                multiple={false}
                accept=".png,.jpeg,.jpg,.tif,.tiff"
                >
                <button className="btn-anchor"> {thumbnail && thumbnail.url?'Change':'Set'} feature image </button>
              </Upload>
            </Card>
          </Col>

          {/* // file handler for cover image */}
          <Col xs={24} className="section-break-2">
            <Card title="Cover image" bordered={false} style={{textAlign:'center'}}>

              {
                coverImage && coverImage.url?
                <div className="preview-image-wrapper mb-1">
                  <img src={coverImage.url} alt="" className="preview-img"/>
                  <DeleteOutlined title="remove image" onClick = {()=>imageRemover('cover')}/>
                </div>
                :''
              }

              <Upload
                beforeUpload={async(file:RcFile)=>{
                  setCoverImage({
                    file:file,
                    url:URL.createObjectURL(file)
                  })
                }}
                customRequest={dummyRequest}
                multiple={false}
                accept=".png,.jpeg,.jpg,.tif,.tiff"
                >
                <button className="btn-anchor"> {coverImage && coverImage.url?'Change':'Set'} cover image </button>
              </Upload>
            </Card>
          </Col>

          
        </Col>

        <LoadingButton title="Create manga" loading={loadingManga} />
          

      </Row>
    </Form>
  </section>
  );
}

export default MangaCreateEdit;