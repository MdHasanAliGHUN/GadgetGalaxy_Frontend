import React, { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const Register = () => {
  const { createUser, logInWithGoogle } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);

        Swal.fire({
          icon: "success",
          title: "Registration Successful!",
          text: "Your account has been created.",
          showConfirmButton: false,
          timer: 2000,
        });

        reset();
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        console.log("Error:", error);

        Swal.fire({
          icon: "error",
          title: "Registration Failed!",
          text: error.message,
        });
      });
  };

  const handleGoogleLogin = () => {
    logInWithGoogle()
      .then((result) => {
        console.log("Google Login Success:", result.user);

        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((error) => {
        console.error("Google Login Error:", error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md md:max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="name">
              Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="email">
              Email
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Invalid email format",
                },
              })}
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="button"
                className="absolute right-4 top-2.5 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 cursor-pointer"
          >
            Register
          </button>
        </form>

        <div className="my-4 text-center text-gray-500">or</div>

        {/* Google Button */}
        <button
          onClick={handleGoogleLogin}
          className="w-full border border-gray-300 py-2 rounded-lg cursor-pointer flex items-center justify-center hover:bg-gray-100 transition duration-200"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Continue with Google
        </button>

        {/* Already have an account */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/logIn" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
