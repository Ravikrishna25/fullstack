import React ,{useState}from "react";
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

const Layout = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <Container maxWidth="lg">
        {/* <Typography variant="h4" align="center" style={{ marginTop: "50px" }}>
          MUI
        </Typography> */}
        
        <Grid container spacing={5} style={{ marginTop: "20px" }}>
          {Data.map((result, index) => (
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
                  <Typography gutterBottom variant="h5" component="div">
                    {result.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>

                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Layout;
