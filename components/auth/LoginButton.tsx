"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { MoonLoader } from 'react-spinners'

interface LoginButtonProps {
    children: React.ReactNode,
    mode?: "modal" | "redirect",
    asChild?: boolean
}

const LoginButton = ({
    children,
    mode = "redirect",
    asChild
}: LoginButtonProps) => {

    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const handleClick = async () => {
        setIsLoading(true); // Set loading state to true before navigation
        try {
            await router.push("/signin"); // Perform navigation
        } catch (error) {
            console.error("Error during navigation:", error); // Handle errors
        } finally {
            // setIsLoading(false); // Set loading state to false after navigation (even on errors)
        }
    };

    if (mode == "modal") {
        return (
            <span>
                TODO: Implement modal
            </span>
        )
    }

    return (
        <span className=' cursor-pointer flex items-center gap-2' onClick={handleClick}>
            <p><MoonLoader size={25} speedMultiplier={0.8} loading={isLoading} /></p>
            {children}
        </span>
    )
}

export default LoginButton