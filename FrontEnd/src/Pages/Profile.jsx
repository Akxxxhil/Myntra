import React from 'react'
import { useState } from 'react';
import axios from 'axios'

function Profile() {
  const [formData, setFormData] = useState({
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value, })
  }
  function submitHnadler(e) {
    e.preventDefault();
    signup()
    console.log("submit done");
  }
  const signup = async () => {
    try {
      const res = await axios.post("http://localhost:3000/app/v1/signup",formData)
      console.log(res.data);
    } catch (error) {
      console.error(error)
    }

  }
  return (
    <>

      <div className='flex justify-around py-3 px-4'>
        <div>
          <div>
            <div className='py-6 px-7 flex flex-col items-center justify-center'>
              <div className='flex justify-center items-center py-3 px-2'>Log In to Your Account</div>
              <div className='flex flex-col items-center justify-center gap-6 w-full'>
                <div className='flex items-center justify-center gap-3 w-full'>
                  <label htmlFor="email" className="w-1/4 text-right">Email</label>
                  <input
                    className='border border-green-700 p-2 w-3/4'
                    type="text"
                    name="email"
                    id="email"
                    placeholder='email'
                  />
                </div>
                <div className='flex items-center justify-center gap-3 w-full'>
                  <label htmlFor="password" className="w-1/4 text-right">Password</label>
                  <input
                    className='border border-green-700 p-2 w-3/4'
                    type="password"
                    name="password"
                    id="password"
                    placeholder='password'
                  />
                </div>
              </div>
            </div>

            <div className='flex justify-center items-center py-4'>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Login and Continue
                </span>
              </button>
            </div>
          </div>

        </div>


        <form action="" onSubmit={submitHnadler}>
          <div className='px-6 py-5'>
            <div className='flex justify-center items-center py-3 px-2'>Create An Account</div>
            <div className='flex flex-col items-center justify-center gap-6 w-full'>
              <div className='flex items-center justify-center gap-3 w-full'>
                <label htmlFor="email" className="w-1/4 text-right">UserName</label>
                <input
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  className='border border-green-700 p-2 w-3/4'
                  type="text"
                  placeholder='email'
                />
              </div>
              <div className='flex flex-col items-center justify-center gap-6 w-full'>
                <div className='flex items-center justify-center gap-3 w-full'>
                  <label htmlFor="email" className="w-1/4 text-right">firstName</label>
                  <input
                    onChange={handleChange}
                    className='border border-green-700 p-2 w-3/4'
                    type="text"
                    name="firstName"
                    placeholder='first name'
                    value={formData.firstName}
                  />
                </div>
                <div className='flex flex-col items-center justify-center gap-6 w-full'>
                  <div className='flex items-center justify-center gap-3 w-full'>
                    <label htmlFor="email" className="w-1/4 text-right">lastName</label>
                    <input
                      onChange={handleChange}
                      className='border border-green-700 p-2 w-3/4'
                      type="text"
                      name="lastName"
                      placeholder='last name'
                      value={formData.lastName}
                    />
                  </div>
                  <div className='flex flex-col items-center justify-center gap-6 w-full'>
                    <div className='flex items-center justify-center gap-3 w-full'>
                      <label htmlFor="email" className="w-1/4 text-right">email</label>
                      <input
                        onChange={handleChange}
                        className='border border-green-700 p-2 w-3/4'
                        type="text"
                        name="email"
                        placeholder='email'
                        value={formData.email}
                      />
                    </div>
                    <div className='flex flex-col items-center justify-center gap-6 w-full'>
                      <div className='flex items-center justify-center gap-3 w-full'>
                        <label htmlFor="email" className="w-1/4 text-right">password</label>
                        <input
                          onChange={handleChange}
                          className='border border-green-700 p-2 w-3/4'
                          type="text"
                          name="password"
                          placeholder='password'
                          value={formData.password}
                        />
                      </div>
                      <div className='flex flex-col items-center justify-center gap-6 w-full'>
                        <div className='flex items-center justify-center gap-3 w-full'>
                          <label htmlFor="email" className="w-1/4 text-right">RePassword</label>
                          <input
                            onChange={handleChange}
                            className='border border-green-700 p-2 w-3/4'
                            type="text"
                            name="confirmPassword"
                            placeholder='confirm password'
                            value={formData.confirmPassword}
                          />
                        </div>


                        <div className='flex justify-center items-center py-4'>
                          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                              SignUp and Continue
                            </span>
                          </button>
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







    </>

  )
}

export default Profile
