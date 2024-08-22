import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

let renderCount = 0;

type FormValues = {
	username: string;
	email: string;
	channel: string;
};

export const YouTubeForm = () => {
	const form = useForm<FormValues>();
	const { register, control, handleSubmit } = form;
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
				<label htmlFor='username'>Username</label>
				<input
					type='text'
					id='username'
					// name={name} ref={ref} onChange={onChange} onBlur={onBlur}
					// được thay thế bằng cái ở dưới cho nó gọn gàng.
					{...register('username', {
						required: {
							value: true,
							message: 'Email is required',
						},
					})}
				/>

				<label htmlFor='email'>E-mail</label>
				<input
					type='email'
					id='email'
					{...register('email', {
						pattern: {
							value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
							message: 'Invalid email format',
						},
					})}
				/>

				<label htmlFor='channel'>Channel</label>
				<input
					type='text'
					id='channel'
					{...register('channel', { required: 'Channel is required' })}
				/>

				<button>Submit</button>
			</form>
			<DevTool control={control} />
		</div>
	);
};
