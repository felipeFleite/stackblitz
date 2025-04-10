import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router'

import Login from './Login.jsx';
import Home from './Home.jsx'
import Registrar from './Registrar.jsx';
import AuthMiddleware from './middlewares/Autenticacao.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<AuthMiddleware />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/registrar" element={<Registrar/>} />
    </Routes>
    </BrowserRouter>
  </StrictMode>
);
