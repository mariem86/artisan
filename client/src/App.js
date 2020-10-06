import React, { useEffect} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import AppNavbar from "./components/AppNavbar";
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
import Home from "./components/pages/Home";
import AnnoncesListe from "./components/AnnoncesListe"
import AnnoncesListecl from "./components/AnnoncesListecl"
import Dashboard from "./components/pages/Dashboard";
import addProfile from "./components/addProfile";
import PrivateRoute from "./components/route/PrivateRoute";
import EditProfile from "./components/EditProfile"
import { getAuthUser } from "./js/action/authActions";


import "./App.css";


function App() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.authReducer);

 

  const getUser = () => dispatch(getAuthUser());
  useEffect(() => {
    getUser();
  }, []);
 
  return (
   
    <BrowserRouter >
      <AppNavbar />
      
      <Switch>
       <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login}  />
        <Route exact path="/" component={Home}  />
        <Route path="/addProfile" component={addProfile} />
        <Route path ="/editProfile" component={EditProfile}/>
        <PrivateRoute path="/Annoncescl" component={AnnoncesListecl} />
        <PrivateRoute path="/Annonces" component={AnnoncesListe} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
      
      
    </BrowserRouter>
   
  );
}

export default App;
