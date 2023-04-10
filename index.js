import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './inflearn/JSX-code/Library';
import Clock from './inflearn/Clock/Clock';
import CommentList from './inflearn/CommentComponent/CommentList';

const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(() => {
    root.render(
        <React.StrictMode>
            <Clock />
        </React.StrictMode>
    );
}, 1000)
reportWebVitals();