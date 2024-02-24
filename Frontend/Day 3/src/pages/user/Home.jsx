import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Card className="home-card" style={{ margin: "8% 25%" }} elevation={10}>
        <CardContent>
          <center>
            <Typography variant="h5">
              "Nobody can become a grandmaster in only one day!!!"
            </Typography>
          </center>
          <br />
          <Typography style={{ lineHeight: "25px" }}>
            Start your journey with us at our Chess Academy and unlock your
            potential in every move. Learn the strategies that make champions
            and the skills that lead to victory. Join a community of passionate
            players and immerse yourself in the world of chess. From beginners
            to experts, we cater to all levels of experience. Let's make every
            move count together.
          </Typography>
          <center>
            <Link to="/reign/user/academy">
              <Button
                variant="contained"
                style={{ backgroundColor: "#6c926d", marginTop: "2%" }}
                size="large"
              >
                CheckOut»»
              </Button>
            </Link>
          </center>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
