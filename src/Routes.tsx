import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

function AppRoutes () {
    return(
        <Router>
            <Layout>
                <Routes>
                    <Route path ="/" element={<Home/>}></Route>
                    <Route path ="/aboutus" element={<AboutUs/>}></Route>
                </Routes>
            </Layout>
        </Router>
    );
}

export default AppRoutes;