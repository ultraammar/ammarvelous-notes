import React from 'react'
import { useNavigate } from 'react-router-dom';
import authStore from 'stores/authStore';

export default function SignupForm() {

    const store= authStore();
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        console.log("signup form submitted");
        await store.signup();
        navigate('/login');
        
    }

  return (
    <form onSubmit={handleSignup}>
      <label htmlFor="email"> Email: </label>
      <input
        onChange={store.updateSignupForm}
        value={store.signupForm.email}
        type="email"
        name="email"
        id="email"
      />
      <label htmlFor="password"> Password: </label>
      <input
        onChange={store.updateSignupForm}
        value={store.signupForm.password}
        type="password"
        name="password"
        id="password"
      />
      <button type="submit">Signup</button>
    </form>
  )
}
