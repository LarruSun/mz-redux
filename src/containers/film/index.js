import React ,{Component} from 'react';
import {connect} from 'react-redux';

//引入 actions动作中的函数
import {fetchFilmNow} from '../../actions/filmData';

class Filme extends Component {

    	//钩子函数中获取数据
	componentDidMount(){
        const {dispatch} = this.props;
        // console.log(dispatch);
        dispatch(fetchFilmNow(1,7));
        // console.log(filmNowData)
	}


    render(){
        const {filmNow} =this.props;
        return(
            <div>
                <p>Filme</p>
                <p>Filme</p>
                <p>Filme</p>
                <p>Filme</p>
                <p>Filme</p>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
	console.log(state);
    const filmNow = state.film.filmNow || {}
  
	return {
		filmNow
	}	
	
}

export default connect(mapStateToProps) (Filme);