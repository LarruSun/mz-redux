import React from 'react';
import FilmItem from './FilmItem';

export  default class NowPlayingFilms extends React.Component{
	render(){
		const {films} = this.props;
		return (
			<ul>
				{
					films.map((film,i)=>
						<FilmItem key={i} film={film} type="NOW_PLAYING" />
					
					)
				}
			</ul>
		)
	}

}
