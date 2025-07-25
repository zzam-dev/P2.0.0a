'use client';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { Popup } from './wrappers';
import Link from 'next/link';

type Fields = {
	name: string;
	url: string;
};

type Props = {
	fields: Fields[];
	classNameI?: string;
	classNameII?: string;
};

const MainNavBar = ({
	fields,
	classNameI,
	classNameII,
}: Props): ReactNode => {
	const pathname = usePathname();

	return (
		<Popup
			className={`
				border-1
				max-md:rounded-b-none
				min-md:rounded-t-none
				fixed
				w-full
				h-12
				z-10
				max-md:bottom-0
				min-md:top-0
				min-md:max-w-sm
				max-md:max-w-xs
				p-2
				gap-4
				bg-slate-900/90
				text-white
				backdrop-blur-md
				${classNameI || ''}
			`}
		>
			{fields.map((field, idx) => {
				const isActive = pathname === field.url;

				return (
					<Link
						href={field.url}
						key={idx}
						className={`
							w-full
							flex
							items-center
							justify-center
							rounded-xl
							select-none
							transition-all duration-300 ease-out
							${
								isActive ?
									'bg-blue-600 -m-1 ring-1 ring-blue-400 cursor-default pointer-events-none'
								:	'hover:bg-blue-400/50 cursor-pointer'
							}
							${classNameII || ''}
						`}
					>
						{field.name}
					</Link>
				);
			})}
		</Popup>
	);
};

export { MainNavBar };
