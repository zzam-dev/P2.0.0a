import { ReactNode } from 'react';

type Props = {
	children?: ReactNode;
	className?: string;
};

const MainWrapper = ({ children }: Props): ReactNode => {
	return (
		<div
			className='
            w-full
            h-lvh
            flex
            justify-center
            items-center
        '
		>
			{children}
		</div>
	);
};

const Popup = ({ className, children }: Props) => (
	<div
		className={`
            w-full
            max-md:max-w-xs
            min-md:max-w-sm
            rounded-xl
            backdrop-blur-2xl
            border-white/60
            border-1
            flex
            justify-center
            shadow-black/30
            shadow-[1px_5px_30px]
            ${className}
        `}
	>
		{children}
	</div>
);

export { MainWrapper, Popup };
