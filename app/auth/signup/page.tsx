"use client"
import { Button } from '@/components/atoms/button'
import { Checkbox } from '@/components/atoms/checkbox'
import AuthHeader from '@/components/molecules/AuthHeader'
import LoginMethods from '@/components/molecules/LoginMethods'
import SignUpForm from '@/components/organisms/SignUpForm'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const SignUp = () => {
    const currentPath = usePathname()
    return (
        <main className='flex flex-col items-center w-full space-y-5 '>
            {/* HEADER  */}
            <AuthHeader
                title='Get started absoluetly free.'
                subTitle='Join us and explore more!.'
            />

            {/* LOGIN METHODS  */}
            <LoginMethods />

            {/* FORM  */}
            <SignUpForm />





        </main>
    )
}

export default SignUp