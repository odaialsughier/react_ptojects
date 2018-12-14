import React , { Component } from 'react';
import {Image} from 'react-bootstrap'


class Status extends Component {
	render(){
		
		let current= {condition: {text: ''} , icon:false, feelslike_c:''};
		let location={country:'' , region:''};
		let forecast =[];
		let next_days_title=''

		if(this.props.forecast !== null){
		console.log(this.props.forecast)
			current = this.props.forecast.current;
			location = this.props.forecast.location
			forecast = this.props.forecast.forecast.forecastday
			next_days_title ='Next Days Weather'
		}

		return (
			<div>
				<div className="current">
					<div>
						<div className="city-name">
							{location.region},  
							<span className="country-name"> {location.country}</span>
						</div>
					</div>
					<div className="current-status">
						{current.condition.text}
					</div>

					
				        <Image
				          	src={current.condition.icon}
				          	width="64px"
				          	height="64px"
				          	className="current-image"
				        />

					<h2 className="current-text">
						{current.feelslike_c}
					</h2>
				</div>
				
				<h2>{next_days_title}</h2>
				<br/>
				<div className="forecast">
					
					{
						forecast.map(function(name, index){
							return <div key={index} className="next-days">
									<Image
							          	src={name.day.condition.icon}
							          	width="64px"
							          	height="64px"
							        />
							        <br/>
							        {name.date}<br/>
									{"Max Degree:" + name.day.maxtemp_c}<br/>
									{"Min Degree:" + name.day.mintemp_c}
									</div>
						})
					}
				</div>
			</div>
		);
	}
}

export default Status; 