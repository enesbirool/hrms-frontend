import React from "react";
import { Route } from 'react-router-dom';
import AdminDashboard from "../pages/Admin/AdminDashboard";
import About from "../pages/HomePage/About";
import ContactUs from "../pages/HomePage/ContactUs";
import HomePage from "../pages/HomePage/HomePage";
import BaseList from "../pages/Lists/BaseList";
import JobSeekerDetail from "../pages/Lists/JobSeekerDetail";
import SignUpPage from "../pages/SignUpPage"

export default function Dashboard() {
    return (
        <div>
        <Route exact path="/" component={HomePage}/>  
        <Route exact path="/contact" component={ContactUs}/>
        <Route exact path="/about" component={About}/>
        <Route path="/list" component={BaseList}/>
        <Route exact path="/admin/dashboard" component={AdminDashboard}/>
        <Route exact path="/jobseeker/:id" component={JobSeekerDetail}/>
        <Route exact path="/register" component={SignUpPage}/>
        </div>
    )
}
