import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import AccountStatus from './components/Pages/AccountStatus';
import Recharge from './components/Pages/Recharge';
import AccountHistory from './components/Pages/AccountHistory';
import FQAPage from './components/Pages/FQAPage';
import Users from './components/Pages/Users';
import Login from './components/Pages/Login';
import Navbar from './components/Pages/Navbar';
import SignUp from './components/Pages/SignUp';
import RG from './components/Pages/RG';
import LG from './components/Pages/LG';
import RequireAuth from './components/Pages/RequireAuth';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <Home></Home> */}
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/rg' element={
          <RequireAuth>
            <RG/>
          </RequireAuth>
        }></Route>
        <Route path='/lg' element={
          <RequireAuth>
            <LG/>
          </RequireAuth>
        }></Route>
        {/* <Route path='/rgotp' element={<SignUpPhone/>}></Route> */}
        <Route path='/status' element={
          <RequireAuth>
            <AccountStatus></AccountStatus>
          </RequireAuth>
        }></Route>
        <Route path='/history' element={
        <RequireAuth>
          <AccountHistory></AccountHistory>
        </RequireAuth>
      }></Route>
        <Route path='/recharge' element={
          <RequireAuth>
            <Recharge></Recharge>
          </RequireAuth>
        }></Route>
        <Route path='/home' element={
          <RequireAuth>
            <Home/>
          </RequireAuth>
        }></Route>
        <Route path='/QA' element={
          <RequireAuth>
            <FQAPage></FQAPage>
          </RequireAuth>
        }></Route>
        <Route path='/users' element={
          <RequireAuth>
            <Users></Users>
          </RequireAuth>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
