// import * as React from "react";
import React, { useState } from "react";
import { Input, Rate } from "antd";

import "../../assets/css/navbar.css";
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
import Loader from "../../components/ui/Loader";

const { Search } = Input;

export default function Academy() {
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const [searchQuery, setSearchQuery] = useState("");
  const [hovered, setHovered] = useState(false);

  // Filter data based on search query
  const filteredData = Data.filter((result) =>
    result.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div style={{ marginTop: "50px", width: "70vw", float: "inline-end" }}>
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
        <Container maxWidth="lg">
          <Grid container spacing={5} style={{ marginTop: "20px" }}>
            {filteredData.map((result, index) => (
              <Grid item xs={12} sm={4} ms={4} key={index}>
                <Card
                  sx={{ maxWidth: 345 }}
                  style={{ padding: "10px", marginBottom: "30px" }}
                >
                  <CardMedia
                    sx={{ height: 140 }}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="green iguana"
                    style={{ borderRadius: "5px" }}
                  />
                  <CardContent>
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
                    <Rate value={3} />
                  </CardContent>
                  <CardActions>
                    {hovered ? (
                      <Button variant="outlined" 
                      onMouseEnter={() => setHovered(false)}
                        onMouseLeave={() => setHovered(true)}
                        style={{ color: '#6c926d', borderColor: '#6c926d' }}
                        size="large">View</Button>
                    ) : (
                      <Button
                        variant="contained"
                        style={{ backgroundColor: '#6c926d', color: 'white' }}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        size="large"
                      >
                        View
                      </Button>
                    )}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
      {/* <Loader /> */}
    </>
  );
}
