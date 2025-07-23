'use client';

import { useState, ReactNode } from 'react';

import { Popup } from '@/components/wrappers';
import { MainForm } from '@/PagesToRender/forms';
import FieldConfigs from '@/configs/FormConfigs';

const LoginPage = (): ReactNode => {
	const [sstate, setState] = useState(true);
	const FormConfig =
		sstate ? FieldConfigs.login : FieldConfigs.register;
	const port = 8000;
	const address = 'http://192.168.1.2:' + port;
	const endpoint = address + FormConfig.url;
	const connConfig = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
	};
	const handler = async (
		event: React.FormEvent<HTMLFormElement>
	) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const data = Object.fromEntries(formData.entries());
		console.log(data);
		try {
			const res = await fetch(endpoint, connConfig);
			if (!res.ok)
				throw new Error(`HTTP error! status:${res.status}`);
			const req = await res.text();
			console.log(req);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Popup className='-mt-16 bg-black/20'>
			<MainForm
				onSubmit={handler}
				url={FormConfig.url}
				className='w-full flex flex-col justify-center gap-6 overflow-y-clip'
				subhandler='hand'
				fields={FormConfig.fields}
				state={sstate}
				setState={() => setState((prev) => !prev)}
			/>
		</Popup>
	);
};

export default LoginPage;
