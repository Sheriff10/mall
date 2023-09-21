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

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/recharge" element={<Recharge />} />
            <Route path="/withdrawal" element={<Withdrawal />} />
            <Route path="/support" element={<Support />} />
            <Route path="/grab" element={<Grab />} />
            <Route path="/my" element={<My />} />
         </Routes>
      </div>
   );
}

export default App;
