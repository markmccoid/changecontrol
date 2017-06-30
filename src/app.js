import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/Main';


//app scss - webpack will create a sass-styles.css file in pubic directory
require('./styles/app.scss');

//--Ant Design css load
// require('/antd/dist/antd.min.css');

//path="/" designates the root of the application
ReactDOM.render(
	<Main />,
  document.getElementById('app')
);
//Old ReactDom render method without routing

// ReactDOM.render(
//   <h1>Boilerplate app!  </h1>,
//   document.getElementById('app')
// );
