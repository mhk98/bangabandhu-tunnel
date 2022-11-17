import './App.css';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/Pages/Home';
import AccountStatus from './components/Pages/AccountStatus';
import Recharge from './components/Pages/Recharge';
import AccountHistory from './components/Pages/AccountHistory';
import FQAPage from './components/Pages/FQAPage';
import Login from './components/Pages/Login';
// import Navbar from "./components/Pages/Navbar";
import SignUp from './components/Pages/SignUp';
import RequireAuth from './components/Pages/RequireAuth';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Otp from './components/Pages/Otp';
import Success from './components/Pages/Success';
import TermsAndConditions from './components/Pages/TermsAndConditions';
import AboutUs from './components/Pages/AboutUs';
import Footer from './components/Pages/Footer';
import { useState } from 'react';
function App() {
  const [navbar, setNavbar] = useState(false);
  const navigate = useNavigate();
  let logout = () => {
    localStorage.removeItem('SavedToken');
    navigate('/login');
  };

  const [darkToggle, setDarkToggle] = useState(false);
  const [enabled, setEnabled] = useState(false);
  return (
    <div className={`App fill-window ${darkToggle && 'dark'}`}>
      <div className="dark:text-white dark:bg-gray-900">
        {/*   ..........................Start Navbar.............................. */}
        <nav className="w-full border-b mt-1 mb-1 border-base-300">
          <div className="justify-between mx-auto px-5 lg:max-w-8xl md:items-center md:flex md:px-8">
            <div>
              <div className="flex items-center justify-between md:py-5 md:block">
                <Link to="/">
                  <h2 className="text-2xl font-bold">Karnafuli Tunnel</h2>
                </Link>
                <div className="md:hidden">
                  <button
                    className="p-2 dark:text-white rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <svg
                        className="w-6 h-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                  navbar ? 'block' : 'hidden'
                }`}
              >
                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                  <li className="hover:text-blue-600">
                    <Link to="/status">Account Status</Link>
                  </li>
                  <li className="hover:text-blue-600">
                    <Link to="/history">Account History</Link>
                  </li>
                  <li className="hover:text-blue-600">
                    <Link to="/recharge">Recharge</Link>
                  </li>
                  <li className="hover:text-blue-600">
                    <Link to="/QA">QA</Link>
                  </li>
                  {localStorage.getItem('SavedToken') ? (
                    <li className="hover:text-blue-600">
                      <Link onClick={logout} className="cursor-pointer">
                        Log Out
                      </Link>
                    </li>
                  ) : (
                    <li className="mb-4 hover:text-blue-600">
                      <Link to="/login">Login</Link>
                    </li>
                  )}
                  <li>
                    {' '}
                    <label class="flex items-center mt-1 relative mr-5 cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        onClick={() => setDarkToggle(!darkToggle)}
                        readOnly
                      />
                      <div
                        onClick={() => {
                          setEnabled(!enabled);
                        }}
                        className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-700"
                      ></div>
                      <span className="flex items-center ml-2 text-sm dark:text-white dark:bg-gray-900">
                        DarkMode
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        {/*   ..........................Start Navbar.............................. */}

        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route path="/otp" element={<Otp></Otp>}></Route>
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          ></Route>
          <Route path="/aboutUs" element={<AboutUs />}></Route>
          {/* <Route path='/rgotp' element={<SignUpPhone/>}></Route> */}
          <Route
            path="/"
            element={
              <RequireAuth>
                <AccountStatus></AccountStatus>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/status"
            element={
              <RequireAuth>
                <AccountStatus></AccountStatus>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/history"
            element={
              <RequireAuth>
                <AccountHistory></AccountHistory>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/recharge"
            element={
              // <RequireAuth>
              <Recharge></Recharge>
              // </RequireAuth>
            }
          ></Route>

          <Route path="/QA" element={<FQAPage></FQAPage>}></Route>
          <Route
            path="/success/:transactionId"
            element={<Success></Success>}
          ></Route>
        </Routes>
        <Footer />
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
}

export default App;
