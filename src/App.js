import React from 'react';

import ListComponent from './components/ListComponent';
import ShowCase from './components/ShowcaseComponent';
import AddButton from './components/AddButton';
import AddCityForm from './components/AddCityForm';

class App extends React.Component {
	state = {
		activeCity: {
			id: 1,
			cityName: 'London',
			summary: `Looking to break into London's burgeoning tech scene but not sure where to start, what to read or what events to attend? In this thought-provoking and inspiring session, we'll give you the inside scoop on how to make your name in the exciting startup world in London. We'll highlight the key events to attend, tell you all about the "who's who", explain the role of venture capitalists and accelerators and fill you in on key players such as Tech City UK and Google Campus.`,
			image: 'london.png'
		},
		mode: 'showcase'
	};

	handleActiveCity = city => {
		this.setState({ activeCity: city });
	};

	handleMode = mode => {
		this.setState({ mode });
	};
	handleCancleAddTeam = mode => {
		this.setState({ mode });
	};

	render() {
		const rightContent =
			this.state.mode === 'showcase' ? (
				<ShowCase city={this.state.activeCity} />
			) : (
				<AddCityForm cancelAddCity={this.handleCancleAddTeam} />
			);
		return (
			<div className='App'>
				<nav>
					<ListComponent
						selectCity={this.handleActiveCity}
						activeCity={this.state.activeCity}
						cancelAddCity={this.handleCancleAddTeam}
					/>
					<AddButton mode={this.state.mode} setMode={this.handleMode} />
				</nav>

				{rightContent}
			</div>
		);
	}
}

export default App;
