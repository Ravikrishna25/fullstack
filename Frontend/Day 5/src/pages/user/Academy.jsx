import React, { useState } from "react";
import { Input, Rate } from "antd";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import Container from "@mui/material/Container";
import Data from "../../assets/others/AcademyData.json";
import "../../assets/css/user.css";
import { Link } from "react-router-dom";
const { Search } = Input;

export default function Academy() {
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const [searchQuery, setSearchQuery] = useState("");
  const [hovered, setHovered] = useState(false);

  // Filter data based on search query
  const filteredData = Data.filter((result) =>
    result.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCardClick = (id) => {
    console.log("Clicked on card with ID:", id);
    // Handle whatever you need to do with the ID here
  };

  return (
    <>
      <div
        style={{
          marginTop: "5%",
          width: "70vw",
          float: "inline-end",
          marginBottom: "3%",
        }}
      >
        <Search
          placeholder="input search Academy.."
          allowClear
          enterButton="Search"
          size="large"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ width: "50%" }}
          className="custom-search"
        />
      </div>

      <div>
        <Container maxWidth="lg" style={{ marginTop: "1%",marginBottom:"2%" }}>
          <Grid container spacing={2}>
            {filteredData.map((result, index) => (
              <Grid item xs={12} sm={4} ms={4} key={index}>
                <Card
                  sx={{ maxWidth: 345,height:"100%",borderRadius:"20px" }}
                  style={{ padding: "5%" }}
                  elevation={5}
                >
                  <CardMedia
                    sx={{ height: 230 }}
                    image={result.img}
                    // {console.log({result.img})}
                    title={result.title}
                    
                    style={{ borderRadius: "20px" }}
                  />
                  <center>
                    <CardContent style={{marginBottom:"-8%"}}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        align="center"
                      >
                        {result.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {result.des}
                      </Typography>
                      <Rate value={result.rate} />
                    </CardContent>
                  </center>
                  <CardActions style={{ justifyContent: "flex-end" }}>
                    <Button
                      component={Link} // Use Link as the component
                      to={`/reign/user/academy/${result.id}`}
                      variant="contained"
                      style={{ backgroundColor: "#6c926d", color: "white" }}
                      size="large"
                      onClick={() => handleCardClick(result.id)}
                    >
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
}
