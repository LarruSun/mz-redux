import React from 'react';
import {Route} from 'react-router-dom';

//引入主页的page
import Main from '../containers/main';
import FilmDetail from '../containers/main/filmdetail';


import Filme from './../containers/film';


//引入头部组件
import NavBar from '../components/common/NavBar';
//引入 左侧的组件
import SideBar from '../components/common/SideBar';
//路由

const App = () =>(
	<div>
		<div className="application">
			<div className="application-head">
				<NavBar />
			</div>
			<div className="application-view">
				<Route exact path="/" component={Main} />
				<Route  path="/detail/:filmid" component={FilmDetail} />
				<Route  path="/film" component={Filme} />
			</div>
		</div>
		<SideBar />
	</div>

)

export default App;