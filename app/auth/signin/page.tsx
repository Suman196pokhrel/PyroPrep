"use client"
import { Button } from '@/components/atoms/button'
import AuthHeader from '@/components/molecules/AuthHeader'
import LoginMethods from '@/components/molecules/LoginMethods'
import SigninForm from '@/components/molecules/SigninForm'
import { useRouter } from 'next/navigation'
import React from 'react'

const SignIn = () => {
    const router = useRouter()
    return (
        <main className='flex flex-col items-center w-full space-y-5 '>
            {/* HEADER  */}
            <AuthHeader
                title='Sign in to Pyroprep'
                subTitle='Enter your details'
            />

            {/* LOGIN METHODS  */}
            <LoginMethods />

            {/* FORM  */}
            <SigninForm />


            {/* LOGIN OPTIONS  */}
            <div>

            </div>


        </main>
    )
}

export default SignIn