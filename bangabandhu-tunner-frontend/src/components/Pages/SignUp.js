import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  // const [error, setError] = useState('');
  const [agree, setAgree] = useState(false);


  const handleUserSignUp = async (event) => {
    event.preventDefault();

      
    const newUser = {
      User_FirstName: event.target.User_FirstName.value,
      User_LastName: event.target.User_LastName.value,
      User_Email: event.target.User_Email.value,
      Mobile_No: event.target.Mobile_No.value,
      pass_word: event.target.pass_word.value,
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
    <div className="my-4">
      {/* <h2 className="text-center text-2xl font-bold">Sign Up</h2> */}

      {/* SignUp form start */}

      <form
        onSubmit={handleUserSignUp}
        className="flex flex-col justify-center items-center"
      >
        {/* Name field start */}
        <div class="form-control w-full max-w-xs mb-4">
          <label class="label">
            <span class="label-text">First Name</span>
          </label>
          <input
            type="text"
            name="User_FirstName"
            placeholder="Enter Your Name"
            class="input input-bordered w-full max-w-xs"
          />
        </div>

        {/* User LastName */}
        <div class="form-control w-full max-w-xs mb-4">
          <label class="label">
            <span class="label-text">Last Name</span>
          </label>
          <input
            type="text"
            name="User_LastName"
            placeholder="Enter Your Name"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        {/* Name field end */}

        {/* Email field start */}
        <div class="form-control w-full max-w-xs mb-4">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input
            name="User_Email"
            type="text"
            placeholder="Enter Your Email Address"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        {/* Email field end */}

        {/* Password field start */}
        <div class="form-control w-full max-w-xs mb-4">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input
            name="pass_word"
            type="text"
            placeholder="Enter Your Password"
            class="input input-bordered w-full max-w-xs"
          />
           
        </div>
        {/* Password field end */}

        {/* Phone field start */}
        <div class="form-control w-full max-w-xs mb-4">
          <label class="label">
            <span class="label-text">Phone Number</span>
          </label>
          <input
            type="text"
            name="Mobile_No"
            placeholder="Enter Your Phone Number"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        {/* Phone field end */}

        {/* Confirm password field start */}
        {/* <div class="form-control w-full max-w-xs mb-4">
          <label class="label">
            <span class="label-text">Confirm Password</span>
          </label>
          <input
            type="text"
            placeholder="Enter Your Confirm Password"
            class="input input-bordered w-full max-w-xs"
          />
        </div> */}
        {/* Confirm password field end */}

        {/* Terms and condition start */}
        <div className="w-full max-w-xs">
          <input
            className={`ps-2 ${agree ? "" : "text-red-500"}`}
            onClick={() => setAgree(!agree)}
            type="checkbox"
            name=""
            id=""
          />
          <span className="pl-2">
            I agree with Terms and Conditions and Privacy Policy
          </span>

          {/* <Link to="/login"> */}

          <input
            disabled={!agree}
            className="btn w-full max-w-xs mt-4"
            variant="primary"
            type="submit"
            value="Sign Up"
          />

          {/* </Link> */}
        </div>
        {/* Terms and condition end */}

        {/* Login forward link start */}
        <p className="mt-2">
          Already have an account?
          <Link to="/login" className="text-[#0B5ED7] pl-2">
            login
          </Link>
        </p>
        {/* Login forward link end */}
      </form>
      {/* SignUp form end */}
    </div>
  );
};

export default SignUp;
