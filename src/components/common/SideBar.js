import React from 'react';
//connect
import {connect} from 'react-redux';
//获取store中的左侧菜单的状态changeLeftNavState
import {changeLeftNavState}  from '../../actions/filmData';

import {Link} from 'react-router-dom';
import './SideBar.less';

class SideBar extends React.Component{
	render(){
		const {dispatch,showLeftNav} = this.props;
		return (
			<aside className="application-sidebar">
				<div className="sidebar-container sidebar-transition" id="s_con" style={showLeftNav?{opacity:1}:{opacity:0,zIndex:-10}} 
				onClick={()=>{
						document.getElementById('s_con').style.opacity = 0;
						document.getElementById('s_left').style.right = '320px';
						setTimeout(function(){
							document.getElementById('s_con').style.zIndex = 1;
							dispatch(changeLeftNavState(false))
						},400);
					} 
				
				}>
		          <div className="sidebar-overlay" id="s_over">
		            <nav className="leftNav-transition" id="s_left" style={showLeftNav?{right:110+'px'}:{right:320+'px'}}>
		              <ul>
		                <li ><Link to="/"><span>首页</span><i className="iconfont icon-arrow-right right"></i></Link></li>
		                <li ><Link to="/film"><span>影片</span><i className="iconfont icon-arrow-right right"></i></Link></li>
		                <li ><a><span>影院</span><i className="iconfont icon-arrow-right right"></i></a></li>
		                <li ><Link to="/member"><span>我的</span><i className="iconfont icon-arrow-right right"></i></Link></li>
		                <li ><a><span>卖座网查询</span><i className="iconfont icon-arrow-right right"></i></a></li>
		              </ul>
		            </nav>
		          </div>
		        </div>
			</aside>
		)	
	}	
}

//将store中 的状态值映射到 ui组件中
const mapStateToProps = (state)=>{
	return {
		showLeftNav:state.app.showLeftNav||false
	}
	
	
}

export default connect(mapStateToProps) (SideBar);
