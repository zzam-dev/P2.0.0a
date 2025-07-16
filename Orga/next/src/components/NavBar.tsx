import { Popup } from './wrappers';

const NavList: string[] = ['Home', 'Something', 'Login'];

const MainNavBar = () => {
	return (
		<Popup
			className='
        fixed
        h-12
        z-10
        max-md:bottom-0
        min-md:top-0
        bg-black/30
        p-1
		gap-2
      '
		>
			{NavList.map((label) => (
				<div
					className='border-1 w-full flex items-center justify-center rounded-xl'
					key={label}
				>
					{label}
				</div>
			))}
		</Popup>
	);
};

export { MainNavBar };
