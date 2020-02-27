import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//WHAT WE WANT TO RENDER, WHERE WE RENDER (note that root id in index.html renders App component)
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
