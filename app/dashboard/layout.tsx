import DashBanner from '@/components/molecules/DashBanner'
import DashCarousel from '@/components/molecules/DashCarousel'
import DashNavbar from '@/components/molecules/DashNavbar'
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
        <main className='min-h-screen flex flex-col items-center'>
            {/* NAVBAR  */}
            <DashNavbar />

            <section className='flex flex-col items-center mt-10 gap-10 w-2/3 '>

                {/* HERO SECTION  */}
                <div className='flex gap-5  items-center'>
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