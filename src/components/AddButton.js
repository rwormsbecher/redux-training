import React from 'react';
import { connect } from 'react-redux';
import { SetCity } from '../redux/actions/applicationActions';

class AddButtonComponent extends React.Component {
	render() {
		const content =
			this.props.mode === 'showcase' ? (
				<button className='btn' onClick={() => this.props.SetCity()}>
					Add city
				</button>
			) : null;

		return <div>{content}</div>;
	}
}

export default connect(
	null,
	{ SetCity }
)(AddButtonComponent);
