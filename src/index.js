import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Portal from './pages/Portal';
import Register from './pages/Register';
import Docs from './pages/Docs';
import Login from './pages/Login';
import FAQ from './pages/FAQ';
import { Provider } from 'react-redux';
import store from './Stores/index';
import Dashboard from './pages/Portal/dashboard';
import PatientTransfer from './pages/Portal/patientTransfer';
import PatientPool from './pages/Portal/patientPool';
import Digitalized from './pages/Portal/digitalized';
import Results from './pages/Portal/results';
import Consultations from './pages/Portal/consultation';
import LungCancer from './pages/Portal/CancerPredict/lungCancer';
import BreastCancer from './pages/Portal/CancerPredict/breastCancer';
import AiTools from './pages/Portal/aiTools';
import Error404 from './pages/error404';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/portal" element={<Portal />} >  
          <Route path="/portal/dashboard" element={<Dashboard />} />  
          <Route path="/portal/ai-tools" element={<AiTools />} />  
          <Route path="/portal/cancer-predict/breast-cancer" element={<BreastCancer />} />  
          <Route path="/portal/cancer-predict/lung-cancer" element={<LungCancer />} />  
          <Route path="/portal/consultation" element={<Consultations />} />  
          <Route path="/portal/results" element={<Results />} />  
          <Route path="/portal/digitalized" element={<Digitalized />} />  
          <Route path="/portal/patient-pool" element={<PatientPool />} />  
          <Route path="/portal/patient-transfer" element={<PatientTransfer />} />  
        </Route>
        <Route path="/docs" element={<Docs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<Error404/>} />
      </Routes>   
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
