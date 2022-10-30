import React, { useEffect, useState } from 'react';
import eye from '../../images/eye.png';

import ReactPaginate from 'react-paginate';

const AccountStatus = () => {
  const [lost_card, setLost_card] = useState(false);

  const url = 'http://localhost:5000/rfidtbl/97466';
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data.Rfidtbl))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [pageNumber, setPageNumber] = useState(0);
  const perPage = 4;
  const pageVisited = pageNumber * perPage;
  //1->6
  const displayPages = users.slice(pageVisited, pageVisited + perPage);
  const pageCount = Math.ceil(users.length / perPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      {/* ---------------- Table Area Start -------------------------- */}
      <div className="overflow-x-auto px-28 mt-5">
        {/* ----------------Table start -------------------------- */}
        <table className="table w-full shadow sm:rounded-lg text-center">
          {/* -- table head -- */}
          <thead>
            <tr>
              <th>Type</th>
              <th>Card Id</th>
              <th>Date</th>
              <th>Last Recharge Date</th>
              <th>Last Recharge Amount</th>
              <th>Mark Lost</th>
            </tr>
          </thead>
          <tbody>
            {/* -- table row  -- */}

            {displayPages.map((item, index) => {
              return (
                <tr>
                  <td>{item.Device_Type}</td>
                  <td>{item.User_ID}</td>
                  <td>{item.Issue_Date}</td>
                  <td>{item.Issue_Date}</td>
                  <td>{item.Balance}</td>
                  <td>
                    <label htmlFor="lost-card-modal">
                      <img
                        width="25"
                        height="25"
                        style={{ cursor: 'pointer', margin: 'auto' }}
                        src={eye}
                        alt=""
                      />
                    </label>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* ----------------ReactPaginate-------------------------- */}

        <div className="grid place-content-center mt-5">
          <ReactPaginate
            previousLabel={'Previous'}
            pageCount={pageCount}
            nextLabel={'Next'}
            onPageChange={changePage}
            containerClassName={'paginationBttns'}
            previousLinkClassName={'previousBttn'}
            nextLinkClassName={'nextBttn'}
            disabledClassName={'paginationDisabled'}
            activeClassName={'paginationActive'}
          />
        </div>

        {/* ----------------Table End-------------------------- */}
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
              <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded-lg border border-gray-400">
                {/*-------------------------Add Card Model Form Start ---------------*/}
                <form action="#" method="POST">
                  <div className="overflow-hidden sm:rounded-md text-center">
                    <div className="bg-white px-4 py-5 sm:p-6">
                      <div className="grid grid-cols-1 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="card-number"
                            className="block text-sm font-medium text-gray-900 mb-4"
                          >
                            Enter Your Card Number
                          </label>
                          <input
                            type="number"
                            name="card-number"
                            id="card-number"
                            autoComplete="card-number"
                            placeholder="xxxxxxxxxx"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="mt-10 mb-10 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-20 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
              <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded-lg border border-gray-400">
                <h2 className="text-center text-[18px] font-black">
                  Balance Transfer
                </h2>
                {/*-------------------------Balance Transfer Card Model Form Start ---------------*/}
                <form className="flex gap-2 mt-5">
                  {/* --------------------------------------select active card start--------------------------------- */}
                  <div>
                    <select
                      name="select_card"
                      className="select select-bordered max-w-xs mb-5 rounded"
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

                  {/* --------------------------------------select lost start--------------------------------- */}
                  <div>
                    <select
                      name="select_card_type"
                      className="select select-bordered max-w-xs mb-5 rounded"
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
                  <div>
                    <button
                      type="submit"
                      className="btn btn-success bg-[#36D399]"
                    >
                      Confirm
                    </button>
                  </div>
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
