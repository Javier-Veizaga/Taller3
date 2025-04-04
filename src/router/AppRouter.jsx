import { Routes, Route } from "react-router-dom";
import Login from "../pages/Auth/Login";
import RegistroPersonal from "../pages/Auth/RegistroPersonal";
import RegistroProveedor from "../pages/Auth/RegistroProveedor";

function AppRouter() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/registropersonal" element={<RegistroPersonal />} />
            <Route path="/registroproveedor" element={<RegistroProveedor />} />
        </Routes>
    );
}

export default AppRouter;
