import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline, IconButton } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import Dashboard from "./components/Dashboard";
import CustomerDetail from "./components/CustomerDetail";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import { ProtectedRoutes } from "./hooks/ProtectedRoutes";
import AddCustomerForm from "./components/AddCustomerForm";
import Home from "./components/Home";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const toggleTheme = () => setDarkMode(!darkMode);

  const [customers, setCustomers] = useState([]);


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <div style={{ display: "flex", justifyContent: "flex-end", padding: 10 }}>
          <IconButton onClick={toggleTheme} color="inherit">
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard customers={customers} setCustomers={setCustomers}/>} />
            <Route path="/customer/:id" element={<CustomerDetail customers={customers} setCustomers={setCustomers}/>} />
            <Route path="/add-customer" element={<AddCustomerForm setCustomers={setCustomers}/>} />
          </Route>
        </Routes>
      <ToastContainer />
    </ThemeProvider>
  );
};

export default App;
