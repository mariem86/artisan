import React from "react";
import { Link } from "react-router-dom"
import {useDispatch} from  "react-redux"
import {clearCurrentProfile} from "../../js/action/profileActions";



 function ProfileActions({edit,getProfil,profile}) {

const dispatch = useDispatch()
 const deleteProfile=()=>{
            dispatch(clearCurrentProfile(profile.id))
        }

    return (
        <div>
            <div className="btn-group mb-4" >
      <Link to="/editProfile" value ={edit} onClick={getProfil} className="btn btn-light" role="group" type="button" class="btn btn-primary">
        <i className="fas fa-user-circle text-info mr-1" /> Edit Profile
      </Link>
  
      <button  onClick={deleteProfile}  className="btn btn-light" type="button" class="btn btn-danger">
        Clear Profile
      </button>
     
    </div>
        </div>
    )
}
export default ProfileActions