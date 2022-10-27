import React, { useState } from "react";
import {
  Link, useNavigate,
} from "react-router-dom";

const RG = () => {


  const handleUserSignUp = async (event) => {
    event.preventDefault();

    const newUser = {
      User_FirstName: event.target.User_FirstName.value,
      User_LastName: event.target.User_LastName.value,
      User_Email: event.target.User_Email.value,
      Mobile_No: event.target.Mobile_No.value,
      pass_word: event.target.pass_word.value,
      // confirmPassword: event.target.confirmPassword.value,
      User_role: "user",
    };

    fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("successfully signup");
          console.log(data);
          event.target.reset();
        }
      });
  };
  return (
    <>
      <form onSubmit={handleUserSignUp} class="w-full max-w-lg m-28 px-8 rounded-xl shadow py-8">
        <h2 className="text-[30px] font-black mb-10 text-center">
          Create New Account
        </h2>
        <div class="flex flex-wrap -mx-3 mb-6 ">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="User_FirstName"
            >
              First Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="User_FirstName"
              name="User_FirstName"
              type="text"
              required
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="User_LastName"
            >
              Last Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="User_LastName"
              name="User_LastName"
              type="text"
              required
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="User_Email"
            >
              Email
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="User_Email"
              name="User_Email"
              type="email"
              required
            />
          </div>
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="Mobile_No"
            >
              Mobile Number
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="Mobile_No"
              name="Mobile_No"
              type="number"
              required
            />
          </div>
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="pass_word"
            >
              Password
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="pass_word"
              name="pass_word"
              type="password"
              placeholder="******************"
              required
            />
            <div class="md:w-2/3"></div>
          </div>
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="******************"
              required
            />
            <div class="md:w-2/3"></div>
          </div>
        </div>
        <div className="text-center">
        <button
          class="btn w-full max-w-xs"
          type="button"
        >
          Sign Up
        </button>
        <p className="mt-4">
          Already have an account?
          <Link to="/login" className="text-[#0B5ED7] pl-2">
            login
          </Link>
        </p>
        </div>
      </form>
    </>
  );
};

export default RG;
