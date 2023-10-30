import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Recharge from "./pages/recharge";
import Withdrawal from "./pages/withdrawal";
import Support from "./pages/support";
import Grab from "./pages/grab";
import My from "./pages/my";
import Order from "./pages/order";
import Invite from "./pages/invite";
import RechargeRecord from "./pages/recharge-record";
import WithdrawalRecord from "./pages/withdrawal-record";
import AccountDetails from "./pages/account-details";
import BindCard from "./pages/bind-card";
import ChangePassword from "./pages/change-password";
import Payment from "./pages/payment";
import Admin from "./pages/admin/admin";
import AddBalance from "./pages/admin/add-balance";
import UpdateAccountForm from "./pages/admin/update-account";

function App() {
   window.api = "https://wild-rose-wasp-vest.cyclic.app";
   // window.api = "http://localhost:5000";
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/recharge" element={<Recharge />} />
            <Route path="/withdrawal" element={<Withdrawal />} />
            <Route path="/support" element={<Support />} />
            <Route path="/grab" element={<Grab />} />
            <Route path="/my" element={<My />} />
            <Route path="/order" element={<Order />} />
            <Route path="/invite" element={<Invite />} />
            <Route path="/recharge-record" element={<RechargeRecord />} />
            <Route path="/withdrawal-record" element={<WithdrawalRecord />} />
            <Route path="/account-details" element={<AccountDetails />} />
            <Route path="/bind-card" element={<BindCard />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/payment" element={<Payment />} />

            {/* Admin */}
            <Route path="/admin" element={<Admin />} />
            <Route path="/add-balance" element={<AddBalance />} />
            <Route path="/update-account" element={<UpdateAccountForm />} />

         </Routes>
      </div>
   );
}

export default App;
