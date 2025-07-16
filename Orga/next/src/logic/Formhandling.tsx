'use client';

import { useState, ReactNode } from 'react';

import { Popup } from '@/components/wrappers';
import { MainForm } from '@/pages/forms';
import { FieldConfigs } from '@/configs/FormConfigs';

const LoginPage = (): ReactNode => {
	const [sstate, setState] = useState(true);
	const FormConfig =
		sstate ? FieldConfigs.login : FieldConfigs.register;
	const handleSubmit = async (
		e: React.FormEvent<HTMLFormElement>
	) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const data = Object.fromEntries(formData.entries());
		try {
			const endpoint =
				'/api/' + (sstate ? 'login' : 'register');
			const response = await fetch(endpoint, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});
			if (!response.ok)
				throw new Error('Process unsuccessful');
			const result = await response.json();
			console.log('Success:', result);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Popup className='-mt-16 bg-black/20'>
			<MainForm
				url={FormConfig.url}
				onSubmit={handleSubmit}
				className='w-full flex flex-col justify-center gap-6 overflow-clip'
				subhandler='hand'
				fields={FormConfig.fields}
				state={sstate}
				setState={() => setState((prev) => !prev)}
			/>
		</Popup>
	);
};

export default LoginPage;
