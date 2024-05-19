import axios from "axios";
import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const handleOnSubmit = async (e) => {
    e.preventDefault();
    try{
        const res = await axios.post('/login', {email, password}, {withCredentials: true});
        console.log(res);
    }
    catch(err)
    {
        console.log(err);
    }

    }

  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="email"> Email: </label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        name="email"
        id="email"
      />
      <label htmlFor="password"> Password: </label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        name="password"
        id="password"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
