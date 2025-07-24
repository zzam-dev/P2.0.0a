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
			bg-black/20 
            rounded-2xl
            backdrop-blur-2xl
            flex
            shadow-black/30
            shadow-[1px_5px_10px]
            ${className}
        `}
	>
		{children}
	</div>
);

const Hwrapper = ({ children }: Props): ReactNode => (
	<div className='w-full'>{children}</div>
);

export { MainWrapper, Popup, Hwrapper };
