"use client"
import { Button } from '@/components/atoms/button'
import { useRouter } from 'next/navigation'
import React from 'react'

const SignIn = () => {
    const router = useRouter()
    return (
        <main className='flex flex-col space-y-20'>
            <h1>SignIn</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui minima esse, illum itaque tempore at reiciendis saepe quos exercitationem excepturi!</p>
            <div>
                <Button onClick={() => router.push("/dashboard")}>Login</Button>
            </div>
        </main>
    )
}

export default SignIn