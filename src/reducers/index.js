
//将reducer合并成一个文件的
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import film from './film';
import app from './app';

//合并并输出
export default  combineReducers({
	router:routerReducer,
	app,
	film
})
