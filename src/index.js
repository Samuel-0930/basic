import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppProducts from './basic/AppProducts';
import AppXY from './AppXY';
import AppMentor from './AppMentor.jsx';
import AppMentors from './AppMentors.jsx';
import AppForm from './AppForm.jsx';
import AppWrap from './AppWrap.jsx';
import AppCard from './AppCard.jsx';
import AppTheme from './AppTheme.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<AppProducts />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
