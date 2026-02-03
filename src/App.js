import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/Homepage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import CreateAccountPage from './pages/CreateAccountPage.jsx';
import AccountPage from './pages/AccountPage.jsx';


function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <div className="mobile-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
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
