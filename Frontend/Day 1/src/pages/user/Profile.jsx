import React, { useState } from "react";
import profile from "../../assets/images/profile.png";
import "../../assets/css/user.css";
import { Link } from "react-router-dom";
const Profile = () => {
  const [isEditing, setEditing] = useState(false);
  const [name, setName] = useState("user");
  const [email, setEmail] = useState("user@gmail.com");
  const [contactNumber, setContactNumber] = useState("123-258-1239");
  return (
    <div>
      <div className="profile-content">
        <div className="row justify-content-around mt-5 user-info">
          <div className="col-12 col-md-3">
            <figure
              className="avatar-profile"
              style={{ marginRight: "25%" }}
            >
              <img
                className="rounded-circle img-fluid"
                src={profile}
                alt=""
                // width={500}
              />
            </figure>
            <Link
              to="/myprofile/update"
              className="button signup btn-primary btn-block my-5"
              style={{ marginLeft: "20%" }}
            >
              Edit Profile
            </Link>
          </div>

          <div className="col-12 col-md-5 sum-card">
            <h4>Full Name</h4>
            {/* <p>{user.name}</p>

            <h4>Email Address</h4>
            <p>{user.email}</p>
            <h4>Joined</h4>
            <p>{String(user.createdAt).substring(0, 10)}</p> */}

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
