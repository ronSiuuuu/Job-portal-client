import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthContext';
import SocialLogin from './SocialLogin';

const Login = () => {
    const { userLogin} =useContext(AuthContext);
    const handleLogin = (e)=>{
        e.PreventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
      userLogin(email,password).then(result=>{
        console.log(result);
        alert('login successful');
      }).catch(error=>{
        console.log(error.message);
      })

    }
    return (
         <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="card w-full max-w-md shadow-xl bg-white p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <form onSubmit={handleLogin}>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your email"
              className="input input-bordered w-full mb-4"
              name='email'
              required
            />
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Your password"
              className="input input-bordered w-full mb-4"
              name='password'
              required
            />
             <p className="mt-4 text-center">
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-600 hover:underline">
                Register here
              </Link>
            </p>
            <button type='submit' className="btn btn-primary w-full mt-2">Login</button>
           
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
    );
};

export default Login;