import { FormEventHandler, ReactNode } from 'react';

import { MainInput } from '../components/input';
import {
	MainButton,
	SwitchButton,
} from '../components/buttons';
import { FieldConfig } from '@/configs/FormConfigs';

type Props = FieldConfig & {
	children?: ReactNode;
	className?: string;
	state?: boolean;
	setState?: (newstate: boolean) => void;
	onSubmit: FormEventHandler<HTMLFormElement>;
};

const MainForm = ({
	className,
	children,
	state,
	fields = [],
	onSubmit,
	setState,
}: Props) => {
	return (
		<div className='w-full m-5'>
			<form
				onSubmit={onSubmit}
				className={`
                ${className}
                `}
			>
				<SwitchButton
					switchI={state ? 'Login' : 'Register'}
					switchII={state ? 'Register' : 'Login'}
					state={state}
					setState={setState}
				/>
				{fields.map((field, idx) => (
					<MainInput
						key={`${field.name ?? idx}-${state ? 'login' : 'register'}`}
						type={field.type}
						name={field.name}
						placeholder={field.placeholder}
						autoComplete={field.autoComplete ?? 'off'}
						style={{ animationDelay: `${idx * 100}ms` }}
					/>
				))}
				<MainButton
					classNameI='z-10'
					type='submit'
					label={state ? 'Login!' : 'Register!'}
				/>
				{children}
			</form>
		</div>
	);
};

export { MainForm };
