import React from 'react';
import ListItemComponent from './ListItemComponent';
import { connect } from 'react-redux';
import { getCities } from '../redux/actions/cityActions';

class ListComponent extends React.Component {
	async componentDidMount() {
		await this.props.getCities();
	}

	render() {
		const citiesListItemArray = this.props.cities.map(city => {
			return (
				<ListItemComponent
					selectedCity={this.props.activeCity}
					city={city}
					key={city.id}
					selectCity={this.props.selectCity}
				/>
			);
		});

		return <ul>{citiesListItemArray}</ul>;
	}
}

const mapStateToProps = state => {
	return {
		cities: state.citiesSlice.cities
	};
};

export default connect(
	mapStateToProps,
	{ getCities }
)(ListComponent);
