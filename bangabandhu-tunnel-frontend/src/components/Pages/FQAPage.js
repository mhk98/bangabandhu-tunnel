import React from 'react';
const FQAPage = () => {
  return (
    <div style = {{height:"100vh"}}>
      <div className="overflow-x-auto px-8 shadow mt-5 mb-5">
        <div className="fqa-header text-center mt-5 mb-5">
          <h1 className="text-2xl mb-5 font-bold">
            Questions and Answers on Electronic Toll Collection (ETC) System
          </h1>
          {/* --------------------------------------form search bar start---------------------------------- */}

          <form>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
              Search
            </label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search ...."
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
          {/* --------------------------------------form search bar end---------------------------------- */}
        </div>
        {/* -------------------------------------------------item start-------------------------------- */}
        <div className="flex">
          <div>
            <details className="p-4 rounded-lg">
              <summary className="font-semibold">
                1. What is Electronic Toll Collection (ETC) System?
              </summary>
              <div className="mt-3">
                <p className="text-sm leading-6 text-gray-600">
                  Electronic Toll Collection (ETC) system is an automated system
                  of toll collection where toll is automatically collected from
                  vehicles as they pass through toll plazas.
                </p>
              </div>
            </details>
            <details className="p-4 rounded-lg">
              <summary className="font-semibold">
                2. What is the fast track lane?
              </summary>
              <div className="mt-3">
                <p className="text-sm leading-6 text-gray-600">
                  Fast Track Lane is a separate lane, which provides you
                  uninterrupted travel and automatically helps your vehicle
                  toll.
                </p>
              </div>
            </details>
            <details className="p-4 rounded-lg">
              <summary className="font-semibold">
                3. What is an RFID tag?
              </summary>
              <div className="mt-3">
                <p className="text-sm leading-6 text-gray-600">
                  RFID stands for Radio Frequency Identification.
                </p>
              </div>
            </details>
            <details className="p-4 rounded-lg">
              <summary className="font-semibold">
                4. How is toll collected in Electronic Toll Collection (ETC)
                system?
              </summary>
              <div className="mt-3">
                <p className="text-sm leading-6 text-gray-600">
                  Electronic Toll Collection (ETC) system collects toll
                  automatically. After registration, an RFID tag is attached to
                  the windshield of the vehicle by BRTA and the user is given an
                  account number. Electronic Toll Collection (ETC) automatically
                  collects the toll from the lane user's account by reading the
                  RFID tag while crossing the toll plaza. is cut off.
                </p>
              </div>
            </details>
            <details className="p-4 rounded-lg">
              <summary className="font-semibold">
                5. How to get Electronic Toll Collection (ETC) service?
              </summary>
              <div className="mt-3">
                <p className="text-sm leading-6 text-gray-600">
                  Electronic Toll Collection (ETC) service will be available by
                  registering for ETC using the RFID tag affixed by BRTA on the
                  front glass (windshield) at the time of vehicle registration.
                </p>
              </div>
            </details>

            <details className="p-4 rounded-lg">
              <summary className="font-semibold">
                6. Where can RFID tags be found?
              </summary>
              <div className="mt-3">
                <p className="text-sm leading-6 text-gray-600">
                  At the time of vehicle registration, the RFID tag is attached
                  to the front glass (windshield) of the vehicle from the BRTA
                  office.
                </p>
              </div>
            </details>

            <details className="p-4 rounded-lg">
              <summary className="font-semibold">
                7. Who can use the fast track lane?
              </summary>
              <div className="mt-3">
                <p className="text-sm leading-6 text-gray-600">
                  Vehicle users will be able to use the Fast Track lane after
                  installing the RFID tag.
                </p>
              </div>
            </details>

            <details className="p-4 rounded-lg">
              <summary className="font-semibold">
                8. How can the vehicle be registered for using ETC?
              </summary>
              <div className="mt-3">
                <p className="text-sm leading-6 text-gray-600">
                  Car ETC can be registered by downloading Nexus pay App from
                  Play Store with necessary information or can be registered
                  from Dutch Bangla Bank branch or Fast Track with copy of car
                  registration certificate or smart card.
                </p>
              </div>
            </details>

            <details className="p-4 rounded-lg">
              <summary className="font-semibold">
                9. Is Dutch Bangla Bank account mandatory for ETC registration?
              </summary>
              <div className="mt-3">
                <p className="text-sm leading-6 text-gray-600">
                  no Toll can be paid using fast track lane by transferring
                  balance from Visa/Master card of any bank to toll card through
                  Nexus pay loyalty card.
                </p>
              </div>
            </details>

            <details className="p-4 rounded-lg">
              <summary className="font-semibold">
                10. What is the process of registering your car online for ETC?
              </summary>
              <div className="mt-3">
                <ul className="text-sm leading-6 text-gray-600">
                  Download the Nexus pay App from the Play Store and register
                  your car yourself in the following process:
                  <li>
                    Log in to NexusPay App and click on Add vehicle of Toll
                    card.
                  </li>
                  <li>
                    Click on Submit along with the Image of Registration
                    card/Blue Book with the required information
                  </li>
                  <li>
                    After adding the vehicle correctly, transfer the card
                    balance and avail the facility.
                  </li>
                </ul>
              </div>
            </details>

            <details className="p-4 rounded-lg">
              <summary className="font-semibold">
                11. How to bring money to the toll card in the Nexus Pay app?
              </summary>
              <div className="mt-3">
                <p className="text-sm leading-6 text-gray-600">
                  Go to the Nexus Pay app and send money to the toll card in the
                  Send Money option.
                </p>
              </div>
            </details>
            <details className="p-4 rounded-lg">
              <summary className="font-semibold">
                12. How to register ETC through Rocket account?
              </summary>
              <div className="mt-3">
                <ul className="text-sm leading-6 text-gray-600">
                  <li>
                    To mail with photo of Registration card/Blue Book and Rocket
                    account number After rocket registration is successful at
                    rocket.
                  </li>
                  <li>
                    toll@dutchbanglabank.com, dial *322# on mobile and select
                    Toll card in Option 9
                  </li>
                  <li>
                    From Rocket account balance, required balance to Toll card.
                    must be transferred.
                  </li>
                  <li>
                    Besides, registration can be done even if you go to any
                    branch or fast track of Dutch Bangla Bank.
                  </li>
                </ul>
              </div>
            </details>
            <details className="p-4 rounded-lg">
              <summary className="font-semibold">
                13. How to bring money from Rocket account number to toll card?
              </summary>
              <div className="mt-3">
                <p className="text-sm leading-6 text-gray-600">
                  By dialing USSD Code (*322#) on your mobile phone, money can
                  be withdrawn from Rocket account to toll card using option 9.
                </p>
              </div>
            </details>
            <details className="p-4 rounded-lg">
              <summary className="font-semibold">
                14. Which roads/bridges have electronic toll collection (ETC)
                services?
              </summary>
              <div className="mt-3">
                <ul className="text-sm leading-6 text-gray-600">
                  The roads/bridges which have Electronic Toll Collection (ETC)
                  services are as follows:
                  <li>Karnaphuli Bridge, Chittagong.</li>
                  <li>Meghna Bridge, Narayanganj</li>
                  <li>Gameti Bridge, Comilla</li>
                  <li>Bhairav Bridge, Narsingdi</li>
                  <li>Payra Bridge, Patuakhali</li>
                  <li>Khan Jahan Ali (Rupsa) Bridge, Khulna</li>
                  <li>Charsindur Bridge, Narsingdi</li>
                  <li>
                    Shaheed Moejuddin Bridge, Narsingdi Atrai Toll Plaza, Natore
                  </li>
                  <li>
                    {' '}
                    Lalon Shah Bridge, Pabna Besides, ETC will be launched soon
                    on Father of the Nation Bangabandhu Sheikh Mujibur Rahman
                    Highway.
                  </li>
                </ul>
              </div>
            </details>
          </div>

          <div>
            <details className="p-4 rounded-lg">
              <summary className="font-semibold">
                15. How many days will it take to add vehicle to Tol card?
              </summary>
              <div className="mt-3">
                <p className="text-sm leading-6 text-gray-600">
                  It will take a maximum of three working days to add the
                  vehicle to the toll card.
                </p>
              </div>
            </details>
            <details className="p-4 rounded-lg">
              <summary className="font-semibold">
                16. How to understand when the toll money has been paid?
              </summary>
              <div className="mt-3">
                <p className="text-sm leading-6 text-gray-600">
                  Once the toll amount has been paid, you will be informed about
                  the balance along with the amount of toll deducted through
                  SMS.
                </p>
              </div>
            </details>

            <details className="p-4 rounded-lg">
              <summary className="font-semibold">
                17. In whose name should I register for ETC? Car owner or
                driver?
              </summary>
              <div className="mt-3">
                <p className="text-sm leading-6 text-gray-600">
                  To use ETC, the vehicle must be registered in the name of the
                  owner.
                </p>
              </div>
            </details>

            <details className="p-4 rounded-lg">
              <summary className="font-semibold">
                18. What are the benefits of using it?
              </summary>
              <div className="mt-3">
                <p className="text-sm leading-6 text-gray-600">
                  No need to stop while crossing the toll plaza, hence no
                  congestion at the toll plaza, no wastage of time and above all
                  no need to carry cash. Besides, 10% discount on prescribed
                  tolls will be available.
                </p>
              </div>
            </details>

            <details className="p-4 rounded-lg">
              <summary className="font-semibold">
                19. Can ETC Lane be used if there is not enough money in the
                account?
              </summary>
              <div className="mt-3">
                <p className="text-sm leading-6 text-gray-600">
                  No, ETC Lane cannot be used if there is insufficient funds in
                  the account.
                </p>
              </div>
            </details>

            <details className="p-4 rounded-lg">
              <summary className="font-semibold">
                20. There is enough money in the account but the system is not
                working, what to do in that case?
              </summary>
              <div className="mt-3">
                <p className="text-sm leading-6 text-gray-600">
                  In case of any systematic problem in the ETC lane, there is an
                  option to fix the toll manually.
                </p>
              </div>
            </details>

            <details className="p-4 rounded-lg">
              <summary className="font-semibold">
                21. Can I get a monthly report of how many times the car has
                crossed any toll plaza and how much money has been spent?
              </summary>
              <div className="mt-3">
                <p className="text-sm leading-6 text-gray-600">
                  How many times the car has crossed any toll plaza and how much
                  money has been spent, the information of the last 20
                  transactions can be found in Nexus pay and the information of
                  the last 5 transactions can be known from the Rocket account.
                </p>
              </div>
            </details>
            <details className="p-4 rounded-lg">
              <summary className="font-semibold">
                22. How to get reports on ETC use of company buses?
              </summary>
              <div className="mt-3">
                <p className="text-sm leading-6 text-gray-600">
                  Daily ETC usage transaction information of buses will be
                  available through daily e-mail.
                </p>
              </div>
            </details>
            <details className="p-4 rounded-lg">
              <summary className="font-semibold">
                23. Will 10% be deducted at the time of toll collection or will
                10% be refunded later?
              </summary>
              <div className="mt-3">
                <p className="text-sm leading-6 text-gray-600">
                  10% less will be deducted at the time of toll collection. For
                  example, if the amount of toll fixed for your car at the toll
                  plaza is 1000 taka, after 10% discount, this amount stands at
                  900 taka. That is, you have to pay 900 taka instead of 1000
                  taka to use the ETC lane.
                </p>
              </div>
            </details>
            <details className="p-4 rounded-lg">
              <summary className="font-semibold">
                24. How long will the 10% discount last?
              </summary>
              <div className="mt-3">
                <p className="text-sm leading-6 text-gray-600">
                  This discount will continue until further government
                  instructions.
                </p>
              </div>
            </details>
            <details className="p-4 rounded-lg">
              <summary className="font-semibold">
                25. Are there any special benefits/discounts for more users?
              </summary>
              <div className="mt-3">
                <p className="text-sm leading-6 text-gray-600">
                  You will get 10% off the prescribed toll every time you use
                  the ETC lane.
                </p>
              </div>
            </details>

            <details className="p-4 rounded-lg">
              <summary className="font-semibold">
                26. If you do not use the ETC lane, will you get a toll
                discount?
              </summary>
              <div className="mt-3">
                <p className="text-sm leading-6 text-gray-600">
                  no A 10% discount on the prescribed toll will be available for
                  using the ETC lane only.
                </p>
              </div>
            </details>

            <details className="p-4 rounded-lg">
              <summary className="font-semibold">
                27. Where to go to add RFID tag?
              </summary>
              <div className="mt-3">
                <p className="text-sm leading-6 text-gray-600">
                  Contact your nearest BRTA office to add RFID tag.
                </p>
              </div>
            </details>

            <details className="p-4 rounded-lg">
              <summary className="font-semibold">
                28. What to do if the excess money is deducted by mistake?
              </summary>
              <div className="mt-3">
                <p className="text-sm leading-6 text-gray-600">
                  There is no possibility of extra money being deducted from
                  your account.
                </p>
              </div>
            </details>

            <details className="p-4 rounded-lg">
              <summary className="font-semibold">
                29. How much does it cost to register?
              </summary>
              <div className="mt-3">
                <p className="text-sm leading-6 text-gray-600">
                  No money will be required for registration.
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FQAPage;
