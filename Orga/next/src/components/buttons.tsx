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
};

const MainButton = ({ label, classNameI }: Props): ReactNode => (
	<button
		className={`
        bg-blue-700
        w-full
        p-2
        rounded
        text-white
        text-lg
        shadow-blue-500/80
        hover:shadow-[0_0_10px]
        hover:bg-blue-600
        transition
        duration-300
        select-none
        cursor-pointer
        ${classNameI}
    `}
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
			.to(containerRef.current, { opacity: 0, duration: 0 })
			.to(containerRef.current, { opacity: 0.2, duration: 0.25 })
			.to(containerRef.current, { opacity: 1, duration: 0.4 });
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
        cursor-pointer
        flex
        overflow-hidden
        rounded-lg
        select-none
      `}
			tabIndex={0}
			onKeyDownCapture={handleClick}
			onClick={handleClick}
		>
			<div
				className={`
          w-1/2 h-full
          flex items-center justify-center
          transition-transform duration-400 ease-out
          text-base font-bold text-white/50
          translate-x-0
          ${state ? 'translate-x-0' : 'translate-x-full'}
        `}
				ref={containerRef}
			>
				{switchII}
			</div>

			<div
				className={`
          relative
          w-1/2 h-full
          bg-white
          rounded
          shadow-[0_0_15px_#fffa]
          text-black
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

export { MainButton, SwitchButton };
