import React from 'react';

class AddButtonComponent extends React.Component {
	render() {
		const content =
			this.props.mode === 'showcase' ? (
				<button className='btn' onClick={() => this.props.setMode('addCity')}>
					Add city
				</button>
			) : null;

		return <div>{content}</div>;
	}
}

export default AddButtonComponent;
