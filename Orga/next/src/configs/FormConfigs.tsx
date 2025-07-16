type Fields = {
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
	style?: React.CSSProperties;
}; //Add form handling types

type FieldConfig = {
	url: string;
	subhandler: string;
	fields: Fields[];
};

const FieldConfigs: { [key: string]: FieldConfig } = {
	login: {
		subhandler: '',
		url: 'localhost:8000/login',
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
		url: 'localhost:8000/register',
		fields: [
			{
				type: 'text',
				placeholder: 'Username',
				name: 'username',
			},
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

export { FieldConfigs };
export type { FieldConfig, Fields };
