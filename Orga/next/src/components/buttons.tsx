'use client';
import { ReactNode, useRef } from 'react';
import { gsap } from 'gsap';

type Props = {
	label?: string;
	classNameI?: string;
	classNameII?: string;
	switchI?: string;
	switchII?: string;
	state?: true | false;
	setState?: (newstate: boolean) => void;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
	size?: number;
	type?: 'submit';
};

const MainButton = ({
	label,
	classNameI,
	type,
}: Props): ReactNode => (
	<button
		className={`
        bg-blue-700
        w-full
        p-2
        rounded-xl
        text-white
        text-xl
        shadow-blue-500/80
        hover:shadow-[0_0_10px]
        hover:bg-blue-600
		focus:outline-0
        transition
        duration-300
        select-none
        cursor-pointer
        ${classNameI}
    `}
		type={type}
	>
		{label}
	</button>
);

const SwitchButton = ({
	switchI,
	switchII,
	state,
	setState,
}: Props): ReactNode => {
	const containerRef = useRef<HTMLDivElement>(null);
	const fadeTween = useRef<gsap.core.Timeline | null>(null);

	const handleClick = () => {
		if (setState) {
			setState(!state);
		}
		if (!containerRef.current) return;

		// If a previous tween is running — kill it instantly
		fadeTween.current?.kill();

		// Create a new fade-out and fade-in timeline
		fadeTween.current = gsap
			.timeline()
			.to(containerRef.current, {
				opacity: 0,
				duration: 0,
			})
			.to(containerRef.current, {
				opacity: 0,
				duration: 0.3,
			})
			.to(containerRef.current, {
				opacity: 1,
				duration: 0.5,
			});
	};

	return (
		<div
			className={`
        z-10
        top-5
        p-1
        bg-blue-800
        shadow-black
        inset-shadow-lg
        flex
        overflow-hidden
        rounded-xl
        select-none
		text-lg
      `}
		>
			<div
				className={`
          w-1/2 h-full
          flex items-center justify-center
          transition-transform duration-400 ease-out
		  font-bold text-white/60
          translate-x-0
		  cursor-pointer
          ${state ? 'translate-x-0' : 'translate-x-full'}
        `}
				ref={containerRef}
				tabIndex={0} //add a pressable toggle
				onClick={handleClick}
			>
				{switchII}
			</div>

			<div
				className={`
          relative
          w-1/2 h-full
          bg-white
          rounded-lg
          shadow-[0_0_15px_#fffa]
          text-black
		  text-xl
          flex items-center justify-center
          font-bold tracking-tighter
          transition-transform duration-400 ease-out
          ${state ? 'translate-x-0' : '-translate-x-full'}
        `}
			>
				{switchI}
			</div>
		</div>
	);
};

const NavButton = ({
	classNameI,
	onClick,
}: Props): ReactNode => {
	return (
		<div
			className={`
			rounded-full
			w-full
			h-full
			${classNameI}
			`}
			onClick={onClick}
		/>
	);
};

export { MainButton, SwitchButton, NavButton };
