import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

class AddCityForm extends React.Component {
	render() {
		let { values, errors } = this.props;

		return (
			<div className='sign-up-form'>
				<Formik
					initialValues={{
						title: '',
						image: '',
						description: ''
					}}
					onSubmit={(values, { setSubmitting }) => {
						setTimeout(() => {
							// add Team

							setSubmitting(false);
						}, 500);
					}}
					validationSchema={Yup.object().shape({
						title: Yup.string()
							.min(2, 'You must at laeast use 2 characters.')
							.required('You must enter a title.')
					})}
				>
					{props => {
						const {
							values,
							touched,
							errors,
							isSubmitting,
							handleChange,
							handleBlur,
							handleSubmit
						} = props;
						return (
							<form onSubmit={handleSubmit}>
								<label htmlFor='title' style={{ display: 'block' }}>
									Title:
								</label>
								{errors.title && touched.title && (
									<div className='input-feedback'>{errors.title}</div>
								)}
								<input
									id='title'
									placeholder='Enter a title'
									type='text'
									value={values.title}
									onChange={handleChange}
									onBlur={handleBlur}
									className={
										errors.title && touched.title
											? 'text-input error'
											: 'text-input'
									}
									autoFocus={true}
								/>

								<label htmlFor='image' style={{ display: 'block' }}>
									Image:
								</label>

								<input
									id='image'
									placeholder='Enter an image'
									type='text'
									value={values.image}
									onChange={handleChange}
									onBlur={handleBlur}
									className={'text-input'}
								/>

								<label htmlFor='description' style={{ display: 'block' }}>
									Description
								</label>

								<input
									id='description'
									placeholder='Enter your description'
									type='text'
									value={values.description}
									onChange={handleChange}
									onBlur={handleBlur}
									className={'text-input'}
								/>

								<button
									type='submit'
									className='btn btn-primary teams-submit-button'
									disabled={
										Object.keys(errors).length !== 0 &&
										errors.constructor === Object
									}
								>
									Add city
								</button>
								<button
									className='btn btn-cancel'
									onClick={() => this.props.cancelAddCity('showcase')}
								>
									Cancel
								</button>
							</form>
						);
					}}
				</Formik>
			</div>
		);
	}
}

export default AddCityForm;
