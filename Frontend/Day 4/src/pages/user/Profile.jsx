import React, { useState } from "react";
import profile from "../../assets/images/profile.png";
import "../../assets/css/user.css";
import { Link } from "react-router-dom";
import { Button, Card, Typography } from "@mui/material";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import cols from "../../assets/others/AcademyData.json";
import { Col, Row, Statistic, Table } from "antd";
// import Tables from "./Table";
const columns = [
  {
    title: "Course Name",
    width: 100,
    dataIndex: "name",
    key: "name",
    fixed: "left",
  },
  {
    title: "Status",
    width: 100,
    dataIndex: "status",
    key: "status",
    fixed: "left",
  },
];
const data = [
  {
    key:1,
    name:"Asuma Senseicademy",
    status:"active"
  },
  {
    key:2,
    name:"Shogi Academy",
    status:"active"
  },
  {
    key:1,
    name:"Asuma Senseicademy",
    status:"active"
  },
  {
    key:1,
    name:"Asuma Senseicademy",
    status:"active"
  },
];
// for (let i = 0; i < 100; i++) {
//   data.push({
//     key: i,
//     name: `Edward ${i}`,
//     age: 32,
//     address: `London Park no. ${i}`,
//   });
// }1
const Profile = () => {
  const [isEditing, setEditing] = useState(false);
  const [name, setName] = useState("user");
  const [email, setEmail] = useState("user@gmail.com");
  const [contactNumber, setContactNumber] = useState("123-258-1239");
  return (
    <div style={{ display: "flex", marginTop: "3%" }}>
      <div
        className="profile-col1"
        style={{ width: "50%", marginTop: "6%", marginLeft: "10%" }}
      >
        <div className="profile-content" style={{ width: "100%" }}>
          <Card sx={{ maxWidth: 500, borderRadius: "20px" }} elevation={5}>
            <div
              style={{
                display: "flex",
                marginLeft: "5%",
                marginTop: "10%",
                marginRight: "5%",
              }}
            >
              <figure className="avatar-profile" style={{ marginRight: "5%" }}>
                <img
                  className="rounded-circle img-fluid"
                  src={profile}
                  alt=""

                  // width={500}
                />
              </figure>
              <div style={{ marginTop: "3%" }}>
                <Typography variant="h6">UserName : XXX</Typography>
                <Typography variant="h6">Age : 20</Typography>
                <Typography variant="h6">e-mail : mail@gmail.com</Typography>
              </div>
            </div>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#6c926d",
                marginLeft: "60%",
                marginBottom: "5%",
              }}
              size="large"
            >
              Edit Profile
            </Button>
          </Card>
        </div>
        <div style={{ width: "100%", marginTop: "3%" }}>
          <Card
            sx={{ maxWidth: 500, borderRadius: "20px", padding: "2%" }}
            elevation={5}
          >
            <Row gutter={16}>
              <Col span={12}>
                <Card bordered={false}>
                  <Statistic
                    title="Course Enrolled"
                    value={7}
                    // precision={2}
                    valueStyle={{
                      color: "#3f8600",
                    }}
                    prefix={<ArrowUpOutlined />}
                    // suffix="%"
                  />
                </Card>
              </Col>
              <Col span={12}>
                <Card bordered={false}>
                  <Statistic
                    title="Course Completed"
                    value={1}
                    // precision={2}
                    valueStyle={{
                      color: "#3f8600",
                    }}
                    prefix={<ArrowUpOutlined />}
                    // suffix="%"
                  />
                </Card>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
      <div style={{ width: "50%", marginTop: "6%" }}>
        <Card
          style={{
            padding: "2%",
            width: "80%",
            height: "97%",
            borderRadius: "20px",
          }}
          elevation={5}
        >
          <center>
            <Typography variant="h4" style={{ marginBottom: "2%" }}>
              My Learning
            </Typography>
          </center>
          <Table
            columns={columns}
            dataSource={data}
            scroll={{
              y: 240,
            }}

            // scroll={{
            //   x: 1500,
            //   y: 300,
            // }}
          />
        </Card>
      </div>
    </div>
  );
};

export default Profile;
