import React, {  useEffect,useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { createProfile } from "../js/action/profileActions";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
  const AddProfile = () => {
    const dispatch = useDispatch();
    let history = useHistory();
    const [formData, setFormData] = useState({
      profileName: "",
      description: "",
      adress:"",
      avatar:"",
      speciality:"",
      codePostal:"",
      phoneNumber:"",
      Diploma:"",
      Rating:"",
    });
    const handleFormChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleConfim = () => {
      dispatch(createProfile(formData));
      history.push("/dashboard");
    };
return(
<form  style={{    paddingleft:" ‒100",
     paddingleft: "50px",
     paddingbottom:"50px",
     paddingbottom: "50px",
     paddingright: "50px",
     paddingtop: "50px",
     width: "1000px",
     height: "500px"
 }}>
        <h1 className="display-4 text-center">Create Your Profile</h1>
<label for="inputDisabledEx2" className="disabled">profileName</label>
<input  onChange={handleFormChange}   name="profileName" type="text" id="profileName"  placeholder="Enter your profileName ...." className="form-control"/> 
<label for="inputDisabledEx2" className="disabled">description</label>
<input  onChange={handleFormChange}   name="description" type="text" id="description"  placeholder="Enter your description ...." className="form-control" /> 
<label for="inputDisabledEx2" className="disabled">adress</label>
<input  onChange={handleFormChange}   name=" adress" type="text" id="adress"  placeholder="Enter your adress ...." className="form-control" />
<label for="inputDisabledEx2" className="disabled">avatar</label>
<input  onChange={handleFormChange}   name="avatar" type="text" id="avatar"  placeholder="Enter your avatar ...." className="form-control"/>
<label for="inputDisabledEx2" className="disabled"> speciality</label>
<input  onChange={handleFormChange}   name=" speciality" type="text" id=" speciality"  placeholder="Enter your speciality ...." className="form-control"/>   
<label for="inputDisabledEx2" className="disabled">codePostal</label>
<input  onChange={handleFormChange}   name=" codePostal" type="text" id="codePostal"  placeholder="Enter your codePostal ...." className="form-control" /> 
<label for="inputDisabledEx2" className="disabled">phoneNumber</label>
<input  onChange={handleFormChange}   name=" phoneNumber" type="text" id="phoneNumber2"  placeholder="Enter your phoneNumber ...." className="form-control"/> 
<label for="inputDisabledEx2" className="disabled">Diploma</label>
<input  onChange={handleFormChange}   name=" Diploma" type="text" id="Diploma"  placeholder="Enter your Diploma ...." className="form-control" /> 
<label for="inputDisabledEx2" className="disabled">Rating</label>
<input  onChange={handleFormChange}   name=" Rating" type="text" id="Ratinga"  placeholder="Enter your Rating ...." className="form-control" /> 
<button  onClick={() => {
  handleConfim();
  }} className="btn btn-lg btn-primary btn-block" type="submit">Confirm</button>
</form>
    );
};
export default AddProfile





