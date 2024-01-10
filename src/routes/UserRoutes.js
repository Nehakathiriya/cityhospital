import React, { useState } from "react";
import Home from "../Container/Home/Home";
import Department from "../Container/Department/Department";
import DepartmentDetails from "../Container/Department/DepartmentDetails";
import Doctor from "../Container/Doctor/Doctor";
import About from "../Container/About/About";
import Contact from "../Container/Contact/Contact";
import Appoinment from "../Container/Appoinment/Appoinment";
import Medicine from "../Container/Medicine/Medicine";
import MedicineDetails from "../Container/Medicine/MedicineDetails";
import { Routes, Route } from "react-router-dom";
import PrivteRoutes from "./PrivteRoutes";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import Login from "../Container/LoginSignup/Login";
import MyWhishlist from "../Container/MyWhishlist/MyWhishlist";
import AddToCart from "../Container/AddToCart/AddToCart";
import Counter from "../Container/Counter/Counter";

function UserRoutes(props) {

    const [favorites, setFavorites] = useState([]);
    const [cart,setCart] = useState([]);
    
    return (
        <div>
        <Header favorites ={favorites} cart ={cart} />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/doctor" element={<Doctor favorites ={favorites} setFavorites ={setFavorites} />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/counter" element={<Counter  />} />

                <Route element={<PrivteRoutes />}>
                    <Route exact path="/department" element={<Department />} />
                    <Route exact path="/department/:id" element={<DepartmentDetails />} />
                    <Route exact path="/medicine" element={<Medicine cart = {cart} setCart={setCart}/>} />
                    <Route exact path="/medicine/:id" element={<MedicineDetails />} />
                    <Route exact path="/appoinment" element={<Appoinment />} />
                    <Route exact path="/mywishlist" element={<MyWhishlist favorites ={favorites} setFavorites ={setFavorites} />} />
                    <Route exact path="/addtocart" element={<AddToCart  cart = {cart} setCart={setCart}/>} /> 


                </Route>
            </Routes>
            <Footer />    
        </div>
    );
}

export default UserRoutes;
