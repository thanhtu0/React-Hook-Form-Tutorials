import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

let renderCount = 0;

type FormValues = {
	username: string;
	email: string;
	channel: string;
	social: {
		twitter: string;
		facebook: string;
	};
	phoneNumbers: string[];
};

export const YouTubeForm = () => {
	const form = useForm<FormValues>({
		defaultValues: {
			username: 'Batman',
			email: '',
			channel: '',
			social: {
				twitter: '',
				facebook: '',
			},
			phoneNumbers: ['', ''],
		},
	});
	// Hoặc
	// const form = useForm<FormValues>({
	// 	defaultValues: async () => {
	// 		const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
	// 		const data = await response.json();
	// 		return {
	// 			username: data.username,
	// 			email: data.email,
	// 			channel: data.address.street,
	// 		};
	// 	},
	// });
	const { register, control, handleSubmit, formState } = form;
	const { errors } = formState;
	// const { name, ref, onChange, onBlur } = register('username');

	const onSubmit = (data: FormValues) => {
		console.log('Form submitted', data);
	};

	renderCount++;
	return (
		<div>
			<h1>YouTube Form {renderCount / 2}</h1>

			<form
				onSubmit={handleSubmit(onSubmit)}
				noValidate>
				<div className='form-control'>
					<label htmlFor='username'>Username</label>
					<input
						type='text'
						id='username'
						// name={name} ref={ref} onChange={onChange} onBlur={onBlur}
						// được thay thế bằng cái ở dưới cho nó gọn gàng.
						{...register('username', {
							required: {
								value: true,
								message: 'Username is required',
							},
						})}
					/>
					<p className='error'>{errors.username?.message}</p>
				</div>

				<div className='form-control'>
					<label htmlFor='email'>E-mail</label>
					<input
						type='email'
						id='email'
						{...register('email', {
							pattern: {
								value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
								message: 'Invalid email format',
							},
							// validate: (fieldValue) => {
							// 	return fieldValue !== 'admin@example.com' || 'Enter a different email address';
							// },
							validate: {
								notAdmin: (fieldValue) => {
									return fieldValue !== 'admin@example.com' || 'Enter a different email address';
								},
								notBlackListed: (fieldValue) => {
									return !fieldValue.endsWith('baddomain.com') || 'This domain is not supported';
								},
							},
						})}
					/>
					<p className='error'>{errors.email?.message}</p>
				</div>

				<div className='form-control'>
					<label htmlFor='channel'>Channel</label>
					<input
						type='text'
						id='channel'
						{...register('channel', {
							required: {
								value: true,
								message: 'Channel is required',
							},
						})}
					/>
					<p className='error'>{errors.channel?.message}</p>
				</div>

				<div className='form-control'>
					<label htmlFor='twitter'>Twitter</label>
					<input
						type='text'
						id='twitter'
						{...register('social.twitter', {
							required: {
								value: true,
								message: 'Twitter is required',
							},
						})}
					/>
				</div>

				<div className='form-control'>
					<label htmlFor='facebook'>Facebook</label>
					<input
						type='text'
						id='facebook'
						{...register('social.facebook', {
							required: {
								value: true,
								message: 'Facebook is required',
							},
						})}
					/>
				</div>

				<div className='form-control'>
					<label htmlFor='primary-phone'>Primary phone number</label>
					<input
						type='text'
						id='primary-phone'
						{...register('phoneNumbers.0', {
							required: {
								value: true,
								message: 'Facebook is required',
							},
						})}
					/>
				</div>

				<div className='form-control'>
					<label htmlFor='secondary-phone'>Secondary phone number</label>
					<input
						type='text'
						id='secondary-phone'
						{...register('phoneNumbers.1', {
							required: {
								value: true,
								message: 'Facebook is required',
							},
						})}
					/>
				</div>
				<button>Submit</button>
			</form>
			<DevTool control={control} />
		</div>
	);
};
