import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import User from './pages/user/User';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
