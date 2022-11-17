import React from "react";

const Home = () => {
  return (
    <>
      <div className="rounded-xl dark:text-white dark:bg-gray-900" style = {{height:"100vh"}}>
        <form action="#" method="POST">
          <div className="overflow-hidden sm:rounded-md text-center">
            <div className="">
              <h2 className="text-[30px] font-black dark:text-white mt-10 mb-10">
                Welcome to Karnafuli Tunnel
              </h2>
              <div className="grid grid-cols-1 gap-6 px-20">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="card-number"
                    className="block text-sm font-medium text-gray-900 dark:text-white mb-4"
                  >
                    Enter Your Card Number
                  </label>
                  <input
                    type="text"
                    name="card-number"
                    id="card-number"
                    autoComplete="card-number"
                    placeholder="xxxxxxxxxx"
                    className="mt-1 w-full rounded-md dark:text-white dark:bg-gray-900 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
      </div>
    </>
  );
};

export default Home;
