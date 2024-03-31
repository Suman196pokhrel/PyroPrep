"use client"
import { getSession } from 'next-auth/react'
import React, { use, useEffect } from 'react'
import { useSessionStore } from './zustand/store'
import { usePathname, useRouter } from 'next/navigation'

type AuthGuardProps = {
    children: React.ReactNode
}

const DashAuthGuard = ({
    children
}: AuthGuardProps) => {

    const { user, setUser } = useSessionStore()
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        const CheckAndSetAuthStatus = async () => {

            // CHECK IF USER EXISTS IN SESSION
            const session = await getSession()
            if (session && session.user) {

                // CHECK IF ZUSTAND STATE IS ALREADY SET OR NOT 
                if (user?.email != session.user.email) {
                    const { name, email, image } = session.user
                    if (name && email && image) {
                        setUser({
                            name: name,
                            email: email,
                            image: image
                        })
                    }

                }

                // USER ALREADY IS AUTHENTICATED
                // DO NOTHING

            }

            console.log("SESSION INFO => ", session?.user?.email, pathname)
        }

        CheckAndSetAuthStatus()
    }, [pathname, setUser])


    // IF USER IS AUTHENTICATED 
    if (user?.email) {

        return (
            <div>
                <h1>Inside auth guard</h1>
                {children}
            </div>
        )
    }

    if (!user) {
        router.push("/auth/signin")
    }




}

export default DashAuthGuard