import React from "react";
import { Grid, Paper, Typography, TextField, Button } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FormHelperText } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import * as Yup from "yup";

import { useNavigate } from "react-router-dom";

// import auth from "../firebase_config";
// import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
	const nav = useNavigate();
	const paperStyle = { width: 500, margin: "0 auto" };
	const headerStyle = { margin: 0 };
	const avatarStyle = { height: 200, width: 200 };
	const marginTop = { marginTop: 0.1 };

	const initialValues = {
		name: "",
		email: "",
		gender: "",
		phoneNumber: "",
		password: "",
		confirmPassword: "",
	};

	const validationSchema = Yup.object().shape({
		name: Yup.string().min(3, "It's too short").required("Required"),
		email: Yup.string().email("Enter valid email").required("Required"),
		phoneNumber: Yup.number()
			.typeError("Enter valid Phone Number")
			.required("Required"),
		password: Yup.string()
			.min(8, "Password minimum length should be 8")
			.required("Required"),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref("password")], "Password not matched")
			.required("Required"),
	});

	const NavTo = () => {
		nav("/reign/user/home");
	};

	const onSubmit = (values, props) => {
		console.log(values)
		// console.log(props)
		// console.log(typeof values.email);
		// console.log(typeof values.password);
        
		// console.log(auth);

		setTimeout(() => {
            NavTo();
			props.resetForm();
			props.setSubmitting(false);
		}, 2000);

		// let email = values.email;

		// let password = values.password;

		
	};
	return (
		<Grid>
			<Paper
				style={paperStyle}
				sx={{
					padding: 5,
				}}>
				<Grid align="center">
					{/* <Avatar alt="logo" src="./logo.jpeg" style={avatarStyle} /> */}

					<h2 style={headerStyle}>Sign Up</h2>
					<Typography variant="caption" gutterBottom>
						Please fill this form to create an account !
					</Typography>
				</Grid>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={onSubmit}>
					{(props) => (
						<Form>
							<Field
								as={TextField}
								fullWidth
								name="name"
								label="Name"
								placeholder="Enter your name"
								helperText={<ErrorMessage name="name" />}
							/>
							<br></br>
							<br></br>
							<Field
								as={TextField}
								fullWidth
								name="email"
								label="Email"
								placeholder="Enter your email"
								helperText={<ErrorMessage name="email" />}
							/>
							<br></br>
							<br></br>
							{/* <FormControl component="fieldset" style={marginTop}><br></br>
                                <FormLabel component="legend">Gender</FormLabel>
                                < Field as={RadioGroup} aria-label="gender" name="gender" style={{ display: 'initial' }}>
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                </ Field><br></br>
                            </FormControl> */}
							{/* <FormHelperText><ErrorMessage name="gender" /></FormHelperText> */}
							<Field
								as={TextField}
								fullWidth
								name="phoneNumber"
								label="Phone Number"
								placeholder="Enter your phone number"
								helperText={<ErrorMessage name="phoneNumber" />}
							/>
							<br></br>
							<br></br>
							<Field
								as={TextField}
								fullWidth
								name="password"
								type="password"
								label="Password"
								placeholder="Enter your password"
								helperText={<ErrorMessage name="password" />}
							/>
							<br></br>
							<br></br>
							<Field
								as={TextField}
								fullWidth
								name="confirmPassword"
								type="password"
								label="Confirm Password"
								placeholder="Confirm your password"
								helperText={
									<ErrorMessage name="confirmPassword" />
								}
							/>
							<br></br>
							<br></br>

							<Button
								type="submit"
								variant="contained"
								disabled={props.isSubmitting}
								fullWidth
								style={{
									backgroundColor: "#6c926d",
									color: "white"}}
								color="primary">
									
								{props.isSubmitting ? "Loading" : "Sign up"}
							</Button>
						</Form>
					)}
				</Formik>
			</Paper>
		</Grid>
	);
};

export default Signup;