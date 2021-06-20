import React from "react";
import { Route } from 'react-router-dom';
import AdminDashboard from "../pages/Admin/AdminDashboard";
import About from "../pages/HomePage/About";
import ContactUs from "../pages/HomePage/ContactUs";
import HomePage from "../pages/HomePage/HomePage";
import BaseList from "../pages/Lists/BaseList";
import JobSeekerDetail from "../pages/Lists/JobSeekerDetail";
import LoginPage from "../pages/Auth/LoginPage";
import RegisterPage from "../pages/Auth/RegisterPage";
import Help from "../pages/HomePage/HelpPage";

export default function Dashboard() {
    return (
        <div>
        <Route exact path="/" component={HomePage}/>  
        <Route exact path="/contact" component={ContactUs}/>
        <Route exact path="/about" component={About}/>
        <Route path="/list" component={BaseList}/>
        <Route exact path="/admin/dashboard" component={AdminDashboard}/>
        <Route exact path="/jobseeker/:id" component={JobSeekerDetail}/>
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/register" component={RegisterPage}/>
        <Route exact path="/help" component={Help}/>
        </div>
    )
}
