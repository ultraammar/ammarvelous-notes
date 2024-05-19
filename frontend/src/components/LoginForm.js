import axios from "axios";
import React, { useState } from "react";
import  authStore  from "../stores/authStore";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {

    const store = authStore();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
      e.preventDefault();
      await store.login();
      navigate("/notes");
    }
   

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="email"> Email: </label>
      <input
        onChange={store.updateLoginForm}
        value={store.loginForm.email}
        type="email"
        name="email"
        id="email"
      />
      <label htmlFor="password"> Password: </label>
      <input
        onChange={store.updateLoginForm}
        value={store.loginForm.password}
        type="password"
        name="password"
        id="password"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
