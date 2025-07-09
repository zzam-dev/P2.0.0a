import { ReactNode } from "react"


type Props = {
    label?: string
    className?: string
}

const MainButton = ({
    label,
    className
}:Props):ReactNode => (
    <button className={`
        bg-blue-700
        w-full
        p-2
        rounded
        text-white
        text-lg
        shadow-blue-600/80
        hover:shadow-[0_0_10px]
        transition
        duration-300
        ${className}
    `}>{label}</button>
)

export { MainButton }