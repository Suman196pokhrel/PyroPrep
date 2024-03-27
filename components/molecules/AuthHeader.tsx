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
        <div className='flex flex-col items-start gap-2 w-full'>
            <h3 className='text-[#212B36] text-2xl font-semibold'>{title}</h3>
            <p className='text-[#637381]'>{subTitle}</p>
        </div>
    )
}

export default AuthHeader