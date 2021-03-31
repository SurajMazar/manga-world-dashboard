import React from 'react';
import {Row} from 'antd';
import {
  PlusCircleOutlined,
  ClearOutlined,
  EditOutlined
} from '@ant-design/icons';

const Author:React.FC = props =>{

  return(
    <section className="section-container-2">
      <Row gutter={[16,16]}>
        <button className="btn btn-mwd" >
          <PlusCircleOutlined /> Add author
        </button>
        <button className="btn btn-mwd">
        <ClearOutlined />Trash
        </button>
      </Row>

      {/* // author's table */}
      <Row gutter={[16,16]} className="section-break-1">
        <div className="MWD-table-container">
          <table className="MWD-table">
            <thead>
              <tr>
                <th>SN</th>
                <th>Avatar</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mangas</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>Image</td>
                <td>Suraj Thapa</td>
                <td>suraz.mazar@gmail.com</td>
                <td>12</td>
                <td>
                  <button className="btn btn-mwd--sm">
                  <EditOutlined />Edit
                  </button>
                  <button className="btn btn-mwd--sm">
                  <ClearOutlined />Trash
                  </button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Image</td>
                <td>Suraj Thapa</td>
                <td>suraz.mazar@gmail.com</td>
                <td>12</td>
                <td>
                  <button className="btn btn-mwd--sm">
                  <EditOutlined />Edit
                  </button>
                  <button className="btn btn-mwd--sm">
                  <ClearOutlined />Trash
                  </button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Image</td>
                <td>Suraj Thapa</td>
                <td>suraz.mazar@gmail.com</td>
                <td>12</td>
                <td>
                  <button className="btn btn-mwd--sm">
                  <EditOutlined />Edit
                  </button>
                  <button className="btn btn-mwd--sm">
                  <ClearOutlined />Trash
                  </button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Image</td>
                <td>Suraj Thapa</td>
                <td>suraz.mazar@gmail.com</td>
                <td>12</td>
                <td>
                  <button className="btn btn-mwd--sm">
                  <EditOutlined />Edit
                  </button>
                  <button className="btn btn-mwd--sm">
                  <ClearOutlined />Trash
                  </button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Image</td>
                <td>Suraj Thapa</td>
                <td>suraz.mazar@gmail.com</td>
                <td>12</td>
                <td>
                  <button className="btn btn-mwd--sm">
                  <EditOutlined />Edit
                  </button>
                  <button className="btn btn-mwd--sm">
                  <ClearOutlined />Trash
                  </button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Image</td>
                <td>Suraj Thapa</td>
                <td>suraz.mazar@gmail.com</td>
                <td>12</td>
                <td>
                  <button className="btn btn-mwd--sm">
                  <EditOutlined />Edit
                  </button>
                  <button className="btn btn-mwd--sm">
                  <ClearOutlined />Trash
                  </button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Image</td>
                <td>Suraj Thapa</td>
                <td>suraz.mazar@gmail.com</td>
                <td>12</td>
                <td>
                  <button className="btn btn-mwd--sm">
                  <EditOutlined />Edit
                  </button>
                  <button className="btn btn-mwd--sm">
                  <ClearOutlined />Trash
                  </button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Image</td>
                <td>Suraj Thapa</td>
                <td>suraz.mazar@gmail.com</td>
                <td>12</td>
                <td>
                  <button className="btn btn-mwd--sm">
                  <EditOutlined />Edit
                  </button>
                  <button className="btn btn-mwd--sm">
                  <ClearOutlined />Trash
                  </button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Image</td>
                <td>Suraj Thapa</td>
                <td>suraz.mazar@gmail.com</td>
                <td>12</td>
                <td>
                  <button className="btn btn-mwd--sm">
                  <EditOutlined />Edit
                  </button>
                  <button className="btn btn-mwd--sm">
                  <ClearOutlined />Trash
                  </button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Image</td>
                <td>Suraj Thapa</td>
                <td>suraz.mazar@gmail.com</td>
                <td>12</td>
                <td>
                  <button className="btn btn-mwd--sm">
                  <EditOutlined />Edit
                  </button>
                  <button className="btn btn-mwd--sm">
                  <ClearOutlined />Trash
                  </button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Image</td>
                <td>Suraj Thapa</td>
                <td>suraz.mazar@gmail.com</td>
                <td>12</td>
                <td>
                  <button className="btn btn-mwd--sm">
                  <EditOutlined />Edit
                  </button>
                  <button className="btn btn-mwd--sm">
                  <ClearOutlined />Trash
                  </button>
                </td>
              </tr>
            </tbody>
            
          </table>
        </div>
        
      </Row>
      {/* end author's table */}
    </section>
  )
}

export default Author