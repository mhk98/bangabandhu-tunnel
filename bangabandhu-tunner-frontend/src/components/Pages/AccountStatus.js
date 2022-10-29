import React, { useEffect, useState } from "react";
import eye from "../../images/eye.png";

import ReactPaginate from "react-paginate";

const AccountStatus = () => {
  const [lost_card, setLost_card] = useState(false);

  const url = "http://localhost:5000/rfidtbl/97466";
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
  const perPage = 4
  const pageVisited = pageNumber * perPage
  //1->6
  const displayPages = users.slice(pageVisited,pageVisited+perPage);
  const pageCount = Math.ceil(users.length / perPage);
  const changePage = ({selected}) =>{
    setPageNumber(selected);
  }

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
              return <tr>
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
                    style={{ cursor: "pointer", margin: "auto" }}
                    src={eye}
                    alt=""
                  />
                </label>
              </td>
            </tr>;
            })}
          </tbody>
        </table>

        {/* ----------------ReactPaginate-------------------------- */}

        <div className="text-center">
          <ReactPaginate 
          previousLabel={"Previous"}
          pageCount={pageCount}
          nextLabel={"Next"}
          onPageChange = {changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName ={"previousBttn"}
          nextLinkClassName ={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName = {"paginationActive"}
          />
        </div>
         
        {/* ----------------Table End-------------------------- */}

        {/* ---------------- Add Card Area -------------------------- */}
        <div className="text-center mt-5">
          <label htmlFor="add-card-modal" className="btn btn-info modal-button">
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
              <form>
                <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-5">
                  Add New Card
                </h1>
                {/*-------------------------Form input field start ---------------*/}
                
                  
                <label
                  htmlFor="card_id"
                  className="text-gray-800 text-sm font-bold leading-tight tracking-normal mt-2"
                >
                  Card Id
                </label>
                <input
                  name="card_id"
                  className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder="User Id"
                />

                <label
                  htmlFor="card_status_id"
                  className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                >
                  Card Status Id
                </label>
                <input
                  name="card_status_id"
                  className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder="Card Status Id"
                />
                <select className="select select-bordered w-full max-w-xs mb-5 rounded">
                    <option disabled selected>
                      Select The Card Type
                    </option>
                    <option>RFID</option>
                    <option>ETC</option>
                  </select>
                  
                {/*-------------------------Lost Card Dropdown---------------*/}
                {lost_card && (
                  <select className="select select-bordered w-full max-w-xs mb-5 rounded">
                    <option disabled selected>
                      Select Replies The Lost Card
                    </option>
                    <option>00002202</option>
                    <option>90003993</option>
                  </select>
                )}
                {/*-------------------------Lost Card CheckBox ---------------*/}
                <div className="flex items-center mb-5">
                  <input
                    id="link-checkbox"
                    type="checkbox"
                    defaultValue=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    onChange={() => setLost_card(!lost_card)}
                  />
                  <label
                    htmlFor="link-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Replies The Lost Card
                  </label>
                </div>
                {/*-------------------------Form input field end ---------------*/}
                <div className="flex items-center justify-start w-full">
                  <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">
                    Submit
                  </button>
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
