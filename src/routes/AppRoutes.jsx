import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Home from "../pages/Home/Home.jsx";
import Login from "../pages/Login/Login.jsx";
import Register from "../pages/Register/Register.jsx";
import ProtectedRoute from "../services/protected_routes.jsx";
import Not_found from "../pages/Not Found/Not_found.jsx"
import Dashboard from "../pages/Dashboard/Dashboard.jsx";


const AppRoutes = () => {
    return (

        <Routes>
            <Route element={<AuthLayout />}>

                <Route path="/" element={<Home />} />
                <Route path="/login/user" element={<Login />} />
                <Route path="/register/user" element={<Register />} />
                <Route path="/hola" element={
                    <ProtectedRoute />
                } />
                <Route path="/dash" element={<Dashboard />} />
                <Route path="*" element={<Not_found />} />
            </Route>
        </Routes>

    )

}
export default AppRoutes;