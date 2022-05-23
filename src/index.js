import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AnfibiosMain from ".components/AnfibiosMain";
import AvesMain from ".components/AvesMain";
import MamiferosMain from ".componentes/MamiferosMain";
import PecesMain from ".components/PecesMain";
import ReptilesMain from ".componentes/ReptilesMain";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
<Routes>
      <Route path="/" element={<App />} />
      <Route path="anfibiosmain" element={<AnfibiosMain />} />
      <Route path="avesmain" element={<AvesMain />} />
      <Route path="mamiferosmain" element={<MamiferosMain />} />
      <Route path="pecesmain" element={<PecesMain />} />
      <Route path="reptilesmain" element={<ReptilesMain />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
