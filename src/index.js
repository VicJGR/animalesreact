import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom';

=======
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Anfibios from ".components/anfibios/Anfibios";
import Aves from ".components/aves/Aves";
import Mamiferos from ".componentes/mamiferos/Mamiferos";
import Peces from ".components/peces/Peces";
import Reptiles from ".componentes/reptiles/Reptiles";
>>>>>>> 28c96cfe290de2e5797cb512b33d11981e477511

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
<Routes>
      <Route path="/" element={<App />} />
      <Route path="anfibios" element={<Anfibios />} />
      <Route path="aves" element={<Aves />} />
      <Route path="mamiferos" element={<Mamiferos />} />
      <Route path="peces" element={<Peces />} />
      <Route path="reptiles" element={<Reptiles />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
