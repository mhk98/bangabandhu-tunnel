import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

import ReactPhoneInput from 'react-phone-input-2';
import { Link } from 'react-router-dom';
import './Otp.css';

const Otp = () => {
  const [state, setState] = useState({
    phone: '',
    otp: '',
  });

  const setValue = (fieldName) => (evt) =>
    setState({ [fieldName]: evt.target.value });

  const handleChange = (otp) => setState({ otp });
  return (
    <div className="py-12 h-screen bg-gray-100 m-z ">
      <div className="max-w-lg mx-auto">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
          <div className="text-center">
            <h1 className="font-bold text-gray-800 text-2xl">
              Please Verify your account
            </h1>
          </div>
          <div className="block  w-100">
            {/* <div className="my-4">
              <label
                className="block text-gray-700 text-sm font-medium mb-2 text-lg text-center"
                htmlFor="phone"
              >
                Enter your 10 digit number
              </label>
              <input
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                type="number"
                id="phone"
                onChange={setValue("phone")}
                value={state.firstName}
                placeholder="+866*****"
              />
            </div> */}
            <div className="my-4">
              <label
                className="block text-gray-700 text-sm font-medium mb-2 text-lg text-center"
                htmlFor="phone"
              >
                Enter your 11 digit number
              </label>
              <ReactPhoneInput
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                defaultCountry="pl"
                containerStyle={{ width: '100%' }}
                searchclassName="search-class"
                searchStyle={{
                  margin: '0px',

                  width: '96%',
                  height: '30px',
                }}
                enableSearchField
                disableSearchIcon
              />
              <button className="btn-block w-32 px-4 py-3 py-1 text-black bg-slate-200 border border-1 border-black rounded-lg mt-4 ml-80">
                Enter
              </button>
            </div>
            <div className="my-4">
              <h1
                className="block text-gray-700 text-sm font-medium mb-2  text-lg text-center"
                htmlFor="username"
              >
                Enter Your OTP here
              </h1>
              <OtpInput
                value={state.otp}
                className="otp-input bg-white mx-2 text-lg focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg  block w-full appearance-none leading-normal"
                onChange={handleChange}
                numInputs={6}
                separator={<span></span>}
              />
            </div>
            <div className="m-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2   text-center"
                htmlFor="username"
              >
                <span>
                  Click here ?&nbsp;
                  <a href="!#" className="text-blue-600">
                    Resend OTP
                  </a>
                </span>
              </label>
            </div>

            <Link to="/login">
              <button className="btn-block w-full px-4 py-3 py-1 text-black bg-slate-200 border border-1 border-black rounded-lg mt-4 ">
                Submit
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Otp;
