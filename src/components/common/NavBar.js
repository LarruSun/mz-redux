import React from 'react';
//connect
import {connect} from 'react-redux';
//获取store中的左侧菜单的状态changeLeftNavState
import {changeLeftNavState}  from '../../actions/filmData';

import {Link} from 'react-router-dom';
import './Navbar.less';


class NavBar extends React.Component{
	
	render(){
		const {dispatch}  = this.props;
		return (
			<nav id="toolbar" >
				<h1>
					<a onClick={()=>{dispatch(changeLeftNavState(true))}}>
						<div className="toolbar-title-icon">
							<i className="iconfont icon-list"></i>
						</div>
						<div className="toolbar-title">卖座电影</div>
					</a>
				</h1>
				<div id="nav-right" >
					<Link to='/' className="user">
						<i className="iconfont icon-user"></i>
					</Link>
				</div>
			</nav>
		)	
	}
}

//将ui组件转成容器组件

export default connect()(NavBar);
