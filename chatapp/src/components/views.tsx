import { Routes, Route } from "react-router-dom";
import Login from "../components/login/login";
import SignUp from "./login/signup";

export default function Views() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
}
