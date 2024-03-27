"use client"
import { Button } from '@/components/atoms/button'
import AuthHeader from '@/components/molecules/AuthHeader'
import LoginMethods from '@/components/molecules/LoginMethods'
import { useRouter } from 'next/navigation'
import React from 'react'

const SignIn = () => {
    const router = useRouter()
    return (
        <main className='flex flex-col items-center w-full '>
            {/* HEADER  */}
            <AuthHeader
                title='Sign in to Pyroprep'
                subTitle='Enter your details'
            />

            {/* LOGIN METHODS  */}
            <LoginMethods />

            {/* FORM  */}
            <div>

            </div>


            {/* LOGIN OPTIONS  */}
            <div>

            </div>

            <Button className='bg-[#00AB55] text-2xl font-semibold w-full h-20'>Login</Button>

        </main>
    )
}

export default SignIn