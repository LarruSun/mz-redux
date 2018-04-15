import React from 'react';
import './FilmItem.less';
import {Link} from 'react-router-dom';
//将时间戳转日期时间
import moment from 'moment';


export  default class NowPlayingFilms extends React.Component{
	//将时间戳更改为日期时间的函数
	getTime(date){
		let  week = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
		let week_key = moment(date).format('d');
		//console.log(week_key);
		return moment(date).format('M月DD日上映 ') + week[week_key];
	}
	render(){
		const {film,type} = this.props;
		return (
			<li>
			<Link to={'/detail/'+film.id}>
				<div className="movie-item">
					<img src={film.cover&&film.cover.origin} alt="maizuo"/>
				</div>
				<div className="desc">
					<div className="left">
						<div className="film-name">{film.name}</div>
						<div className="count">
						
							{
								type==='COMMING_SOON'? <span></span>:
								<span>{film.cinemaCount}家影院上映 {film.watchCount}人购票</span>
							}
						</div>
					</div>
					<div className="right">
						{type==='COMMING_SOON'?<span className="score" style={{fontSize:12+'px'}}>{this.getTime(film.premiereAt)}</span>:<span className="score">{film.grade}</span>}
					</div>
				</div>
				</Link>
			</li>
		)
	}
	
	
}
