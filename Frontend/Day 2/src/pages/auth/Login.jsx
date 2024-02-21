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
} from "@mui/material";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Box from "@mui/material/Box";

import { useNavigate } from "react-router-dom";

const Login = ({ handleChange }) => {
  const nav = useNavigate();
  const paperStyle = { height: "69vh", width: 500, margin: "0 auto" };
  const btnstyle = { margin: "10px 0", backgroundColour: "#6c926d" };

  const initialValues = {
    role: "user",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    role: Yup.string().required("Required"),
    email: Yup.string().email("Enter valid email").required("Required"),
    password: Yup.string().required("Required"),
  });

  const NavTo = (role) => {
    nav(`/reign/${role}/home`, { replace: true });
  };

  const onSubmit = (values, props) => {
    console.log(values.role);
    console.log(values.email);
    console.log(values.password);

    setTimeout(() => {
      props.resetForm();
      NavTo(values.role);
      props.setSubmitting(false);
    }, 1000);

    // signInWithEmailAndPassword(auth, values.email, values.password)
    // 	signInWithEmailAndPassword(auth, values.email, values.password)
    // 	.then((auth) => {
    // 		NavTo();
    // 	})
    // 	.catch((error) => console.error(error));
  };
  return (
    <Box>
      {/* <Avatar alt="logo" src="./logo.jpeg" style={avatarStyle} sx={{ */}
      {/* position: 'relative', left: 50 */}
      {/* }} /> */}
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
                  as={Select}
                  label="Role"
                  name="role"
                  placeholder="Select Role"
                  fullWidth
                  required
                >
                  {/* Add MenuItem components for each option */}
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="user">User</MenuItem>
                  {/* Add more MenuItems as needed */}
                </Field>
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
          <Typography>
            <Link href="#" style={{ color: "#6c926d" }}>
              <Typography style={{ color: "#6c926d" }}>
                Forgot password ?
              </Typography>
            </Link>
          </Typography>
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
  );
};

export default Login;
