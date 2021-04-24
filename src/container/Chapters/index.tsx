import React, {useState} from 'react';
import {Row} from "antd";
import {PlusCircleOutlined} from '@ant-design/icons';
import ChapterCreateEdit from "./createEditModel";

const Chapter:React.FC = props=>{
  
  const [modalVisible,setModalVisible] = useState<boolean>(false);
  
  const openModal = ()=>{
    setModalVisible(true);
  }
  
  const closeModal = ()=>{
    setModalVisible(false)
  }
  
  return(
    <section className="section-break-2">
      <Row>
        <h1 className="text-20">Chapters
          <button className="btn btn-mwd--sm ml-15" onClick={openModal}>
            <PlusCircleOutlined/> Add Chapter
          </button>
        </h1>
      </Row>
      <ChapterCreateEdit visible={modalVisible} closeModal={closeModal}/>
    </section>
  );
}

export default Chapter;