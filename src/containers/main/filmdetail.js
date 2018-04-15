import React ,{Component} from 'react';
import {connect} from 'react-redux';

//引入 actions动作中的函数
import {fetchDetail} from '../../actions/filmData';


class FilmDetail extends Component {
	
	//钩子函数中获取数据
	componentDidMount(){
		const {dispatch} = this.props;
		console.log(dispatch);
		//获取 轮播的数据
		dispatch(fetchDetail(this.props.match.params.filmid))
		// console.log()
	}
	
	render(){
		const {detail} = this.props;
		return (
			<div>
			<img src={detail.cover&&detail.cover.origin} alt={detail.name}/>
				{detail.name}
				
			</div>
			
		)	
		
		
	}
	
	
}

const mapStateToProps = (state) =>{
	console.log(state);
	const detail = state.film.detail || {}
	return {
		detail
	}	
	
}


export default connect(mapStateToProps) (FilmDetail);