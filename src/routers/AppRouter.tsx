// src/routes/AppRouter.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import Dashboard from '../pages/Dashboard';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path='/home' element={<Home/>}>
         <Route path="dashboard" element={<Dashboard />} />
      </Route>     
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
