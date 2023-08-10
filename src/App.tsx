import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import UserSetting from "./pages/UserSetting/UserSetting";
import EditUser from "./pages/UserSetting/EditUser";
import PublicHoliday from "./pages/PubilcHoliday/publicHoliday";
import Report from "./pages/Report/report"
import Receivedleave from "./pages/Report/receivedLeave";
import Leavereport from "./pages/Report/leaveReport";
import Adjustreport from "./pages/Report/adjustreport"


const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/user-edit" element={<EditUser />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user-setting" element={<UserSetting />} />
          <Route path="/publicholiday" element={<PublicHoliday />} />
          <Route path="/report" element={<Report />} />
          <Route path="/receivedleave" element={<Receivedleave />} />
          <Route path="/leavereport" element={<Leavereport />} />
          <Route path="/adjustreport" element={<Adjustreport />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
