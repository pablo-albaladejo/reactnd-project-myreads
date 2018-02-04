import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.render(
    <BrowserRouter
        //https://github.com/facebook/create-react-app/issues/2959
        basename={process.env.PUBLIC_URL}
    >
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
