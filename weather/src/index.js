import React from 'react';
import ReactDom from 'react-dom';

import App from './App';
import "./css/App.css";

/* To Do:  
* - Autocomplete the city name 
* - multilanguge website
* - When query doesnot exist it returns an error
*/



ReactDom.render(
	<App />
	,document.getElementById('root')
	); 