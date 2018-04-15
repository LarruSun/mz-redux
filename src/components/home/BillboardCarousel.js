import React from 'react';
import ReactSwipe from 'react-swipe';


class BillboardCarousel extends React.Component{
	render(){
		const {billboards} = this.props;
		return (
			<ReactSwipe key={billboards.length} className="carousel" swipeOptions = {{continuous:true,auto:3000}}>
				{billboards.map((billboard,i)=>
				<div key={i}>
					<img src={billboard.imageUrl} alt="maizuo"/>
				</div>
				)}
			</ReactSwipe>
			
			
		)
		
		
	}
	
}	


export default BillboardCarousel;