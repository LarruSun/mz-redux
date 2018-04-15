import React ,{Component} from 'react';
import {connect} from 'react-redux';

//引入 actions动作中的函数
import {fetchBillboardLists,fetchNowPlayingLists,fetchCommingSoonLists} from '../../actions/filmData';

import '../../styles/App.less';

import BillboardCarousel from '../../components/home/BillboardCarousel';
import NowPlayingFilms from '../../components/home/NowPlayingFilms';
import CommingSoonFilms from '../../components/home/CommingSoonFilms';

class Main extends Component {
	
	//钩子函数中获取数据
	componentDidMount(){
		const {dispatch} = this.props;
		//获取 轮播的数据
		dispatch(fetchBillboardLists())
		
		dispatch(fetchNowPlayingLists(1,5))
		dispatch(fetchCommingSoonLists(1,3))
	}
	
	render(){
		const {billboards,nowPlayingFilms,commingSoonFilms} = this.props;
		return (
			<div>
				<BillboardCarousel billboards = {billboards} />
				<div className="movie">
					<NowPlayingFilms films = {nowPlayingFilms} />
					<CommingSoonFilms films = {commingSoonFilms} />
				</div>
				
			</div>
			
		)	
		
		
	}
	
	
}

const mapStateToProps = (state) =>{
	console.log(state);
	const billboards = state.film.billboards || []
	const nowPlayingFilms = state.film.nowPlayingFilms || []
	const commingSoonFilms = state.film.commingSoonFilms || []
	return {
		billboards,
		nowPlayingFilms,
		commingSoonFilms
	}	
	
}


export default connect(mapStateToProps) (Main);