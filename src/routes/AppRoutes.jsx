import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Principal from "../pages/Principal/principal.jsx";

import AuthLayout from "../layouts/AuthLayout";
import Home from "../pages/Home/Home.jsx";
import Login from "../pages/Login/Login.jsx";
import Register from "../pages/Register/Register.jsx";
// import DashboardLayout from "../layouts/DashboardLayout";
// import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
    return (

        <Routes>
            <Route element={<AuthLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/login/user" element={<Login />} />
                <Route path="/register/user" element={<Register />} />
            </Route>
        </Routes>

    )

}
export default AppRoutes;