import { ReactNode, useState } from 'react';
import { Fields } from '@/configs/FormConfigs';
import validator from '@/logic/FormValidation';

const MainInput = ({
	type,
	name,
	className,
	placeholder,
	autoComplete,
	style,
}: Fields): ReactNode => {
	const [inputValue, setInputValue] = useState('');
	const [blur, setBlur] = useState(false);
	const handle = () => {
		setBlur(true);
	};
	return (
		<>
			<input
				type={type}
				name={name}
				placeholder={placeholder}
				autoComplete={autoComplete}
				style={style}
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				onBlur={handle}
				className={`
        w-full
        bg-black/35
        text-white
        px-4
        py-2
        outline-none
        rounded-md
        rounded-b
        border-b-3
        border-b-blue-500
        placeholder:text-white/80
        focus:bg-blue-500/90
        shadow-blue-500
        focus:shadow-[0_0_15px]
        focus:border-transparent
        hover:border-transparent
        transition
        duration-300
        select-none
        input-animation
        
        ${className}
        `}
			/>
			<p className='font-mono px-4 py-0.5 text-xs text-bold -my-4 text-red-500 text-shadow-xs min-h-4'>
				{blur ? validator(name, inputValue) : ''}
			</p>
		</>
	);
};

export { MainInput };
