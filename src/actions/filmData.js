import 'whatwg-fetch';
//引入的常量
import {
	CHANGE_LEFTNAV_STATE,
	FETCH_NOW_PLAYING_SUCCESS,
	FETCH_COMMING_SOON_SUCCESS,
	FETCH_BILLBOARD_SUCCESS,
	FETCH_DETAIL_SUCCESS,
	FETCH_FILME_NOW_SUCCESS
} from  '../constants';

//处理 左侧菜单的动作

export const changeLeftNavState = (isShow)=>{
	return dispatch => dispatch({
		type:CHANGE_LEFTNAV_STATE,
		showLeftNav:isShow	
	})	
}


//获取轮播数据
export function fetchBillboardLists(){
	//https://m.maizuo.com/v4/api/billboard/home?__t=1523244733130
	return (dispatch) =>{
		return fetch('/v4/api/billboard/home?__t=1523244733130')
		.then((res)=>{console.log(res.status); return res.json()})
		.then((data)=>{
			//console.log(data);
			dispatch({
				type:FETCH_BILLBOARD_SUCCESS,
				billboards:data.data.billboards
			})
		})
		.catch((e)=>{console.log(e.message)})	
	}
}

//获取正在上映的电影数据
//page 第几页  count 每页 的条数
//https://m.maizuo.com/v4/api/film/now-playing?__t=1523244733199&page=1&count=5
export function fetchNowPlayingLists(page,count){
	//https://m.maizuo.com/v4/api/billboard/home?__t=1523244733130
	return (dispatch) =>{
		return fetch('/v4/api/film/now-playing?__t=1523244733199&page='+page+'&count='+count)
		.then((res)=>{console.log(res.status); return res.json()})
		.then((data)=>{
			console.log(data);
			dispatch({
				type:FETCH_NOW_PLAYING_SUCCESS,
				nowPlayingFilms:data.data.films
			})
		})
		.catch((e)=>{console.log(e.message)})	
	}
}

//获取 即将上映的电影
//https://segmentfault.com/a/1190000009572846?from=singlemessage   vscode 配置 px转rem

export function fetchCommingSoonLists(page,count){
	//https://m.maizuo.com/v4/api/billboard/home?__t=1523244733130
	return (dispatch) =>{
		return fetch('/v4/api/film/coming-soon?__t=1523244733199&page='+page+'&count='+count)
		.then((res)=>{console.log(res.status); return res.json()})
		.then((data)=>{
			console.log(data);
			dispatch({
				type:FETCH_COMMING_SOON_SUCCESS,
				commingSoonFilms:data.data.films
			})
		})
		.catch((e)=>{console.log(e.message)})	
	}
}


//https://m.maizuo.com/v4/api/film/3882?__t=1523254624743
export function fetchDetail(filmid){
	return (dispatch) =>{
		return fetch('/v4/api/film/'+filmid+'?__t=1523254624743')
		.then((res)=>{console.log(res.status); console.log('$$$$$$$$$$$$$$$$$$$');return res.json()})
		.then((data)=>{
			console.log(data);
			 console.log('$$$$$$$$$$$$$$$$$$$');
			dispatch({
				type:FETCH_DETAIL_SUCCESS,
				detail:data.data.film
			})
		})
		.catch((e)=>{console.log(e.message)})	
	}
}

//
export function fetchFilmNow(page,count){
	return (dispatch) =>{
		return fetch('/v4/api/film/coming-soon?__t=1523244733199&page='+page+'&count='+count)
		.then((res)=>{console.log(res.status); console.log('$$$$$$$$$$$$$$$$$$$');return res.json()})
		.then((data)=>{
			console.log(data);
			 console.log('$$$$$$$$$$$$$$$$$$$');
			dispatch({
				type:FETCH_FILME_NOW_SUCCESS,
				filmNow:data.data.film
			})
		})
		.catch((e)=>{console.log(e.message)})	
	}
}

