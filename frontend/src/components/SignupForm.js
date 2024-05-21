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
    <div className="p-20 w-[550px] hover:w-2/5 ease-in-out duration-500">
      <div className="card  glass glass-effect-cards ">
        <div className="card-body flex justify-center ">
          <h2 className="card-title justify-center text-4xl">Signup</h2>

          <form onSubmit={handleSignup}>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-2xl">Email</span>
                <span className="label-text-alt">input your email address</span>
              </div>
              <input
                onChange={store.updateSignupForm}
                value={store.signupForm.email}
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
                onChange={store.updateSignupForm}
                value={store.signupForm.password}
                type="password"
                name="password"
                id="password"
                className="input input-lg input-bordered w-full "
              />
            </label>
            <div className="card-actions mt-20">
              <button type="submit" className="btn w-full  btn-primary">
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
