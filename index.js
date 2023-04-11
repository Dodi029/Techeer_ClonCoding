import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './inflearn/JSX-code/Library';
import Clock from './my-app/src/Clock/Clock';
import CommentList from './my-app/CommentComponent/CommentList';
import NotificationList from './my-app/src/chap06/NotificationList';
import Accommodate from './my-app/src/chap07/Accommodate';

const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(() => {
    root.render(
        <React.StrictMode>
            <Accommodate />
        </React.StrictMode>
    );
})


reportWebVitals();