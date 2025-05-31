import React, { useContext } from "react";

import { Link, useNavigate } from "react-router";

import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthContext";
import SocialLogin from "./SocialLogin";

const Register = () => {
  const { userSignUp, updateUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  // const [error, serError] = useState("");
  const handleNewUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    userSignUp(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Register successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
        updateUser({ displayName: name, photoUrl: photo })
          .then(() => {
            Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Update successful",
          showConfirmButton: false,
          timer: 1500,
        });
            setUser({ ...user, displayName: name, photoUrl: photo });
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: error?.code || "update Error",
              text: error?.message || "Something went wrong",
            });
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: error?.code || "Login Error",
          text: error?.message || "Something went wrong",
        });
      });
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-8">
      <h1 className="font-bold text-4xl my-3 text-center text-red-500">
        Register Now!
      </h1>
      <div className="card-body">
        <form onSubmit={handleNewUser} className="fieldset">
          {/* Name */}

          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Enter Your Name"
          />
          {/* phot url */}
          <label className="label">Photo Url</label>
          <input
            type="text"
            name="photo"
            className="input"
            placeholder="Enter Your Phot Url"
          />

          {/* email */}
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Enter Your email"
            required
          />

          {/* password */}

          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            <input
              type="password"
              required
              placeholder="Password"
              minLength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              name="password"
            />
          </label>
          <p className="validator-hint hidden">
            Must be more than 8 characters, including
            <br />
            At least one number <br />
            At least one lowercase letter <br />
            At least one uppercase letter
          </p>
          <Link to={"/login"}>Already have an account? Login</Link>
          {/* {error && <p className="text-xs text-red-500">{error}</p>} */}

          <button
            type="submit"
            className="btn bg-red-500 text-white rounded-full mt-4"
          >
            Register
          </button>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;
