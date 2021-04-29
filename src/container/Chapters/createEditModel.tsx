import React, {useState} from 'react';
import {Card, Col, DatePicker, Form, Input, Modal, Popconfirm, Row, Switch, Upload} from "antd";
import { dummyRequest} from "../../utils/common.utils";
import {RcFile} from "antd/es/upload";
import {CloseCircleOutlined} from "@ant-design/icons";
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';

interface propsInterface {
  visible: boolean,
  closeModal: () => void,
}

const ChapterCreateEdit: React.FC<propsInterface> = props => {
  
  const {visible, closeModal} = props;
  const [form] = Form.useForm();
  
  interface chapterPages{
    url:string,
    file:RcFile | string
  }
  const [pages,setPages] = useState<Array<chapterPages>>([]);
  
  const fileProps = {
    beforeUpload:async (file:RcFile,files:RcFile[])=>{
      let allPages:Array<chapterPages> = [];
      files.forEach(f=>{
        let page:chapterPages = {
          url:URL.createObjectURL(f),
          file:f
        }
        allPages.push(page);
      });
      setPages(pages.concat(allPages));
    }
  }
  
  const close = ()=>{
    form.resetFields();
    setPages([]);
    closeModal();
  }
  
  
  const clearAllPages = ()=>{
    setPages([]);
  }
  
  const clearPageByItem = (item:chapterPages)=>{
    let updatedPages = pages.filter(page=>page !== item);
    setPages(updatedPages);
  }
  
  
  const PageElement = SortableElement(({page}:any)=>(
    <Col xs={12} lg={6} md={8} className={"mwd-chapter-page"} style={{zIndex:1005}}>
      <img src={page.url} style={{
        width:'100%',
        objectFit:'cover',
      }} alt="" />
    
      <div className="remove">
        <Popconfirm placement="top" title={"Are you sure want to remove this page?"}
                    onConfirm={()=>clearPageByItem(page)} okText="Yes" cancelText="No">
          <CloseCircleOutlined title={"Remove page"}/>
        </Popconfirm>
      </div>
    </Col>
  ));
  
  
  const PagesContainer = SortableContainer(({pages}:any)=>(
    <div className={"d-flex"} style={{flexWrap:'wrap',position:'relative',zIndex:99999}}>
      {pages.map((page: any, index: any) => (
        <PageElement page={page} key={`item-${page.url}`} index={index} />
      ))}
    </div>
  ));
  
  
  const onSortEnd = ({oldIndex,newIndex}:any)=>{
    let array = arrayMove(pages,oldIndex,newIndex);
    setPages(array);
  }
  
  return (
    <Modal
      title={"Add Chapter"}
      footer={(
        <>
          <button className="btn btn-mwd--sm">Add Chapter</button>
        </>
      )}
      visible={visible}
      onCancel={close}
      width={800}
    >
      <Form
        layout="vertical"
        className="mwd-backend-form"
        form={form}
        id="mw-dashboard-add-chapter-form"
      >
        <Row gutter={[8,8]}>
          <Col xs={24} lg={12} xl={12} md={12}>
            <Form.Item
            name={"title"}
            label={"Chapter title"}
            rules={[
              {required:true,message:'Title is required!'}
            ]}
            >
              <Input placeholder={"Enter chapter title"} size="large"/>
            </Form.Item>
          </Col>
  
          <Col xs={24} lg={12} xl={12} md={12}>
            <Form.Item
              name={"slug"}
              label={"Slug"}
              rules={[
                {required:true,message:'Slug is required!'}
              ]}
            >
              <Input placeholder={"Enter chapter slug"} size="large"/>
            </Form.Item>
          </Col>
  
          <Col xs={24}>
            <div className="d-flex">
  
              <Col lg={6} md={8} xs={12}>
                <Form.Item
                  label="Free"
                  name="free"
                  valuePropName="checked"
                >
                  <Switch/>
                </Form.Item>
              </Col>
              
              <Col lg={6} md={8} xs={12}>
                <Form.Item
                  label="Published"
                  name="published"
                  valuePropName="checked"
                >
                  <Switch/>
                </Form.Item>
              </Col>
      
              <Col lg={6} md={8} xs={12}>
                <Form.Item
                  label="Publish Date"
                  name="publish_date"
                  rules={[
                    {required: true, message: 'Please set a publish date!' },
                  ]}
                >
                  <DatePicker size="large"/>
                </Form.Item>
              </Col>
  
              <Col lg={6} md={8} xs={12}>
                <Form.Item
                  label="Chapter number"
                  name="chapter_no"
                  rules={[
                    {required: true, message: 'Please set the chapter number' }
                  ]}
                >
                  <Input placeholder="Chapter number" size="large"/>
                </Form.Item>
              </Col>
  
              <Col xs={24}>
                <Card title="Pages" bordered={true} style={{textAlign:'center'}}>
                  {pages && pages.length?
                    <PagesContainer pages={pages} onSortEnd={onSortEnd} axis={"xyz"} pressDelay={150} />
                    :""}
                  <Upload
                    {...fileProps}
                    customRequest={dummyRequest}
                    multiple={true}
                    accept=".png,.jpeg,.jpg,.tif,.tiff,.webp"
                  >
                    <p className="btn-anchor"> Add pages </p>
                  </Upload>
                  {
                    pages && pages.length?
                      <Popconfirm placement="top" title={"Are you sure want to remove all the pages?"} onConfirm={clearAllPages} okText="Yes" cancelText="No">
                        <div className="mt-05 text-11-primary cursor-pointer"> Remove all</div>
                      </Popconfirm>
                    :''
                  }
                </Card>
              </Col>
    
            </div>
          </Col>
          
          
        </Row>
      </Form>
    </Modal>
  );
}

export default ChapterCreateEdit;