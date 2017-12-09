import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {NiceButton, Child} from './NiceButton';
// import { SelectName } from './SelectName';


class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			name: "from app.js",
         time: 0,
         color: ''
		}
	}

	handleClick = () => {
		this.setState( {time: this.state.time + 1})
   }
   
   onPickColor(e) {
      console.log('[onPickColor]', e.target.value )
      this.setState({ name: e.target.value });
   }

	render() {
		const teams = this.state.teams;
		const artists = this.state.artists;
		return (
			<div className="App">
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<NiceButton name={this.state.name}/>
				<Child name={this.state.name}/>
				<button onClick={ this.handleClick }>{ this.state.time }</button>

            <div>&nbsp;</div>

            <p>i feel { this.state.color }</p>
            <select
               onChange={this.onPickColor.bind(this)}
               // inputRef={ el => this.inputEl=el }
               // componentClass="select" placeholder="select"
            >
               <option value="">select</option>
               <option value="red">Red</option>
               <option value="green">Green</option>
               <option value="blue">Blue</option>
            </select> 
			</div>
		);
	}
}

export default App;
