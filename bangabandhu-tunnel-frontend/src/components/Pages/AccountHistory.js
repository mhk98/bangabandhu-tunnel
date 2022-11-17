import React, { useState } from "react";
import { useEffect } from "react";
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
    <div style = {{height:"100vh"}}>
      {/* --------------------------------------hAmount History page start--------------------------------- */}
      <div className="history-page container mx-auto px-8 mt-2">
        <h1 className="text-center text-2xl font-bold mt-5 mb-5">
          Account History
        </h1>
        <hr />

        {/* --------------------------------------Form start--------------------------------- */}
        <form onSubmit={handleSubmit} className="mt-5 text-center">
          {/* --------------------------------------select_card start--------------------------------- */}
          <div className="inline-flex gap-2 mr-2">
            <div>
              <select
                name="select_card"
                className="select select-bordered max-w-xs mb-5 rounded dark:bg-gray-700"
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
                name="select_history_type"
                className="select select-bordered max-w-xs mb-5 rounded dark:bg-gray-700 "
              >
                <option disabled selected>
                  Select Type History
                </option>
                <option value="recharge">Recharge</option>
                <option value="usage">Usage</option>
              </select>
            </div>
            {/* --------------------------------------select_card_type end--------------------------------- */}
          </div>
          <button type="submit" className="btn btn-success bg-[#36D399]">
            Confirm
          </button>
        </form>
        {/* --------------------------------------Form end--------------------------------- */}

        {/* --------------------------------------Recharge Table Start---------------------------------- */}
        {state?.select_history_type == "recharge" && (
          <div className="recharge-table">
            <h1 className="text-center text-lg font-bold mt-5 mb-5">
              00002202 <span style={{ color: "red" }}>ETC</span> Recharge
              History
            </h1>
            {/* ----------------Table start -------------------------- */}
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="py-3 px-6">
                      date
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Time
                    </th>
                    <th scope="col" className="py-3 px-6">
                      amount
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Payment type
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      11/10/2022
                    </th>
                    <td className="py-4 px-6">12:30pm</td>
                    <td className="py-4 px-6">10000</td>
                    <td className="py-4 px-6">bkash</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      11/10/2022
                    </th>
                    <td className="py-4 px-6">12:30pm</td>
                    <td className="py-4 px-6">10000</td>
                    <td className="py-4 px-6">bkash</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* ----------------Table End-------------------------- */}
          </div>
        )}
        {/* --------------------------------------Recharge Table End---------------------------------- */}

        {/* --------------------------------------Usage Table Start---------------------------------- */}
        {state?.select_history_type == "usage" && (
          <div className="usage-table">
            <h1 className="text-center text-lg font-bold mt-5 mb-5">
              00002202 <span style={{ color: "red" }}>ETC</span> Usage History
            </h1>
            {/* ----------------Table start -------------------------- */}
            <div className="overflow-x-auto relative text-center shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="py-3 px-6">
                      date
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Time
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Vechile
                    </th>
                    <th scope="col" className="py-3 px-6">
                      toll amount
                    </th>

                    <th scope="col" className="py-3 px-6">
                      tunnel entry point
                    </th>
                    <th scope="col" className="py-3 px-6">
                      toll gate Id
                    </th>

                    <th scope="col" className="py-3 px-6">
                      Payment Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <td className="py-4 px-6">24/10/2022</td>
                    <td className="py-4 px-6">11:16:22</td>
                    <td className="py-4 px-6">LA511417</td>
                    <td className="py-4 px-6">500</td>
                    <td className="py-4 px-6">Town end</td>
                    <td className="py-4 px-6">2</td>
                    <td className="py-4 px-6">Failed</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <td className="py-4 px-6">24/10/2022</td>
                    <td className="py-4 px-6">11:16:22</td>
                    <td className="py-4 px-6">LA511417</td>
                    <td className="py-4 px-6">500</td>
                    <td className="py-4 px-6">Town end</td>
                    <td className="py-4 px-6">2</td>
                    <td className="py-4 px-6">Failed</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
