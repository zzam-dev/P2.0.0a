import { ReactNode } from 'react';

import { MainInput } from './input';
import { MainButton, SwitchButton } from './buttons';

type Fields<> = {
	type: 'text' | 'email' | 'password';
	name?:
		| 'text'
		| 'username'
		| 'fname'
		| 'lname'
		| 'email'
		| 'password'
		| 'cpassword';
	placeholder?: string;
	className?: string;
	autoComplete?: 'on' | 'off';
}; //Add form handling types

type FieldConfig = {
	subhandler: string;
	fields: Fields[];
};

type Props = FieldConfig & {
	children?: ReactNode;
	className?: string;
	state?: boolean;
	setState?: (newstate: boolean) => void;
};

const FieldConfigs: { [key: string]: FieldConfig } = {
	login: {
		subhandler: '',
		fields: [
			{
				type: 'email',
				placeholder: 'Email',
				autoComplete: 'on',
			},
			{
				type: 'password',
				placeholder: 'Password',
				autoComplete: 'on',
			},
		],
	},
	register: {
		subhandler: '',
		fields: [
			{ type: 'text', placeholder: 'Username' },
			{ type: 'email', placeholder: 'Email' },
			{ type: 'password', placeholder: 'Password' },
			{
				type: 'password',
				name: 'cpassword',
				placeholder: 'Confirm Password',
			},
		],
	},
}; //Should be modularized, Form handling should be added and completed

const MainForm = ({
	className,
	children,
	state,
	fields = [],
	setState,
}: Props) => {
	return (
		<div className='w-full m-5'>
			<form
				className={`
                ${className}
                `}
			>
				<SwitchButton
					switchI={state ? 'Login!' : 'Register!'}
					switchII={state ? 'Register!' : 'Login!'}
					state={state}
					setState={setState}
				/>
				{fields.map((field, idx) => (
					<MainInput
						key={field.name ?? idx}
						type={field.type}
						name={field.name}
						placeholder={field.placeholder}
						autoComplete={field.autoComplete ?? 'off'}
					/>
				))}
				<MainButton label='Register' />
				{children}
			</form>
		</div>
	);
};

export { FieldConfigs, MainForm, type Fields };
