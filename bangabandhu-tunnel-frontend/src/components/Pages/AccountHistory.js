import React, { useState } from "react";
const AccountHistory = () => {
  const [state, setData] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target[0].value && e.target[1].value) return false;
    setData({
      ...state,
      [e.target[0].name]: e.target[0].value,
      [e.target[1].name]: e.target[1].value,
    });
    
  };

  return (
    <div>
      {/* --------------------------------------hAmount History page start--------------------------------- */}
      <div className="history-page container mx-auto px-28 shadow rounded pt-4 pb-16 mt-2">
        <h1 className="text-center text-2xl font-bold mt-5 mb-5">
          Account History
        </h1>
        <hr />
        {/* --------------------------------------Form end--------------------------------- */}
        <form onSubmit={handleSubmit} className="flex gap-2 mt-5">
          {/* --------------------------------------select_card start--------------------------------- */}
          <div>
            <select
              name="select_card"
              className="select select-bordered max-w-xs mb-5 rounded"
            >
              <option disabled selected>
                Select Card
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
          {/* --------------------------------------select_card end--------------------------------- */}

          {/* --------------------------------------select_card_type start--------------------------------- */}
          <div>
            <select
              name="select_card_type"
              className="select select-bordered max-w-xs mb-5 rounded"
            >
              <option disabled selected>
                Select Type History
              </option>
              <option value="recharge">Recharge</option>
              <option value="usage">Usage</option>
            </select>
          </div>
          {/* --------------------------------------select_card_type end--------------------------------- */}
          <div>
            <button type="submit" className="btn btn-success bg-[#36D399]">
              Submit
            </button>
          </div>
        </form>
        {/* --------------------------------------Form end--------------------------------- */}

        {/* --------------------------------------Recharge Table Start---------------------------------- */}
        {state?.select_card_type == "recharge" && (
          <div className="recharge-table">
            <h1 className="text-center text-lg font-bold mt-5 mb-5">
              00002202 <span style={{ color: "red" }}>ETC</span> Recharge
              History
            </h1>
            {/* ----------------Table start -------------------------- */}
            <table className="table w-full shadow sm:rounded-lg text-center">
              {/* -- table head -- */}
              <thead>
                <tr>
                  <th>date</th>
                  <th>Time</th>
                  <th>amount</th>
                  <th>Payment type</th>
                </tr>
              </thead>
              <tbody>
                {/* -- table row  -- */}
                <tr>
                  <td>11/10/2022</td>
                  <td>12:30pm</td>
                  <td>10000</td>
                  <td>bkash</td>
                </tr>
                <tr>
                  <td>11/10/2022</td>
                  <td>12:30pm</td>
                  <td>10000</td>
                  <td>bkash</td>
                </tr>
                <tr>
                  <td>11/10/2022</td>
                  <td>12:30pm</td>
                  <td>10000</td>
                  <td>bkash</td>
                </tr>
              </tbody>
            </table>
            {/* ----------------Table End-------------------------- */}
          </div>
        )}
        {/* --------------------------------------Recharge Table End---------------------------------- */}

        {/* --------------------------------------Usage Table Start---------------------------------- */}
        {state?.select_card_type == "usage" && (
          <div className="usage-table">
          <h1 className="text-center text-lg font-bold mt-5 mb-5">
            00002202 <span style={{ color: "red" }}>ETC</span> Usage History
          </h1>
          {/* ----------------Table start -------------------------- */}
          <table className="table w-full shadow sm:rounded-lg text-center">
            {/* -- table head -- */}
            <thead>
              <tr>
                <th>date</th>
                <th>Time</th>
                <th>Vechile</th>
                <th>toll amount</th>
                <th>tunnel entry point</th>
                <th>toll gate Id</th>
                <th>Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {/* -- table row  -- */}
               <tr>
                <td>24-10-2022</td>
                <td>11:16:22</td>
                <td>LA511417</td>
                <td>500</td>
                <td>Town end</td>
                <td>2</td>
                <td>Failed</td>
              </tr>
              <tr>
                <td>24-10-2022</td>
                <td>11:16:22</td>
                <td>LA511417</td>
                <td>500</td>
                <td>Town end</td>
                <td>2</td>
                <td>Failed</td>
              </tr>
              <tr>
                <td>24-10-2022</td>
                <td>11:16:22</td>
                <td>LA511417</td>
                <td>500</td>
                <td>Town end</td>
                <td>2</td>
                <td>Failed</td>
              </tr>
            </tbody>
          </table>
          {/* ----------------Table End-------------------------- */}
        </div>
        )}
        {/* --------------------------------------Usage Table End---------------------------------- */}
      </div>
      {/* --------------------------------------hAmount History page end--------------------------------- */}
    </div>
  );
};

export default AccountHistory;
