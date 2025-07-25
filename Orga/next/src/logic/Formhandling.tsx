'use client';
import { useState, ReactNode } from 'react';
import { Hwrapper, Popup } from '@/components/wrappers';
import { MainForm } from '@/PagesToRender/forms';
import FieldConfigs from '@/configs/FormConfigs';
import { NavButton } from '@/components/buttons';

const LoginPage = (): ReactNode => {
	const [sstate, setState] = useState(true);
	const [visible, setVisible] = useState(true);
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

	const handleClick = () => {
		console.log('Minimizing Popup');
		setVisible(!visible);
	};

	return (
		<Popup //Fix the fucking button glow clip and make the quit button to the right
			className={`
				transition duration-300 ease-in-out
				${visible ? '' : 'scale-30 opacity-0 translate-y-32'}
				p-3 -mt-16 w-full
				max-md:max-w-xs md:max-w-sm
				items-center flex flex-col
			`}
		>
			<Hwrapper>
				<Popup className='relative right-0 w-8 h-8 mb-4 p-2 rounded border border-white/10'>
					<NavButton
						classNameI='bg-red-400 shadow-red-300 shadow-lg'
						size={4}
						onClick={handleClick}
					/>
				</Popup>
			</Hwrapper>

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
