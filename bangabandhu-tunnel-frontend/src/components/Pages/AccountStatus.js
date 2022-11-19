import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Moment from 'react-moment';
import ReactPaginate from 'react-paginate';
import { Link, useParams } from 'react-router-dom';
import { api } from '../../Services/http.service';
import Loading from './Loading';
import useUser from '../Hooks/useUser';
import axiosPrivate from '../../api/axiosPrivate';
import axios from 'axios';
// import useCard from "../Hooks/useCard";

const AccountStatus = () => {
  // const [user] = useUser();
  // const id = user.id;

  const [lost_card, setLost_card] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);
  // console.log(cards);

  useEffect(() => {
    setLoading(true);
    const getUser = async () => {
      try {
        const { data } = await api.get(`user/cards/`); // user api end point eg. http://localhost:4000/api/v1/user/cards/id
        setCards(data.data.cardtbls); //on success!
        // console.log(data.data.cardtbls);
        setLoading(false);
      } catch (error) {
        setError(error.message); //error
        setLoading(false);
      }
    };
    getUser();
  }, []);

  // const [pageNumber, setPageNumber] = useState(0);
  // const perPage = 4;
  // const pageVisited = pageNumber * perPage;
  // //1->6
  // const displayPages = cards.slice(pageVisited, pageVisited + perPage);
  // const pageCount = Math.ceil(cards.length / perPage);
  // const changePage = ({ selected }) => {
  //   setPageNumber(selected);
  // };

  return (
    <div style={{ height: '100vh' }}>
      {/* ---------------- Table Area Start -------------------------- */}
      <div className="overflow-x-auto px-8 mt-5">
        {/*---------------------------------- mostofa eidited start--------------------------------- */}
        {/* ----------------Table start -------------------------- */}
        <h2 className="mb-5 text-center font-bold text-[20px]">
          {/* Welcome {user.User_FirstName} {user.User_LastName} */}
        </h2>
        <div className="overflow-x-auto relative text-center shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-gray-500 dark:text-white border">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Card type
                </th>
                <th scope="col" className="py-3 px-6">
                  Card id
                </th>
                <th scope="col" className="py-3 px-6">
                  Last recharge date
                </th>
                <th scope="col" className="py-3 px-6">
                  Last recharge amount
                </th>

                <th scope="col" className="py-3 px-6">
                  balance
                </th>
                <th scope="col" className="py-3 px-6">
                  recharge
                </th>

                <th scope="col" className="py-3 px-6">
                  mark lost
                </th>
              </tr>
            </thead>
            <tbody>
              {/* -- table row  -- */}

              {cards.map((item, index) => {
                return (
                  <tr>
                    <td className="py-2 border border-slate-300 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {item.Device_Type}
                      </p>
                    </td>
                    <td className="py-2 border border-slate-300 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {item.id}
                      </p>
                    </td>
                    <td className="py-2 border border-slate-300 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {
                          <Moment format="DD/MM/YYYY">
                            {item.Expire_Date}
                          </Moment>
                        }
                      </p>
                    </td>
                    <td className="py-2 border border-slate-300 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {item.last_chargeamounte}
                      </p>
                    </td>
                    <td className="py-2 border border-slate-300 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {item.amount}
                      </p>
                    </td>
                    <td className="py-2 border border-slate-300 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        <Link to="/recharge">
                          <p className="btn btn-sm">
                            <small>Click</small>
                          </p>
                        </Link>
                      </p>
                    </td>
                    <td className="py-2 border border-slate-300 bg-white text-sm">
                      <label
                        htmlFor="lost-card-modal"
                        className="text-gray-900 whitespace-no-wrap"
                      >
                        <FontAwesomeIcon
                          icon={faEye}
                          style={{
                            cursor: 'pointer',
                            margin: 'auto',
                            fontSize: '18px',
                          }}
                        />
                      </label>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* ----------------ReactPaginate-------------------------- */}
        {/* <div className="grid place-content-center mt-5">
          <ReactPaginate
            previousLabel={"Previous"}
            pageCount={pageCount}
            nextLabel={"Next"}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div> */}
        {/* ----------------Table End-------------------------- */}

        {/*---------------------------------- mostofa eidited start--------------------------------- */}
        {/* ---------------- Add Card Area -------------------------- */}
        <div className="flex gap-4 place-content-center">
          <div className="text-center mt-5">
            <label
              htmlFor="add-card-modal"
              className="btn btn-info modal-button"
            >
              Add Card/ETC
            </label>
          </div>
          {/* ---------------- Add card modal start -------------------------- */}
          <input type="checkbox" id="add-card-modal" className="modal-toggle" />
          <div className="modal" htmlFor="add-card-modal">
            <div
              role="alert"
              className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
            >
              <div className="relative py-8 px-5 md:px-10 dark:text-white bg-white dark:bg-gray-900 shadow-md rounded-lg border border-gray-400">
                {/*-------------------------Add Card Model Form Start ---------------*/}
                <form action="#" method="POST">
                  <div className="overflow-hidden sm:rounded-md text-center">
                    <div className="dark:text-white bg-white dark:bg-gray-900 px-4 py-5 sm:p-6">
                      <div className="grid grid-cols-1 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="card-number"
                            className="block text-sm font-medium dark:text-white mb-4"
                          >
                            Enter Your Card Number
                          </label>
                          <input
                            type="number"
                            name="card-number"
                            id="card-number"
                            autoComplete="card-number"
                            placeholder="xxxxxxxxxx"
                            className="mt-1 block w-full dark:text-black rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="mt-10 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-20 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                </form>
                {/*-------------------------Add Card Model Form End ---------------*/}
                <label
                  htmlFor="add-card-modal"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
              </div>
            </div>
          </div>
          {/* ---------------- Add card modal end -------------------------- */}

          {/* ---------------- Balance Transfer Card Area -------------------------- */}
          <div className="text-center mt-5">
            <label
              htmlFor="balance-transfer"
              className="btn btn-info modal-button"
            >
              Balance Transfer
            </label>
          </div>
          {/* ---------------- Balance Transfer card modal start -------------------------- */}
          <input
            type="checkbox"
            id="balance-transfer"
            className="modal-toggle"
          />
          <div className="modal" htmlFor="add-card-modal">
            <div
              role="alert"
              className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
            >
              <div className="relative py-8 px-5 md:px-10 bg-white dark:text-white dark:bg-gray-900 shadow-md rounded-lg border border-gray-400">
                <h2 className="text-center text-[18px] font-black">
                  Balance Transfer
                </h2>
                {/*-------------------------Balance Transfer Card Model Form Start ---------------*/}
                <form className="mt-5 text-center">
                  {/* --------------------------------------select lost start--------------------------------- */}
                  <div className="inline-flex gap-2 mr-2">
                    <div>
                      <select
                        name="select_card_type"
                        className="select select-bordered border-gray-300 max-w-xs mb-5 rounded dark:bg-gray-900"
                      >
                        <option disabled selected>
                          Lost Card
                        </option>
                        <option value="etc">
                          00002202 <span>Etc</span>
                        </option>
                        <option value="rf">
                          00002202 <span>RfId</span>
                        </option>
                        <option value="etc">
                          00002202 <span>Etc</span>
                        </option>
                      </select>
                    </div>
                    {/* --------------------------------------select lost card end--------------------------------- */}
                    {/* --------------------------------------select active card start--------------------------------- */}
                    <div>
                      <select
                        name="select_card"
                        className="select select-bordered border-gray-300 max-w-xs mb-5 rounded dark:bg-gray-900"
                      >
                        <option disabled selected>
                          Active Card
                        </option>
                        <option value="etc">
                          00002202 <span>Etc</span>
                        </option>
                        <option value="rf">
                          00002202 <span>RfId</span>
                        </option>
                        <option value="etc">
                          00002202 <span>Etc</span>
                        </option>
                      </select>
                    </div>
                    {/* --------------------------------------select active card end--------------------------------- */}
                  </div>
                  <button
                    type="submit"
                    className="btn btn-success bg-[#36D399]"
                  >
                    Confirm
                  </button>
                </form>

                {/*-------------------------Balance TransferCard Model Form End ---------------*/}
                <label
                  htmlFor="balance-transfer"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
              </div>
            </div>
          </div>
          {/* ---------------- Balance Transfer card modal end -------------------------- */}
        </div>

        {/*-------------------------Start Lost Card History Model ---------------*/}
        <input type="checkbox" id="lost-card-modal" className="modal-toggle" />
        <div className="modal" htmlFor="lost-card-modal">
          <div
            role="alert"
            className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
          >
            <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded-lg border border-gray-400">
              {/*-------------------------Start Lost Card History Form ---------------*/}
              <form>
                <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-5">
                  Lost Report
                </h1>

                {/*-------------------------Lost Card History Form input field Start ---------------*/}
                <label
                  htmlFor="his_time"
                  className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                >
                  Date
                </label>
                <input
                  name="his_time"
                  type="date"
                  className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder="Date"
                />

                <label
                  htmlFor="his_time"
                  className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                >
                  Details
                </label>
                <textarea
                  name="his_time"
                  type="text"
                  className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                />
                <p className="text-red-500 font-bold text-left mb-4">
                  If card is lost. It won't be back forever.
                </p>
                {/*-------------------------Lost Card History Form input field End ---------------*/}
                <div className="flex items-center justify-start w-full">
                  <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">
                    Submit
                  </button>
                </div>
              </form>
              {/*-------------------------close button ---------------*/}
              <label
                htmlFor="lost-card-modal"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
            </div>
          </div>
        </div>
        {/*-------------------------End Lost Card History Model ---------------*/}
      </div>
      {/* ----------------Table Area End -------------------------- */}
    </div>
  );
};

export default AccountStatus;
