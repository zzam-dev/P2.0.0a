'use client';
import {
	MouseEventHandler,
	ReactNode,
	useState,
} from 'react';
import { Popup } from './wrappers';

type Props = {
	fields: string[];
	url: string[];
};

const MainNavBar = ({ fields, url }: Props): ReactNode => {
	const [nav, setNav] = useState('');
	const navClick =
		(selected: string): MouseEventHandler<HTMLDivElement> =>
		() => {
			setNav(selected);
			console.log(nav);
		};
	return (
		<Popup
			className='
			border-1
				rounded-b-none
				fixed
				w-full
				h-14
				z-10
				max-md:bottom-0
				min-md:top-0
				min-md:max-w-sm
				max-md:max-w-xs
				p-2
				gap-2
			'
		>
			{fields.map((field, idx) => (
				<div
					className='border-1
						w-full
						flex
						items-center
						justify-center
						rounded-xl
						hover:bg-blue-500/20'
					key={field}
					onClick={navClick(field)}
				>
					<a href={url[idx]}>{field}</a>
				</div>
			))}
		</Popup>
	);
};

export { MainNavBar };
