import React from 'react';
import { Space, Table, Tag } from 'antd';
const { Column, ColumnGroup } = Table;
const data = [
  {
    key: '1',
    firstName: '12322313',
    lastName: 'Arul',
    age: 'Beginner Class',
    address: '3393992020',
  },
  {
    key: '2',
    firstName: '2321232',
    lastName: 'Kavya',
    age: 'Class B',
    address: '3393992020',
  },
  {
    key: '3',
    firstName: '2321123',
    lastName: 'Manoj',
    age: 'Class A',
    address: '3393992020',
  },
  {
    key: '4',
    firstName: '2321123',
    lastName: 'Manoj',
    age: 'Class A',
    address: '3393992020',
  },
  {
    key: '5',
    firstName: '2321123',
    lastName: 'Manoj',
    age: 'Class A',
    address: '3393992020',
  },
  {
    key: '6',
    firstName: '2321123',
    lastName: 'Manoj',
    age: 'Class A',
    address: '3393992020',
  },
  {
    key: '7',
    firstName: '2321123',
    lastName: 'Manoj',
    age: 'Class A',
    address: '3393992020',
  },
  {
    key: '8',
    firstName: '2321123',
    lastName: 'Manoj',
    age: 'Class A',
    address: '3393992020',
  },
  {
    key: '9',
    firstName: '2321123',
    lastName: 'Manoj',
    age: 'Class A',
    address: '3393992020',
  },

];
const Learner = () => (
  <Table dataSource={data} 
    style={{width:'95%',
            marginTop:'30px',
            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
            marginLeft:'50px',
            marginRight:'20px',
        }}>
    <Column title="Student ID" dataIndex="firstName" key="firstName" />
    <Column title="Student Name" dataIndex="lastName" key="lastName" />
    <Column title="Enrolled Course" dataIndex="age" key="age" />
    <Column title="Mobile Number" dataIndex="address" key="address" />
    <Column
      title="Action"
      key="action"
      render={(_, record) => (
        <Space size="middle">
          {/* <a>Invite {record.lastName}</a> */}
          <a>Edit</a>
          <a>Delete</a>
        </Space>
      )}
    />
  </Table>
);
export default Learner;