import React from 'react';
import ReactDOM,{render} from 'react-dom';

import {Provider} from 'react-redux';

import {ConnectedRouter} from 'react-router-redux';

import store,{history} from './store';

//引入app
import App from './router';
import './styles/reset.css';
import './styles/icon.css';
import './index.css';
import 'react-flexible';


import registerServiceWorker from './registerServiceWorker';

render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>
	
	, document.getElementById('root'));
registerServiceWorker();
