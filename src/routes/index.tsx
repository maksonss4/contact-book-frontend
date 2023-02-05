import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { LandingPage } from "../pages/Landingpage";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export function ContinerRoutes() {
  return (
    <Routes>
      <Route path="landingpage" element={<LandingPage />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate replace to={"landingpage"} />} />
    </Routes>
  );
}
