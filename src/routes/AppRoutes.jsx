import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Principal from "../pages/Principal/principal.jsx";

import AuthLayout from "../layouts/AuthLayout";
import Home from "../pages/Home/Home.jsx";
// import DashboardLayout from "../layouts/DashboardLayout";
// import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
    return (

        <Routes>
            <Route element={<AuthLayout />}>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>

    )

}
export default AppRoutes;