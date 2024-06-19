import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("")

  function submithandler(e) {
    e.preventDefault();
    Submithandler();
  }

  async function Submithandler() {
    if (!email || !password) {
      console.log("Email and password required");
    } else {
      try {
        const logindetails = await axios.post("http://localhost:3000/app/v1/login", { email, password });
        const response = logindetails.data
        if (response.success === true) {
          navigate("/")
        }
        else {
          setError(response.message || "Login failed")
        }
        console.log(logindetails.data);
      } catch (error) {
        console.error("Error logging in:", error);
      }
    }
  }
  function redirectSignup(){
    navigate("/Signup")
  }

  return (
    <div>
      <div className="flex justify-center items-center m-8">
        <form onSubmit={submithandler}>
          <div className="border-2 border-red-600 w-[500px] h-[350px] p-5 m-3">
            <h2 className="text-center">Login</h2>
            <div className="flex flex-col gap-4 m-6">
              <div className="flex flex-col gap-2">
                <label>Enter Your Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter Your Email"
                   className="border-2 rounded border-blue-600"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Enter Your Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Enter Your Password"
                  className="border-2 rounded border-blue-600"
                />
              </div>
            </div>
            <button type="submit" className="flex mx-auto bg-blue-700 px-4 py-2 rounded-full text-white">Submit</button>
            <div className="mt-3 text-center">
              <p>Not a Member Yet  ?  <span onClick={redirectSignup} className="text-blue-700 underline cursor-pointer">SignUp Now</span></p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
