import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../components/Header";
import RegisterPage from "../pages/RegisterPage";

function RegisterLayout() {
  const [status, setStatus] = useState('signin')
  const [view, setView] = useState(false)


  const submitSignIn = (e) => {
    e.preventDefault();
    toast.warn("Hali bazaga ulanmadi !")
  }
  
  
  const submitSignUp = (e) => {
    e.preventDefault();
    toast.warn("Hali bazaga ulanmadi !")
  }
  
  return (
    <div className="w-screen relative bg-base-300 min-h-screen">
      <Header />
      <RegisterPage />
    </div>
  );
}

export default RegisterLayout;
