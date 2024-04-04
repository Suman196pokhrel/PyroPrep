import DashBanner from '@/components/organisms/DashBanner'
import DashCarousel from '@/components/molecules/DashCarousel'
import DashNavbar from '@/components/molecules/DashNavbar'
import React from 'react'
import DashMobileNavbar from '@/components/molecules/DashMobileNavbar'
import { SessionProvider } from 'next-auth/react'

type DashboardProps = {
    children: React.ReactNode
}

const DashboardLayout = (
    {
        children
    }: DashboardProps
) => {




    return (
        <main className='min-h-screen flex flex-col items-center pb-10'>
            {/* DESKTOP- NAVBAR  */}
            <DashNavbar />

            {/* MOVILE- NAVBAR  */}
            <DashMobileNavbar />

            <section className='flex flex-col items-center mt-10 gap-10 w-5/6 '>

                {/* HERO SECTION  */}
                <div className='gap-5 hidden xl:flex  items-center'>
                    <DashBanner />
                    <DashCarousel />

                </div>

                {/* CONTENTS  */}
                {children}

            </section>

        </main>
    )
}

export default DashboardLayout