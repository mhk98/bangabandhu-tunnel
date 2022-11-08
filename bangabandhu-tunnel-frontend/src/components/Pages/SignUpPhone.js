// import { async } from "@firebase/util";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./SignUpPhone.css";

const SignUpPhone = () => {
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");

  function setUpRecaptha(number) {
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth
    );
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth, number, recaptchaVerifier);
  }

  const getOtp = async (event) => {
    event.preventDefault();
    setError("");
    if (number === "" || number === undefined)
      return setError("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptha(number);
      console.log(response);
    } catch (err) {
      setError(err.message);
    }
    console.log(number);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">Phone Login</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={getOtp}>
        {/* <div className="form-control w-full max-w-xs mt-8 mx-auto">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input
            type="text"
            placeholder="Enter Your Phone"
            className="input input-bordered w-full max-w-xs"
          />
        </div> */}
        <PhoneInput
          className="mx-auto w-48 h-16"
          placeholder="Enter phone number"
          defaultCountry="PH"
          defaultValue={number}
          onChange={setNumber}
        />

        <div id="recaptcha-container m-8"></div>
        <div className="flex flex-row justify-center gap-4 mt-8">
          <Link to="/signin">
            <button className="btn">Cancel</button>
          </Link>
          <Link>
            <button type="submit" className="btn">
              Send OTP
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpPhone;
