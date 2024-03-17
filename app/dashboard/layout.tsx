import React from 'react'

type DashboardProps = {
    children: React.ReactNode
}

const DashboardLayout = (
    {
        children
    }: DashboardProps
) => {
    return (
        <main className='min-h-screen w-full'>
            {/* NAVBAR  */}



            {/* HERO SECTION  */}



            {/* CONTENTS  */}
            {children}


        </main>
    )
}

export default DashboardLayout