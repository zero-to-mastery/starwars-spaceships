import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
