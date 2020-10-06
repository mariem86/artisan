import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { editProfil, getCurrentProfile } from "../js/action/profileActions"

//import { useHistory } from "react-router-dom";
import ProfileActions from './pages/ProfileActions';


// let history = useHistory();
const EditProfile = () => {
  const [profileName, setProfileName] = useState("");
  const [description, setDescription] = useState("");
  const [adress, setAdress] = useState("");
  const [avatar, setAvatar] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [codePostal, setCodePostal] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [Diploma, setDiploma] = useState("");
  const [Rating, setRating] = useState("");
  const [id, setId] = useState(0);
  const [edit, setEdit] = useState(false)
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profileReducer.profile);

  const getProfile = () => dispatch(getCurrentProfile());
  useEffect(() => {
    (getProfile());
  })
  const editProfill = () => {
   
    dispatch(editProfil(id, { id, profileName, description, adress, avatar, speciality, codePostal, phoneNumber, Diploma, Rating }))
    setProfileName("")
    setDescription("")
    setAdress("")
    setAvatar("")
    setSpeciality("")
    setCodePostal("")
    setPhoneNumber("")
    setDiploma("")
    setRating("")
    setId(0)
    setEdit(false)
  
  }
  const getProfil = (profile) => {
    setProfileName(profile.profileName)
    setDescription(profile.description)
    setAdress(profile.adress)
    setAvatar(profile.avatar)
    setSpeciality(profile.speciality)
    setCodePostal(profile.codePostal)
    setPhoneNumber(profile.phoneNumber)
    setDiploma(profile.Diploma)
    setRating(profile.Rating)
    setId(profile._id)
    setEdit(true)

  };

  return (

    <div>
      <div>

        <ProfileActions edit={edit} getProfil={getProfil}/>
      </div>
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Create Your Profile</h1>
              <p className="lead text-center">
                Let's get some information to make your profile stand out
              </p>
              <small className="d-block pb-3">* = required fields</small>
              <h1>Create A Profile</h1>
              <form>
                <label for="profileName">profileName</label>
                <input
                  onChange={(e) => setProfileName(e.target.value)}
                  value={profileName}
                  type="text"
                  name="profileName"
                  id="profileName"
                  placeholder="Enter your profileName ...."
                /><br />
                <label for="description">description</label>
                <input
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Enter your description ...."
                /><br />
                <label for="adress">adress</label>
                <input
                  onChange={(e) => setAdress(e.target.value)}
                  value={adress}
                  type="text"
                  name="adress"
                  id="adress"
                  placeholder="Enter your adress ...."
                />
                <br />
                <label for="avatar">avatar</label>
                <input
                  onChange={(e) => setAvatar(e.target.value)}
                  value={avatar}
                  type="text"
                  name="profileAvatar"
                  id="profileAvatar"
                  placeholder="Enter your Avatar ...."
                /><br />
                <label for="speciality">speciality</label>
                <input
                  onChange={(e) => setSpeciality(e.target.value)}
                  value={speciality}
                  type="text"
                  name="profileSpeciality"
                  id="profileSpeciality"
                  placeholder="Enter your profileName ...."
                /><br />
                <label for="codePostal">codePostal</label>
                <input
                  onChange={(e) => setCodePostal(e.target.value)}
                  value={codePostal}
                  type="text"
                  name="codePostal"
                  id="codePostal"
                  placeholder="Enter your codePostal ...."
                />
                <br />
                <label for="phoneNumber">phoneNumber</label>
                <input
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="Enter your phoneNumber ...."
                />
                <label for="Diploma">Diploma</label>
                <input
                  onChange={(e) => setDiploma(e.target.value)}
                  value={Diploma}
                  type="text"
                  name="Diploma"
                  id="Diploma"
                  placeholder="Enter your Diploma ...."
                /><br />
                <label for="Rating">Rating</label>
                <input
                  onChange={(e) => setRating(e.target.value)}
                  value={Rating}
                  type="text"
                  name="Rating"
                  id="Rating"
                  placeholder="Enter your Rating ...."
                />

                <button
                  onClick={() => {
                    editProfill();
                  }}
                >
                  edit
          </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProfile