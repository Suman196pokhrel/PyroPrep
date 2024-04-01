import React from 'react'

type AuthHeaderProps = {
    label: string
    subLabel: string
}


export const Header = ({
    label,
    subLabel }: AuthHeaderProps) => {
    return (
        <div className='flex flex-col items-start gap-1 w-full'>
            <h3 className='text-gray-800 text-lg xl:text-2xl font-semibold'>{label}</h3>
            <p className='text-gray-500 text-sm xl:text-base'>{subLabel}</p>
        </div>
    )
}

