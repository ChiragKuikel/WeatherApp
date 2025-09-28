import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router";
const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState("user");
  const [formData,setFormData] = useState({"usertype":"user"});
  let navigate = useNavigate();
  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };
  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const handleUserChange = (type) => {
     setUserType(type);
     setFormData({...formData,"usertype":type})
  }
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios.post('http://localhost:8000/auth/signup',formData).then(function(response){
      console.log(response.data.message);
      setIsLogin(!isLogin);
      setFormData({ usertype: userType });
      
    }).catch(function(error){
      console.log(error.response.data.message);
    })
    
  }
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    axios.post('http://localhost:8000/auth/login',formData).then(function(response){
      
      console.log(response.data.message);
      if(formData.usertype === "writer"){
      navigate("/blogs/create");
    }
    else{
      navigate("/blogs/posts");
    }
    }).catch(function(error){
        console.log(error.response.data.message);
      })
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-black">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">
          {isLogin ? "Login" : "Sign Up"} as {userType === "writer" ? "Writer" : "User"}
        </h2>

        {/* User Type Selection */}
        <div className="flex justify-center mb-4">
          <button
            className={`px-4 py-2 mx-2 rounded ${
              userType === "user" ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
            onClick={() => handleUserChange("user")}
          >
            User
          </button>
          <button
            className={`px-4 py-2 mx-2 rounded ${
              userType === "writer" ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
            onClick={() => handleUserChange("writer")}
          >
            Writer
          </button>
        </div>

        <form className="space-y-4" onSubmit={isLogin?handleLoginSubmit:handleSignupSubmit}>
            <input
              type="text"
              name="username"
              placeholder="User Name"
              className="w-full p-2 border rounded"
              required
              onChange={handleChange}
            />
          {!isLogin &&
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
            required
            onChange={handleChange}

          />}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
            required
            onChange={handleChange}

          />
          {!isLogin && <input
            type="password"
            name="repeat_password"
            placeholder="Repeat Password"
            className="w-full p-2 border rounded"
            required
            onChange={handleChange}

          />}
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600" type="submit">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"} 
          <button className="text-blue-500" onClick={toggleAuthMode}>
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;