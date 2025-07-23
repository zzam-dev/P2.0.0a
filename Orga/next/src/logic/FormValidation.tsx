import { Name } from '@/configs/FormConfigs';

//Make validation logic returables objects
const validations: {
	[key in Name]: (arg: string) => string;
} = {
	username: (value: string): string => {
		return value === '' ? 'ridiculous' : '';
	},
	email: (value: string): string => {
		return value === '' ? 'ridiculous' : '';
	},
	password: (value: string): string => {
		return value === '' ? 'ridiculous' : '';
	},
	cpassword: (value: string): string => {
		return value === '' ? 'ridiculous' : '';
	},
	fname: (value: string): string => {
		return value === '' ? 'ridiculous' : '';
	},
	lname: (value: string): string => {
		return value === '' ? 'ridiculous' : '';
	},
	text: (value: string): string => {
		return value === '' ? 'ridiculous' : '';
	},
};

const validator = (name: Name, value: string): string => {
	return validations[name](value);
};

export default validator;
