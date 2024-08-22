import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

export const YouTubeForm = () => {
	const form = useForm();
	const { register, control } = form;
	// const { name, ref, onChange, onBlur } = register('username');

	return (
		<div>
			<h1>YouTube Form</h1>

			<form>
				<label htmlFor='username'>Username</label>
				<input
					type='text'
					id='username'
					// name={name} ref={ref} onChange={onChange} onBlur={onBlur}
					// được thay thế bằng cái ở dưới cho nó gọn gàng.
					{...register('username')}
				/>

				<label htmlFor='email'>E-mail</label>
				<input
					type='email'
					id='email'
					{...register('email')}
				/>

				<label htmlFor='channel'>Channel</label>
				<input
					type='text'
					id='channel'
					{...register('channel')}
				/>

				<button>Submit</button>
			</form>
			<DevTool control={control} />
		</div>
	);
};
