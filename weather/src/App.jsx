import React , { Component } from 'react' 
import {FormGroup , FormControl, InputGroup} from 'react-bootstrap'
import Status from './Status';


class App extends Component{
	constructor(probs){
		super(probs);
		this.state = {
			query: '',
			forecast: null
		}
	}

	search(){
		const BASE_URL = 'http://api.apixu.com/v1/forecast.json'
		const api_key = 'e090142467b64f5bab6144216180812'
		const FETCH_URL =`${BASE_URL}?key=${api_key}&q=${this.state.query}&days=7`

		fetch(FETCH_URL,{
			method: 'GET'
		}).then(response => response.json())
		.then(json => 
		{
			this.setState({
				forecast: json
			})
		}
		)
	}


	render(){
		return (
			<div className="main">
				<h1>World Weather</h1>
				<FormGroup>
					<InputGroup>
						<FormControl
							type='text'
							palceholder='text you City, country ,,,'
							onChange={event => this.setState({query: event.target.value})}
							onKeyPress={event => 
								{
									if(event.key==='Enter')
										this.search()
								}
							}
						/>
					</InputGroup>
				</FormGroup>

				<Status 
					forecast= {this.state.forecast}
				/>
			</div>
			);
	}
}

export default App