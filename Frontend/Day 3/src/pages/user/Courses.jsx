
// import React, { useState } from "react";
// import { Input, Rate } from "antd";
// import { useParams } from "react-router-dom";
// import academyData from "../../assets/others/AcademyData.json";
// import { Button, Card, CardMedia, Typography } from "@mui/material";
// import "../../assets/css/user.css";

// const { Search } = Input;

// const Courses = () => {
//   const { id } = useParams();
//   const onSearch = (value, _e, info) => console.log(info?.source, value);
//   const [searchQuery, setSearchQuery] = useState("");
  
//   const academy = academyData.find((academy) => academy.id === parseInt(id));

//   if (!academy) {
//     return <div>Academy not found</div>;
//   }

//   return (
//     <div style={{ height: "100vh", padding: "3% 20%" }}>
//       <div style={{
//           width: "70vw",
//           float: "inline-end",
//           marginBottom: "3%",
//         }}>
//       <Search
//           placeholder="input search Courses.."
//           allowClear
//           enterButton="Search"
//           size="large"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           style={{ width: "50%",marginLeft:"30%" }}
//           className="custom-search"
//         />
//       </div>
//       <div>

//       {academy.courses.map((course) => (
//         <Card
//           style={{
//             display: "flex",
//             padding: "2%",
//             justifyContent: "space-between",
//             borderRadius: "20px",
//             marginBottom: "3%",
//             backgroundColor: "#88AF89",
//           }}
//           key={course.course_id}
//         >
//           <div
//             style={{
//               width: "33%",
//               height: "200px",
//               borderRadius: "20px",
//               overflow: "hidden",
//             }}
//           >
//             {/* <img
//               src={course.course_image}
//               alt={course.course_name}
//               width="100%"
//               style={{ objectFit: "cover", height: "100%" }}
//             /> */}
//             <CardMedia
//                     sx={{ height: 230 }}
//                     image={course.course_img}
//                     // {console.log({result.img})}
//                     title={course.course_name}
                    
//                     style={{ borderRadius: "20px" }}
//                   />
//           </div>
//           <div
//             style={{
//               width: "65%",
//               borderRadius: "20px",
//               backgroundColor: "white",
//               paddingBottom: "2%",
//             }}
//           >
//             <center>
//               <Typography variant="h5">{course.course_name}</Typography>
//             </center>
//             <div
//               style={{
//                 paddingLeft: "6%",
//                 paddingRight: "3.8%",
//                 marginTop: "1.5%",
//               }}
//             >
//               <Typography variant="body3">
//                 {course.course_description}
//               </Typography>
//             </div>
//             <div style={{ marginTop: "1%", display: "flex" }}>
//               <div style={{ paddingLeft: "6%", width: "50%" }}>
//                 <Typography>
//                   Course Duration :- {course.duration}
//                 </Typography>
//                 <Typography>
//                   Learner's Count :- {course.number_of_students}
//                 </Typography>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                   marginLeft: "23%",
//                 }}
//               >
//                 <div>
//                   <Rate value={course.rate} />
//                 </div>
//                 <Button
//                   variant="contained"
//                   style={{
//                     color: "white",
//                     backgroundColor: "#6c926d",
//                     marginTop: "10%",
//                   }}
//                   size="large"
//                 >
//                   Expand
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </Card>
//       ))}
//       </div>
//     </div>
//   );
// };

// export default Courses;
import React, { useState } from "react";
import { Input, Rate } from "antd";
import { useParams } from "react-router-dom";
import academyData from "../../assets/others/AcademyData.json";
import { Button, Card, CardMedia, Typography } from "@mui/material";
import "../../assets/css/user.css";
import { Link } from "react-router-dom";

const { Search } = Input;

const Courses = () => {
  const { id } = useParams();
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const [searchQuery, setSearchQuery] = useState("");
  
  const academy = academyData.find((academy) => academy.id === parseInt(id));

  if (!academy) {
    return <div>Academy not found</div>;
  }

  const filteredCourses = academy.courses.filter((course) =>
    course.course_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ height: "100vh", padding: "3% 20%"}}>
      <div style={{
          width: "70vw",
          float: "inline-end",
          marginBottom: "3%",
        }}>
        <Search
          placeholder="Search for courses.."
          allowClear
          enterButton="Search"
          size="large"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ width: "50%",marginLeft:"30%" }}
          className="custom-search"
          onSearch={onSearch}
        />
      </div>
      <div>
        {filteredCourses.map((course) => (
          <Card
            style={{
              display: "flex",
              padding: "2%",
              justifyContent: "space-between",
              borderRadius: "20px",
              marginBottom: "3%",
              backgroundColor: "#88AF89",
            }}
            key={course.course_id}
          >
            {/* <div
              style={{
                width: "33%",
                height: "200px",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <CardMedia
                sx={{ height: 230 }}
                image={course.course_img}
                title={course.course_name}
                style={{ borderRadius: "20px", objectFit: "cover" }}
              />
            </div> */}
            <div
              style={{
                width: "100%",
                borderRadius: "20px",
                backgroundColor: "white",
                paddingBottom: "2%",
                paddingTop:"2%"
              }}
            >
              <center>
                <Typography variant="h5" >{course.course_name}</Typography>
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
                  <Button
                    variant="contained"
                    component={Link} // Use Link as the component
                    to={`/reign/user/academy/${id}/course/${course.course_id}`}
                    style={{
                      color: "white",
                      backgroundColor: "#6c926d",
                      marginTop: "10%",
                    }}
                    size="large"
                  >
                    Enroll
                  </Button>
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

