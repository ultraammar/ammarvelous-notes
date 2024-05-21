import axios from "axios";
import React, { useState } from "react";
import authStore from "../stores/authStore";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const store = authStore();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    await store.login();
    navigate("/notes");
  };

  return (
    <div className="p-20 w-[550px] hover:w-2/5 ease-in-out duration-500">
      <div className="card  glass glass-effect-cards ">
        <div className="card-body flex justify-center ">
          <h2 className="card-title justify-center text-4xl">Login</h2>

          <form onSubmit={handleLogin}>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-2xl">Email</span>
                <span className="label-text-alt">input your email address</span>
              </div>
              <input
                onChange={store.updateLoginForm}
                value={store.loginForm.email}
                type="email"
                name="email"
                id="email"
                className="input input-lg input-bordered w-full "
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-2xl">Password</span>
                <span className="label-text-alt">Input your password</span>
              </div>
              <input
                onChange={store.updateLoginForm}
                value={store.loginForm.password}
                type="password"
                name="password"
                id="password"
                className="input input-lg input-bordered w-full "
              />
            </label>
            <div className="card-actions mt-20">
              <button type="submit" className="btn w-full  btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
