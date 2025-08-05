import type { validateResultLogin } from "../interface/login";
import { validateLogin } from "../utils/loginValidation";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiFetch } from "../utils/requestApi";
import { APIURL } from "../utils/apiURL";
const Login = () => {
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({ email: '', password: '' })
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const validateResult: validateResultLogin = validateLogin(loginDetails);
    if (validateResult.valid) {
      const response = await apiFetch(APIURL.LOGINURL, loginDetails, 'POST');
      if (response) {
        console.log(response, "response");
        navigate('/home/dashboard');
      }

    } else {
      alert(validateResult.message);
    }
  }
  return (<div className="flex items-center justify-center h-screen bg-gray-100">
    <form
      onSubmit={handleLogin}
      className="bg-white p-6 rounded shadow-md w-full max-w-sm"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
        Login
      </h2>

      {/* Email Field */}
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email
        </label>
        <input
          type="text"
          name="email"
          value={loginDetails.email}
          onChange={(e) =>
            setLoginDetails({ ...loginDetails, email: e.target.value })
          }
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Password Field */}
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          value={loginDetails.password}
          onChange={(e) =>
            setLoginDetails({ ...loginDetails, password: e.target.value })
          }
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Submit Button */}
      <div>
        <input
          type="submit"
          value="Login"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer"
        />
      </div>
    </form>
  </div>
  )
}
export default Login;