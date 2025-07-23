type FormType = 'login' | 'register';

type Name =
	| 'text'
	| 'username'
	| 'fname'
	| 'lname'
	| 'email'
	| 'password'
	| 'cpassword';

type Fields = {
	type: 'text' | 'email' | 'password';
	name: Name;
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

const FieldConfigs: Record<FormType, FieldConfig> = {
	login: {
		subhandler: '',
		url: '/login',
		fields: [
			{
				type: 'text',
				name: 'username',
				placeholder: 'Username',
				autoComplete: 'on',
			},
			{
				type: 'password',
				name: 'password',
				placeholder: 'Password',
				autoComplete: 'on',
			},
		],
	},
	register: {
		subhandler: '',
		url: '/register',
		fields: [
			{
				type: 'text',
				placeholder: 'Username',
				name: 'username',
			},
			{
				type: 'email',
				placeholder: 'Email',
				name: 'email',
			},
			{
				type: 'password',
				placeholder: 'Password',
				name: 'password',
			},
			{
				type: 'password',
				name: 'cpassword',
				placeholder: 'Confirm Password',
			},
		],
	},
};

export default FieldConfigs;
export type { FieldConfig, FormType, Name, Fields };
