import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [formadata,setFormData]=useState({
        userName: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const [error, setError] = useState("")
    const navigate=useNavigate()
    function handleChange(e){
        const { name, value } = e.target;
        setFormData({...formadata,[name]:value})
    }
    function signuphandler(e){
        e.preventDefault();
        signup()
    }
    async function signup(){
        try {
            const signupresponse= await axios.post("http://localhost:3000/app/v1/signup",formadata)
            const response=signupresponse.data
            if (response.success === true) {
                navigate("/")
              }
              else {
                setError(response.message || "Signup failed")
              }
            console.log(signupresponse.data);
        } catch (error) {
            console.error("Error Signup in:", error);
        }
    }
  return (
    <div>
      <form action="" onSubmit={signuphandler}>
        <div className="px-6 py-5">
          <div className="flex justify-center items-center py-3 px-2">
            Create An Account
          </div>
          <div className="flex flex-col items-center justify-center gap-6 w-full">
            <div className="flex items-center justify-center gap-3 w-full">
              <label htmlFor="email" className="w-1/4 text-right">
                UserName
              </label>
              <input
              value={formadata.userName}
              onChange={handleChange}
                name="userName"
                className="border border-green-700 p-2 w-3/4"
                type="text"
                placeholder="userName"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-6 w-full">
              <div className="flex items-center justify-center gap-3 w-full">
                <label htmlFor="email" className="w-1/4 text-right">
                  firstName
                </label>
                <input
                value={formadata.firstName}
                onChange={handleChange}
                  className="border border-green-700 p-2 w-3/4"
                  type="text"
                  name="firstName"
                  placeholder="first name"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-6 w-full">
                <div className="flex items-center justify-center gap-3 w-full">
                  <label htmlFor="email" className="w-1/4 text-right">
                    lastName
                  </label>
                  <input
                  value={formadata.lastName}
                  onChange={handleChange}
                    className="border border-green-700 p-2 w-3/4"
                    type="text"
                    name="lastName"
                    placeholder="last name"
                  />
                </div>
                <div className="flex flex-col items-center justify-center gap-6 w-full">
                  <div className="flex items-center justify-center gap-3 w-full">
                    <label htmlFor="email" className="w-1/4 text-right">
                      email
                    </label>
                    <input
                    value={formadata.email}
                    onChange={handleChange}
                      className="border border-green-700 p-2 w-3/4"
                      type="text"
                      name="email"
                      placeholder="email"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-6 w-full">
                    <div className="flex items-center justify-center gap-3 w-full">
                      <label htmlFor="email" className="w-1/4 text-right">
                        password
                      </label>
                      <input
                      value={formadata.password}
                      onChange={handleChange}
                        className="border border-green-700 p-2 w-3/4"
                        type="text"
                        name="password"
                        placeholder="password"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-6 w-full">
                      <div className="flex items-center justify-center gap-3 w-full">
                        <label htmlFor="email" className="w-1/4 text-right">
                          RePassword
                        </label>
                        <input
                        value={formadata.confirmPassword}
                        onChange={handleChange}
                          className="border border-green-700 p-2 w-3/4"
                          type="text"
                          name="confirmPassword"
                          placeholder="confirm password"
                        />
                      </div>

                      <div className="flex justify-center items-center py-4">
                        <button type="submit" className="flex mx-auto bg-blue-700 text-white px-4 py-2 rounded-full">SignUp and Continue</button>
                      </div>
                      <div>
                        <p>Already a member <span onClick={()=>navigate("/profile")} className="text-blue-700 underline cursor-pointer">Login Now</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
