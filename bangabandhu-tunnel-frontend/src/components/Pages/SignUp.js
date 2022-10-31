import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignUp = () => {
  const navigate = useNavigate();
  const [pass_word, setPass_word] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [MobileNoError, setMobileNoError] = useState(false);
  const [newUser, setNewUser] = useState();

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === 'User_Email') {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
      if (!isFieldValid) {
        setEmailError(true);
      } else {
        setEmailError(false);
      }
    }

    if (e.target.name === 'Mobile_No') {
      isFieldValid = /^(?:(?:\+|00)88|01)?\d{11}$/.test(e.target.value);
      if (!isFieldValid) {
        setMobileNoError(true);
      } else {
        setMobileNoError(false);
      }
    }
    if (e.target.name === 'pass_word') {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
      if (!isFieldValid) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
      }
    }

    if (isFieldValid) {
      const newUserInfo = { ...newUser };
      newUserInfo[e.target.name] = e.target.value;
      setNewUser(newUserInfo);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      User_FirstName: event.target.User_FirstName.value,
      User_LastName: event.target.User_LastName.value,
      User_Email: event.target.User_Email.value,
      Mobile_No: event.target.Mobile_No.value,
      pass_word: event.target.pass_word.value,
      User_role: 'user',
    };

    fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log(data);
        }
      });

    toast.success('Sign Up Successfully');
    navigate('/otp');
  };

  return (
    <div className="my-4 grid place-content-center">
      {/* <h2 className="text-center text-2xl font-bold">Sign Up</h2> */}

      {/* SignUp form start */}
      <form
        onSubmit={handleSubmit}
        class="w-full max-w-lg px-8 rounded-xl shadow"
      >
        <h2 className="text-[30px] font-black text-center mt-4">
          Create New Account
        </h2>
        <hr className="mb-2 mt-2" />
        {/*---------------------------------- mostofa eidited start--------------------------------- */}
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="card-id"
            >
              Card ID
            </label>
            <input
              class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="card-id"
              type="number"
              placeholder="0000000"
            />
          </div>
          <div class="w-full px-3">
            <label
              for="card-type"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Card Type
            </label>
            <select
              id="card-type"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Card Type</option>
              <option value="etc">ETC</option>
              <option value="rfid">RFID</option>
            </select>
            <div className="text-center mt-4">
              <h2 class="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                Available Balance : 500
              </h2>
            </div>
          </div>
        </div>
        {/*---------------------------------- mostofa eidited end--------------------------------- */}
        <div class="flex flex-wrap -mx-3">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="User_FirstName"
            >
              First Name
            </label>
            <input
              class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              onBlur={handleBlur}
              name="User_FirstName"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="User_LastName"
            >
              Last Name
            </label>
            <input
              class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              name="User_LastName"
              onBlur={handleBlur}
              placeholder="Enter Your Name"
              required
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="User_Email"
            >
              Email
            </label>
            <input
              class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="User_Email"
              onBlur={handleBlur}
              type="email"
              placeholder="Enter Your Email Address"
              required
            />
            {emailError && <p className="text-red-500">Email not validate</p>}
          </div>
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="Mobile_No"
            >
              Mobile Number
            </label>
            <input
              class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="number"
              onBlur={handleBlur}
              name="Mobile_No"
              placeholder="Enter Your Phone Number"
              required
            />
            {MobileNoError && (
              <p className="text-red-500">Phone Number not validate</p>
            )}
          </div>
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="pass_word"
            >
              Password
            </label>
            <input
              class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="pass_word"
              onBlur={handleBlur}
              type="password"
              placeholder="******************"
              required
            />
            {passwordError && (
              <p className="text-red-500">password not validate</p>
            )}
            <div class="md:w-2/3"></div>
          </div>
        </div>
        <div className="text-center">
          <button class="btn w-full max-w-xs" type="submit">
            Sign Up
          </button>
          <p className="mt-4 mb-5">
            Already have an account?
            <Link to="/login" className="text-[#0B5ED7] pl-2">
              login
            </Link>
          </p>
        </div>
      </form>
      {/* SignUp form end */}
    </div>
  );
};

export default SignUp;
