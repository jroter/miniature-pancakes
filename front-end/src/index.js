import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes} from "react-router-dom";

// CSS
import './styles/styles.css'

// Components
import LandingPage from './pages/LandingPage';
import LessonsPage from './pages/LessonsPage';
import ResourcePage from './pages/ResourcePage';
import ModulePage from './pages/ModulePage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="modules" element={<LessonsPage />} />
        <Route path="resources" element={<ResourcePage />} />
        <Route path="modulepage" element={<ModulePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
