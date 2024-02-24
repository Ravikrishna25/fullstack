import React from "react";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
  Select,
  MenuItem,
  Card,
} from "@mui/material";
import LoginPic from "../../assets/images/LoginPic.jpg";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Box from "@mui/material/Box";
import logo from "../../assets/images/logo.svg";

import { useNavigate } from "react-router-dom";

const Login = ({ handleChange }) => {
  const nav = useNavigate();
  const paperStyle = { height: "69vh", width: 500, margin: "0 auto", borderRadius:"20px"
};
  const btnstyle = { margin: "10px 0", backgroundColour: "#6c926d" };

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Enter valid email").required("Required"),
    password: Yup.string().required("Required"),
  });

  const NavTo = () => {
    nav(`/reign/user/home`, { replace: true });
  };

  const onSubmit = (values, props) => {
    console.log(values.role);
    console.log(values.email);
    console.log(values.password);

    setTimeout(() => {
      props.resetForm();
      NavTo();
      props.setSubmitting(false);
    }, 1000);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img src={logo} width={"11%"}/>
      <br />
      <Card
        style={{
          display: "flex",
          padding: "2%",
          backgroundColor: "#6c926d",
          width: "80%",
          borderRadius:"20px"
        }}
      >
        <div style={{ width: "60%", height: "100%" }}>
          <img
            src={LoginPic}
            height={"596px"}
            width={"100%"}
            style={{ borderRadius: "20px" }}
          />
        </div>
        <div style={{ marginLeft: "2%" }}>
          <Box>
            <Grid>
              <Paper
                style={paperStyle}
                sx={{
                  padding: 5,
                }}
              >
                <Grid align="center">
                  <h2>Sign In</h2>
                </Grid>
                <Formik
                  initialValues={initialValues}
                  onSubmit={onSubmit}
                  validationSchema={validationSchema}
                >
                  {(props) => (
                    <Form>
                      <br></br>
                      <br></br>

                      <Field
                        as={TextField}
                        label="E-mail"
                        name="email"
                        type="email"
                        placeholder="Enter E-mail"
                        fullWidth
                        required
                        helperText={<ErrorMessage name="E-mail" />}
                      />
                      <br></br>
                      <br></br>
                      <Field
                        as={TextField}
                        label="Password"
                        name="password"
                        placeholder="Enter password"
                        type="password"
                        fullWidth
                        required
                        helperText={<ErrorMessage name="password" />}
                      />
                      <br></br>
                      <br></br>
                      <Button
                        type="submit"
                        color="primary"
                        variant="contained"
                        disabled={props.isSubmitting}
                        // style={btnstyle}
                        style={{
                          backgroundColor: "#6c926d",
                          color: "white",
                          ...btnstyle,
                        }}
                        fullWidth
                      >
                        {props.isSubmitting ? "Loading" : "Sign in"}
                      </Button>
                    </Form>
                  )}
                </Formik>
                {/* <Typography>
                  <Link href="#" style={{ color: "#6c926d" }}>
                    <Typography style={{ color: "#6c926d" }}>
                      Forgot password ?
                    </Typography>
                  </Link>
                </Typography> */}
                <Typography>
                  {" "}
                  Do you have an account ?
                  <Link
                    href="http://localhost:4000/reign/register"
                    onClick={() => handleChange("event", 1)}
                    style={{ color: "#6c926d" }}
                  >
                    Sign Up
                  </Link>
                </Typography>
              </Paper>
            </Grid>
          </Box>
        </div>
      </Card>
    </div>
  );
};

export default Login;
