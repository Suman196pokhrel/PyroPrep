import Link from 'next/link'
import React from 'react'

interface BackButtonProps {
    backButtonHref: string
    backButtonLabel: string
}

export const BackButton = ({ backButtonHref, backButtonLabel }: BackButtonProps) => {
    return (
        <div className='flex w-full justify-center pt-6'>
            <Link href={`${backButtonHref}`} className='text-[#229a16]'>
                {backButtonLabel}
            </Link>
        </div >
    )
}
