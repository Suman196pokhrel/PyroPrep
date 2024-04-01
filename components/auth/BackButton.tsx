import Link from 'next/link'
import React from 'react'
import { Button } from '../atoms/button'

interface BackButtonProps {
    backButtonHref: string
    backButtonLabel: string
}

export const BackButton = ({ backButtonHref, backButtonLabel }: BackButtonProps) => {
    return (
        <Button variant={"link"} size={"default"} asChild className='text-[#229a16] pt-10 w-full flex justify-center'>
            <Link href={`${backButtonHref}`}>
                {backButtonLabel}
            </Link>
        </Button>
    )
}
