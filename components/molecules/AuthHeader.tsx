import React from 'react'

type AuthHeaderProps = {
    title: string
    subTitle: string
}


const AuthHeader = ({
    title,
    subTitle
}: AuthHeaderProps) => {
    return (
        <div className='flex flex-col items-start gap-1 w-full'>
            <h3 className='text-gray-800 text-2xl font-semibold'>{title}</h3>
            <p className='text-gray-500'>{subTitle}</p>
        </div>
    )
}

export default AuthHeader