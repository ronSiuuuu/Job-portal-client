import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
         <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="card w-full max-w-md shadow-xl bg-white p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          placeholder="Your email"
          className="input input-bordered w-full mb-4"
          required
        />

        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          placeholder="Your password"
          className="input input-bordered w-full mb-4"
          required
        />

        <button className="btn btn-primary w-full mt-2">Login</button>

        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
    );
};

export default Login;