import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Connexion from './components/Connexion';
import NotFound from './components/NotFound';

const MyApp = () => (
  <Router>
    <Routes>
      <Route path='/' element={<Connexion />} />
      <Route path='/pseudo/:login' element={<App />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

