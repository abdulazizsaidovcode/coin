import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ToastContainer/>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);

