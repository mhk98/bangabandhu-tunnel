import React from 'react';

const LG = () => {
    return (
        <div>
            <form class="w-full max-w-lg m-28 px-8 rounded-xl shadow py-8">
        <h2 className="text-[30px] font-black mb-10 text-center">
          Login Your Account
        </h2>
        <div class="flex flex-wrap -mx-3 mb-6 ">
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Mobile Number
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-mobile_number"
              type="number"
              required
            />
          </div>
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Password
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              placeholder="******************"
              required
            />
            <div class="md:w-2/3"></div>
          </div>
        </div>
        <div className="text-center">
        <button
          class="btn w-full max-w-xs"
          type="button"
        >
          Login
        </button>
        </div>
      </form>
        </div>
    );
};

export default LG;