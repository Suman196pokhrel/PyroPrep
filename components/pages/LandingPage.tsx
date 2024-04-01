"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { Button } from '../atoms/button'
import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'
import LoginButton from '../auth/LoginButton'


const font = Poppins({
    subsets: ["latin"],
    weight: ["600"]
})

const LandingPage = () => {

    const router = useRouter()
    return (
        <main className='flex flex-col min-h-screen items-center justify-center gap-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-400 to-green-800'>
            <div className='space-y-6 flex flex-col items-center justify-center'>
                <h1 className={cn('text-6xl font-semibold text-white drop-shadow-md', font.className)}>
                    🔐 Auth
                </h1>
                <p className='text-white text-lg'>
                    A simple authentication service.
                </p>
                <div>
                    <LoginButton>
                        <Button variant={"secondary"} size={"lg"}>
                            Sign in
                        </Button>
                    </LoginButton>
                </div>
            </div>

        </main>
    )
}

export default LandingPage