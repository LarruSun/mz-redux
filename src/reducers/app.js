//操作左侧菜单

//引入常量
import * as types from '../constants';

const app =(state={},action) =>{
	switch(action.type){
		case types.CHANGE_LEFTNAV_STATE:
			return {
				showLeftNav:action.showLeftNav
			}
		default:
			return state
		
	}
	
	
}

export default app;
