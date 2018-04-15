//数据获取的纯函数

//* as 的写法是将输出的内容作为一个对象来引入
import * as types from '../constants';

const film =(state={},action)=>{
	switch (action.type){
		case types.FETCH_BILLBOARD_SUCCESS:
			return Object.assign({},state,{billboards:action.billboards})
		case types.FETCH_NOW_PLAYING_SUCCESS:
			return Object.assign({},state,{nowPlayingFilms:action.nowPlayingFilms})
		case types.FETCH_COMMING_SOON_SUCCESS:
			return Object.assign({},state,{commingSoonFilms:action.commingSoonFilms})
		case types.FETCH_DETAIL_SUCCESS:
			return Object.assign({},state,{detail:action.detail})
		case types.FETCH_FILME_NOW_SUCCESS:
			return Object.assign({},state,{filmNow:action.filmNow})
		default:
			return state;
		
	}
	
}	


export default film;