"use client"
import { CardWrapper } from '@/components/auth/CardWrapper'
import { PropagateLoader } from "react-spinners"
import React from 'react'

export const NewVerificationPage = () => {
    return (
        <CardWrapper
            headerLabel='Confirming your verification'
            headerSubLabel='one time verification'
            backButtonLabel='Back to sign in'
            backButtonHref='/signin'
        >

            <div className='flex items-center w-full justify-center py-5'>
                <PropagateLoader color="#2eb82e" className='w-10 h-10' />
            </div>
        </CardWrapper >
    )
}


export default NewVerificationPage