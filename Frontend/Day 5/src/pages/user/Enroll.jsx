// import React from 'react';
// import {
//   Button,
//   Card,
//   Cascader,
//   DatePicker,
//   Form,
//   Input,
//   InputNumber,
//   Mentions,
//   Select,
//   TreeSelect,
// } from 'antd';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// const { RangePicker } = DatePicker;
// const formItemLayout = {
//   labelCol: {
//     xs: {
//       span: 24,
//     },
//     sm: {
//       span: 6,
//     },
//   },
//   wrapperCol: {
//     xs: {
//       span: 24,
//     },
//     sm: {
//       span: 14,
//     },
//   },
// };
// function Enroll(){
//   const notify = () => {
//     toast.success('🦄 Wow so easy!', {
//       position: "bottom-center",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "dark",
//       transition: 'flip',
//     });
//   };
//   return(

//   <Card style={{marginTop:'5px',marginLeft:'15%',marginRight:'2px',marginBottom:'20px',width:'70%',boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
//     <Form
//     {...formItemLayout}
//     variant="filled"
//     style={{
//       maxWidth: 600,
//     }}
//   >
//     <Form.Item
//       label="Name"
//       name="Name"
//       rules={[
//         {
//           required: true,
//           message: 'Please input!',
//         },
//       ]}
//     >
//       <Input placeholder='Enter your Name'/>
//     </Form.Item>

    // <Form.Item
    //   label="Father Name:"
    //   name="FatherName"
    //   rules={[
    //     {
    //       required: true,
    //       message: 'Please input!',
    //     },
    //   ]}
    // >
    //   <InputNumber
    //     style={{
    //       width: '100%',
    //     }}
    //     placeholder='Enter your Father Name'
    //   />
    // </Form.Item>

    // <Form.Item
    //   label="Mother Name:"
    //   name="MotherName"
    //   rules={[
    //     {
    //       required: true,
    //       message: 'Please input!',
    //     },
    //   ]}
    // >
    //   <Input placeholder='Enter your Mother Name'/>
    // </Form.Item>

    // <Form.Item
    //   label="Email ID:"
    //   name="EmailID"
    //   rules={[
    //     {
    //       required: true,
    //       message: 'Please input!',
    //     },
    //   ]}
    // >
    //   <Input placeholder='Enter your Email ID'/>
    // </Form.Item>

    // <Form.Item
    //   label="Gender"
    //   name="Gender"
    //   rules={[
    //     {
    //       required: true,
    //       message: 'Please input!',
    //     },
    //   ]}
    // >
    //   <Select placeholder="Gender" />
    // </Form.Item>

    // <Form.Item
    //   label="Age:"
    //   name="Age"
    //   rules={[
    //     {
    //       required: true,
    //       message: 'Please input!',
    //     },
    //   ]}
    // >
    //   <Input placeholder='Enter your Age'/>
    // </Form.Item>

    // <Form.Item
    //   label="Phone number:"
    //   name="PhoneNumber"
    //   rules={[
    //     {
    //       required: true,
    //       message: 'Please input!',
    //     },
    //   ]}
    // >
    //   <Input placeholder='Enter your Phone Number'/>
    // </Form.Item>

    // {/* <Form.Item
    //   label="DatePicker"
    //   name="DatePicker"
    //   rules={[
    //     {
    //       required: true,
    //       message: 'Please input!',
    //     },
    //   ]}
    // >
    //   <DatePicker />
    // </Form.Item>

    // <Form.Item
    //   label="RangePicker"
    //   name="RangePicker"
    //   rules={[
    //     {
    //       required: true,
    //       message: 'Please input!',
    //     },
    //   ]}
    // >
    //   <RangePicker />
    // </Form.Item> */}

//     <Form.Item
//       wrapperCol={{
//         offset: 6,
//         span: 16,
//       }}
//     >
//       <Button type="primary" htmlType="submit" onClick={notify}>
//         Submit
//       </Button>
//     </Form.Item>
//   </Form>
//   </Card>
//   )

//     }
// export default Enroll;
import React from 'react';
import { Button, Card, Form, Input, InputNumber, Select } from 'antd';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

function Enroll() {
  const notify = () => {
    toast.success('Course Enrolled Succeddfully!', {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      transition: 'flip',
    });
  };

  return (
    <Card style={{ marginTop: '5px', marginLeft: '15%', marginRight: '2px', marginBottom: '20px', width: '70%', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
      <Form
        {...formItemLayout}
        variant="filled"
        style={{
          maxWidth: 600,
        }}
      >
        {/* Form Items */}
        <Form.Item
          label="Name"
          name="Name"
          rules={[{ required: true, message: 'Please input!' }]}
        >
          <Input placeholder='Enter your Name' />
        </Form.Item>
        <Form.Item
      label="Father Name:"
      name="FatherName"
      rules={[
        {
          required: true,
          message: 'Please input!',
        },
      ]}
    >
      <InputNumber
        style={{
          width: '100%',
        }}
        placeholder='Enter your Father Name'
      />
    </Form.Item>

    <Form.Item
      label="Mother Name:"
      name="MotherName"
      rules={[
        {
          required: true,
          message: 'Please input!',
        },
      ]}
    >
      <Input placeholder='Enter your Mother Name'/>
    </Form.Item>

    <Form.Item
      label="Email ID:"
      name="EmailID"
      rules={[
        {
          required: true,
          message: 'Please input!',
        },
      ]}
    >
      <Input placeholder='Enter your Email ID'/>
    </Form.Item>

    <Form.Item
      label="Gender"
      name="Gender"
      rules={[
        {
          required: true,
          message: 'Please input!',
        },
      ]}
    >
      <Select placeholder="Gender" />
    </Form.Item>

    <Form.Item
      label="Age:"
      name="Age"
      rules={[
        {
          required: true,
          message: 'Please input!',
        },
      ]}
    >
      <Input placeholder='Enter your Age'/>
    </Form.Item>

    <Form.Item
      label="Phone number:"
      name="PhoneNumber"
      rules={[
        {
          required: true,
          message: 'Please input!',
        },
      ]}
    >
      <Input placeholder='Enter your Phone Number'/>
    </Form.Item>

    {/* <Form.Item
      label="DatePicker"
      name="DatePicker"
      rules={[
        {
          required: true,
          message: 'Please input!',
        },
      ]}
    >
      <DatePicker />
    </Form.Item>

    <Form.Item
      label="RangePicker"
      name="RangePicker"
      rules={[
        {
          required: true,
          message: 'Please input!',
        },
      ]}
    >
      <RangePicker />
    </Form.Item> */}

        {/* Other Form Items... */}

        <Form.Item
          wrapperCol={{ offset: 6, span: 16 }}
        >
          <Button type="primary" htmlType="submit" onClick={notify} >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default Enroll;
