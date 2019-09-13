import React from 'react';

class ListItemcomponent extends React.Component {
	render() {
		const city = this.props.city;

		return (
			<li
				className={
					city.cityName === this.props.selectedCity.cityName
						? 'active-city'
						: null
				}
				onClick={() => this.props.selectCity(city)}
			>
				{city.cityName}
			</li>
		);
	}
}

export default ListItemcomponent;
