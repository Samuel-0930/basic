import React, { useState } from 'react';

export default function AppForm() {
	const [form, setForm] = useState({ name: '', email: '' });

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(form);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor='name'>이름:</label>
				<input
					type='text'
					name='name'
					id='name'
					value={form.name}
					onChange={handleChange}
				/>
				<label htmlFor='email'>이메일:</label>
				<input
					type='email'
					name='email'
					id='email'
					value={form.email}
					onChange={handleChange}
				/>
				<button>Submit</button>
			</form>
		</div>
	);
}
