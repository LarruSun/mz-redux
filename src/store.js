import {createStore,applyMiddleware} from 'redux';

import {routerMiddleware} from 'react-router-redux';

import createHistory from 'history/createBrowserHistory';

//引入thunk
import thunk from 'redux-thunk';

//引入纯函数
import rootReducer from './reducers';

//输出 history
export const history = createHistory();

//创建仓库
export default createStore (
	rootReducer,
	
	applyMiddleware(thunk,routerMiddleware(history))
)



