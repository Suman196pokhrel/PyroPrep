"use client"
import { CardWrapper } from '@/components/auth/CardWrapper'
import AuthHeader from '@/components/molecules/AuthHeader'
import LoginMethods from '@/components/molecules/LoginMethods'
import SignUpForm from '@/components/auth/SignUpForm'
import { usePathname } from 'next/navigation'
import React from 'react'

const SignUp = () => {
    return (


        < CardWrapper
            headerLabel='Get started absoluetly free.'
            headerSubLabel='Join us and explore more!.'
            backButtonLabel="Already have an account?"
            backButtonHref='/signin'
            showSocial
        >



            {/* FORM  */}
            <SignUpForm />

        </CardWrapper>





    )
}

export default SignUp