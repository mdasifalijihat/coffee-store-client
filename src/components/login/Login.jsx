import React, { use, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loginUser } = use(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // firebase login
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        alert("user login success");
        const signInInfo = {
          email,
          lastSignInTime : result.user?.metadata?.lastSignInTime
        };
        // updata bd
        fetch('https://coffee-store-server-two-omega.vercel.app/users',{
          method: "PATCH",
          headers:{
            'content-type': 'application/json'
          },
          body: JSON.stringify(signInInfo)
        })
        .then(res => res.json())
        .then(data => {
          console.log('after update patch', data)
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm pr-10 focus:ring-blue-500 focus:border-blue-500"
              />
              <span
                onClick={togglePassword}
                className="absolute inset-y-0 right-3 top-2/3 transform -translate-y-4 cursor-pointer text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Sign In
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
