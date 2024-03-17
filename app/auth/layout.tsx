import React from 'react'

type AuthLayoutProps = {
    children: React.ReactNode
}



const AuthLayout = (
    {
        children
    }: AuthLayoutProps
) => {
    return (
        <main>
            <h3>Inside AuthLayout</h3>
            {children}
        </main>
    )
}

export default AuthLayout