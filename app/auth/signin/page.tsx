"use client"
import { Button } from '@/components/atoms/button'
import { Checkbox } from '@/components/atoms/checkbox'
import AuthHeader from '@/components/molecules/AuthHeader'
import LoginMethods from '@/components/molecules/LoginMethods'
import SigninForm from '@/components/organisms/SigninForm'
import Link from 'next/link'
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
            <div className='flex items-center justify-between w-full'>
                <div className='flex items-center gap-2 text-lg'>
                    <Checkbox
                        className=' w-7 h-7 text-white rounded-lg border-gray-300 data-[state=checked]:bg-[#229a16] data-[state=checked]:text-white '
                    />
                    <p>Remember me</p>
                </div>

                <Link href={"/auth/forgot-password"} className='text-[#229a16] font-semibold text-lg'>
                    Forgot password ?
                </Link>
            </div>


        </main>
    )
}

export default SignIn