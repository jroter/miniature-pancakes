import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes} from "react-router-dom";

// CSS
import './styles/styles.css'

// Components
import LandingPage from './pages/LandingPage';
import LessonsPage from './pages/LessonsPage';
import ResourcePage from './pages/ResourcePage';
import ModuleOne from './pages/module-pages/ModuleOne';
import ModuleTwo from './pages/module-pages/ModuleTwo';
import PlaceHolderModule from './pages/module-pages/PlaceHolderModule';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="modules" element={<LessonsPage />} />
        <Route path="resources" element={<ResourcePage />} />
        <Route path="modules/1" element={<ModuleOne />} />
        <Route path="modules/2" element={<ModuleTwo />} />
        <Route path="modules/3" element={<PlaceHolderModule />} />
        <Route path="modules/4" element={<PlaceHolderModule />} />
        <Route path="modules/5" element={<PlaceHolderModule />} />
        <Route path="modules/6" element={<PlaceHolderModule />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
