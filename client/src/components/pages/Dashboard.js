import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {getCurrentProfile} from "../../js/action/profileActions";
import ProfileActions  from "./ProfileActions";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';

//import addProfile from "../addProfile"; 
const Dashboard = () => {
  const user = useSelector((state) => state.authReducer.user);
  const profile = useSelector((state) => state.profileReducer.profile);
 const dispatch = useDispatch();
 const getProfile = () => dispatch(getCurrentProfile());
  useEffect(() => {
    (getProfile());
 })
  let dashboardContent; 
  if (!user ) 
    return <h1>Spinner...</h1>
    else{
      // // User is login but has no profile
      if (Object.keys(profile).length > 0) {

        dashboardContent = (
          <MDBRow>
             <MDBCol style={{ maxWidth: "40rem" }}>
             <MDBCard reverse>
             <MDBCardBody cascade className="text-center">
             <MDBCardTitle>Welcome :{profile.profileName}</MDBCardTitle>
             <hr />
             <h5 className="indigo-text"><strong> {profile.Diploma}</strong></h5>
             <MDBCardText>{profile.description}</MDBCardText>
        
          {profile.adress}<br/>
          {profile.codePostal}<br/>
          {profile.phoneNumber}<br/>
          {profile.avatar}<br/>
          {profile.speciality}<br/>
          {profile.Rating}<br/>

          
        
        
           <div style={{ marginBottom: "60px" }} />
           <ProfileActions profile={profile}/>
           
         
         </MDBCardBody>
         </MDBCard>
         </MDBCol>
         </MDBRow>
       )}
        else{
       // profile existe
       dashboardContent = (
        <div>
        <h2>
         {user.firstName} {user.lastName} : {user.email}
        </h2>
        <p>You have not yet setup a profile, please add some info</p>
              <Link to="/addProfile" className="btn btn-lg btn-info">
                Create Profile
              </Link>
      </div>
      );
       }}
  return (
    <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              {dashboardContent}
    </div>
  );
};
export default Dashboard;











