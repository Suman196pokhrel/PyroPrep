"use client"
import { CardWrapper } from '@/components/auth/CardWrapper'
import SigninForm from '@/components/organisms/SigninForm'
import React from 'react'

const SignIn = () => {
    return (
        < CardWrapper
            headerLabel='Sign in to pyroprep'
            headerSubLabel='Enter your details'
            backButtonLabel="Don't have an account?"
            backButtonHref='/signup'
            showSocial
        >
            <SigninForm />
        </CardWrapper >

    )
}

export default SignIn