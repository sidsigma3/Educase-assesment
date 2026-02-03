import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import HomePage from './pages/Homepage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import CreateAccountPage from './pages/CreateAccountPage.jsx';
import AccountPage from './pages/AccountPage.jsx';


function ReloadRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/", { replace: true });
  }, []);

  return null;
}


function App() {
  return (
    <BrowserRouter>
     <ReloadRedirect />
      <div className="app-wrapper">
        <div className="mobile-container">
          <Routes>
            <Route path="/"  element={<HomePage />} />
            <Route path="/signUp" element={<LoginPage />} />
            <Route path="/createAccount" element={<CreateAccountPage />} />
            <Route path="/accountSetting" element={<AccountPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
