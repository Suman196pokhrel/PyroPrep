"use client"
import { CardWrapper } from '@/components/auth/CardWrapper'
import { PropagateLoader } from "react-spinners"
import React, { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { newVerification } from '@/actions/new-verification'
import { FormSuccess } from '@/components/FormSuccess'
import { FormError } from '@/components/FormError'

export const NewVerificationPage = () => {
    const searchParams = useSearchParams()
    const token = searchParams.get("token")
    const [error, setError] = useState<string | undefined>()
    const [success, setSuccess] = useState<string | undefined>()


    const onSubmit = useCallback(() => {
        if (success || error) return;

        // CHECK IF TOKEN HAS EXPIRE 
        if (!token) {
            setError("Missing token")
            return
        }

        newVerification(token)
            .then((data) => {
                setSuccess(data.success);
                setError(data.error);
            })
            .catch(() => {
                setError("Something went wrong!");
            })
    }, [token, success, error]);




    useEffect(() => {
        onSubmit()
    }, [onSubmit])


    return (
        <CardWrapper
            headerLabel='Confirming your verification'
            headerSubLabel='one time verification'
            backButtonLabel='Back to sign in'
            backButtonHref='/signin'
        >

            <div className='flex items-center w-full justify-center py-5'>
                {!success && !error && (
                    <PropagateLoader color="#2eb82e" className='w-10 h-10' />
                )}
                <FormSuccess message={success} />
                {!success && (
                    <FormError message={error} />
                )}
            </div>
        </CardWrapper >
    )
}


export default NewVerificationPage