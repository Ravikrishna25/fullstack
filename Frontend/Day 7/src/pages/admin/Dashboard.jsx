import { Card, Col, Row, Statistic } from "antd";
import React from "react";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import Charts from "./Charts";
import Pie from "./Pie";

const Dashboard = () => {
  return (
    <div style={{width:"80vw"}}>
      <div style={{  margin: "3% 2%" }}>
        <Card
          sx={{ borderRadius: "20px", padding: "2%"}}
          style={{backgroundColor:"#6c926d"}}
          elevation={5}
        >
          <Row gutter={10}>
            <Col span={6}>
              <Card bordered={false}>
                <Statistic
                  title="Learner"
                  value={0}
                  // precision={2}
                  valueStyle={{
                    color: "#3f8600",
                  }}
                  prefix={<ArrowUpOutlined />}
                  // suffix="%"
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card bordered={false}>
                <Statistic
                  title="Institute"
                  value={0}
                  // precision={2}
                  valueStyle={{
                    color: "#3f8600",
                  }}
                  prefix={<ArrowUpOutlined />}
                  // suffix="%"
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card bordered={false}>
                <Statistic
                  title="Course"
                  value={0}
                  // precision={2}
                  valueStyle={{
                    color: "#3f8600",
                  }}
                  prefix={<ArrowUpOutlined />}
                  // suffix="%"
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card bordered={false}>
                <Statistic
                  title="Course Completed"
                  value={0}
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
          <div style={{display:'flex',gap:'22px',borderRadius:'20px'}}>
            <Charts />
            <Pie />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
