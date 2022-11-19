import React, { useEffect } from 'react';
import visa from '../../images/visa.png';
import mastercard from '../../images/mastercard.png';
import payoneer from '../../images/payoneer.png';
import paypal from '../../images/paypal.png';
import bkash from '../../images/bkash.png';
import nogod from '../../images/nogod.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

const Recharge = () => {
  const [agree, setAgree] = useState(false);
  const checkboxHandler = () => {
    setAgree(!agree);
  };

  const handleCheckout = (event) => {
    event.preventDefault();
    const info = {
      card: event.target.card.value,
      amount: event.target.card.value,
    };
    // const email = user?.email;

    fetch('http://localhost:4000/api/v1/sslcommerz/ssl-request', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },

      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          // console.log(data.data.GatewayPageURL);
          window.open(data.data.GatewayPageURL);
        }
      });

    // const {
    //   data: { data },
    // } = await axios.post(
    //   'http://localhost:4000/api/v1/ssl-request',
    //   info,
    //   config,
    // );
    // await window.location.replace(data?.GatewayPageURL);
  };

  // useEffect(() => {
  //   fetch('http://localhost:4000/api/v1/ssl-payment-success')
  //     .then((res) => res.json())
  //     .then((data) => console.log('data', data));
  // }, []);

  return (
    <div
      className="mt-8 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 place-content-center mx-auto w-full"
      style={{ height: '100vh' }}
    >
      <div className="w-full">
        <h2 className="text-2xl font-bold text-center  dark:text-gray-100">
          Recharge
        </h2>

        <form
          className="flex flex-col items-center justify-center"
          onSubmit={handleCheckout}
        >
          <div className="form-control w-full max-w-xs mb-2 mt-5">
            <select className="select select-bordered w-full max-w-xs dark:bg-gray-700">
              <option disabled selected>
                Select Your Card Type
              </option>
              <option value="etc">ETC</option>
              <option value="rf">RFID</option>
            </select>
          </div>
          <div className="form-control w-full max-w-xs mb-4">
            <label className="label">
              <span className="label-text font-bold dark:text-white">
                Card Number
              </span>
            </label>
            <input
              type="number"
              name="card"
              placeholder="Enter Your Card Number"
              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              required
            />
          </div>
          <div className="form-control w-full max-w-xs mb-4">
            <label className="label">
              <span className="label-text font-bold dark:text-white">
                Amount
              </span>
            </label>
            <input
              type="number"
              name="amount"
              placeholder="Enter Your Amount"
              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              required
            />
          </div>
          <div className="mb-4">
            <input type="checkbox" id="agree" onChange={checkboxHandler} />
            <label htmlFor="agree" className="ml-2">
              <b>
                I Agree To{' '}
                <Link to="/terms-and-conditions" className="link">
                  Terms and Conditions
                </Link>
              </b>
            </label>
          </div>
          <input
            disabled={!agree}
            className="btn w-full bg-black max-w-xs flex justify-center"
            type="submit"
            value="Submit"
          />
        </form>
      </div>

      <div className="w-96 mt-16">
        <div className="bg-[#F5F5F5] w-full mt-4 p-6 rounded dark:bg-slate-700 dark:text-white">
          <h3 className="text-xl font-bold mb-2">Online Payment</h3>
          <div className="flex gap-4 items-center justify-center w-full">
            <img className="w-12 h-12" src={visa} alt="" />
            <img className="w-12 h-12" src={mastercard} alt="" />
            <img className="w-12 h-12" src={paypal} alt="" />
            <img className="w-12 h-12" src={payoneer} alt="" />
            <img className="w-12 h-12" src={bkash} alt="" />
            <img className="w-12 h-12" src={nogod} alt="" />
          </div>
        </div>

        {/* -----------------------payment successful or fail modal start----------------------------------- */}
        {/* -----------------------payment successful modal start----------------------------------- */}
        <label htmlFor="payment-success" className="btn modal-button mt-5">
          Successful modal
        </label>
        <input type="checkbox" id="payment-success" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box dark:bg-slate-700 dark:text-white">
            <div className="text-center">
              <FontAwesomeIcon
                className="text-5xl text-green-700 mb-4"
                icon={faCheckCircle}
              ></FontAwesomeIcon>
              <h3 className="font-bold text-lg mb-5">Payment Successful!</h3>
            </div>
            <div className="flex justify-between">
              <div className="text-left">
                <p>Payment Type</p>
                <p>Mobile Number</p>
                <h4 className="font-bold">Amount paid</h4>
                <p>Transaction id</p>
              </div>
              <div className="text-right">
                <p>Bkash</p>
                <p>0170000000</p>
                <h4 className="font-bold">500</h4>
                <p>1234567765</p>
              </div>
            </div>

            <div className="text-center mt-5">
              <button className="bg-indigo-700 rounded text-white px-8 py-2 text-sm">
                Print
              </button>
              <button className="bg-indigo-700 rounded text-white px-8 py-2 text-sm ml-5">
                Resived
              </button>
            </div>

            <label
              htmlFor="payment-success"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
          </div>
        </div>
        {/* -----------------------payment successful modal end----------------------------------- */}

        {/* -----------------------payment fail modal start----------------------------------- */}
        <label
          htmlFor="payment-fail-modal"
          className="btn modal-button mt-5 ml-5"
        >
          fail modal
        </label>
        <input
          type="checkbox"
          id="payment-fail-modal"
          className="modal-toggle"
        />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box dark:bg-slate-700 dark:text-white">
            <div className="text-center">
              <FontAwesomeIcon
                className="text-5xl text-red-700 mb-4"
                icon={faCircleXmark}
              ></FontAwesomeIcon>
            </div>
            <h3 className="font-bold text-lg text-center mb-5">
              Payment Failed!
            </h3>

            <div className="flex justify-between">
              <div className="text-left">
                <p>Payment Type</p>
                <p>Mobile Number</p>
                <h4 className="font-bold">Amount paid</h4>
                <p>Transaction id</p>
              </div>
              <div className="text-right">
                <p>Bkash</p>
                <p>0170000000</p>
                <h4 className="font-bold">500.00</h4>
                <p>1234567765</p>
              </div>
            </div>
            <div className="text-center mt-5">
              <label
                htmlFor="payment-fail-modal"
                className="btn btn-sm bg-indigo-700 rounded text-white"
              >
                Try Again
              </label>
            </div>

            <label
              htmlFor="payment-fail-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
          </div>
        </div>
        {/* -----------------------payment fail modal end----------------------------------- */}
        {/* -----------------------payment successful or fail modal end----------------------------------- */}
      </div>
    </div>
  );
};

export default Recharge;
