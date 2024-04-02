"use server"
import { signOut } from '@/auth'
import React from 'react'

export const LogoutButton = async () => {
    return (
        <div>
            <form action={async () => {
                "use server"

                await signOut()
            }}>
                <button>
                    Sign out
                </button>
            </form>
        </div>
    )
}
