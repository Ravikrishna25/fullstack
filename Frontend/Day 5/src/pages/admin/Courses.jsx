
import React, { useState } from "react";
import { Input, Rate } from "antd";
import academyData from "../../assets/others/AcademyData.json";
import { Button, Card, IconButton, Typography } from "@mui/material";
import "../../assets/css/user.css";
import { Link } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
const { Search } = Input;

const Courses = () => {
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = academyData.reduce((allCourses, academy) => {
    return allCourses.concat(academy.courses);
  }, []).filter((course) =>
    course.course_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ height: "100vh", padding: "3% 20%" }}>
         
      <div style={{
        width: "70vw",
        float: "inline-end",
        marginBottom: "5%",
        // alignItems:"center"
        
      }}>
        <Search
          placeholder="Search for courses.."
          allowClear
          enterButton="Search"
          size="large"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ width: "50%", marginLeft: "40%" }}
          className="custom-search"
          onSearch={onSearch}
        />
        <Fab aria-label="add" style={{position:"fixed",marginLeft:"15%",backgroundColor:"#6c926d"}}>
        <AddIcon />
      </Fab>
      </div>
      
      <div>
        {filteredCourses.map((course) => (
          <Card
            key={course.course_id}
            style={{
              display: "flex",
              padding: "2%",
              justifyContent: "space-between",
              borderRadius: "20px",
              marginBottom: "3%",
              backgroundColor: "#88AF89",
            }}
          >
            <div
              style={{
                width: "100%",
                borderRadius: "20px",
                backgroundColor: "white",
                paddingBottom: "2%",
                paddingTop: "2%"
              }}
            >
              <center>
                <Typography variant="h5">{course.course_name}</Typography>
              </center>
              <div
                style={{
                  paddingLeft: "6%",
                  paddingRight: "3.8%",
                  marginTop: "1.5%",
                }}
              >
                <Typography variant="body3">
                  {course.course_description}
                </Typography>
              </div>
              <div style={{ marginTop: "1%", display: "flex" }}>
                <div style={{ paddingLeft: "6%", width: "50%" }}>
                  <Typography>
                    Course Duration: {course.duration}
                  </Typography>
                  <Typography>
                    Learner's Count: {course.number_of_students}
                  </Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "23%",
                  }}
                >
                  <div>
                    <Rate value={course.rate} />
                  </div>
                  <div style={{display:"flex",justifyContent:"space-around"}}>
                <IconButton>

                  <EditIcon />
                </IconButton>
                <IconButton>

                  <DeleteIcon />
                </IconButton>

                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
     

    </div>
  );
};

export default Courses;
