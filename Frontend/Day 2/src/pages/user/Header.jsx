import React, { useState } from "react";
import "../../assets/css/navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import profile from "../../assets/images/profile.png";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <nav className="navbar">
        <img src={logo} className="logo" />

        <ul className="nav-links">
          <Link to="/reign/user/home" className="nav_item">
            <li>Home</li>
          </Link>
          <Link to="/reign/user/academy" className="nav_item">
            <li>Academy</li>
          </Link>
          <Link to="/services" className="nav_item">
            <li>My Learning</li>
          </Link>
          <Link to="/reign/user/about" className="nav_item">
            <li>About</li>
          </Link>
        </ul>
        {/* <Link to="/reign/login">
          <Button
            variant="contained"
            style={{ backgroundColor: "#6c926d" }}
            size="large"
          >
            Login
          </Button>
        </Link> */}
         <Button  onClick={handleClickOpen} variant="contained"
            style={{ backgroundColor: "#6c926d" }}
            size="large">
        Profile
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        style={{float:"right"}}
        width="100%"
        maxWidth="md" 
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Profile
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent style={{display:"flex"}}>
          <div style={{marginRight:"5%"}}>

        <figure className='avatar-profile' style={{marginRight:"25%"}}>
            <img className="rounded-circle img-fluid" src={profile} alt=''/>
        </figure>
          </div>
          <div>

            <Typography gutterBottom >
              UserName : Name

            </Typography>
            <Typography gutterBottom>

              e-mail : mail@gmail.com
            </Typography>
          </div>
          
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
      </nav>
    </>
  );
};
export default Navbar;
