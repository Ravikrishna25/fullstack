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
  IconButton,
  Fab,
} from "@mui/material";
import Container from "@mui/material/Container";
import Data from "../../assets/others/AcademyData.json";
import "../../assets/css/user.css";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from '@mui/icons-material/Add';

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
          <Fab aria-label="add" style={{position:"fixed",marginLeft:"32%",backgroundColor:"#6c926d"}}>
        <AddIcon />
      </Fab>
      </div>

      <div>
        <Container
          maxWidth="lg"
          style={{ marginTop: "1%", marginBottom: "2%" }}
        >
          <Grid container spacing={2}>
            {filteredData.map((result, index) => (
              <Grid item xs={12} sm={4} ms={4} key={index}>
                <Card
                  sx={{ maxWidth: 345, height: "100%", borderRadius: "20px" }}
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
                    <CardContent style={{ marginBottom: "-8%" }}>
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
                    <div
                      style={{
                        display: "flex",
                      }}
                    >
                      <IconButton>
                      <EditIcon style={{marginRight:"1%"}}/>
                      </IconButton>
                      <IconButton>
                        <DeleteIcon />
                      </IconButton>
                    </div>
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
