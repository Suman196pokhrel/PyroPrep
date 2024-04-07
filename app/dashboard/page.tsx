import { auth } from '@/auth'
import DashCarousel from '@/components/molecules/DashCarousel'
import DashBanner from '@/components/organisms/DashBanner'
import DashboardPage from '@/components/pages/DashboardPage'
import React from 'react'

const Dashboard = async () => {
    const session = await auth()
    return (
        <main className='w-full flex flex-col gap-10'>

            {/* HERO SECTION  */}
            <div className='gap-5 hidden xl:flex  items-center'>
                <DashBanner />
                <DashCarousel />

            </div>
            {/* {JSON.stringify(session)} */}
            <DashboardPage />
        </main>
    )
}

export default Dashboard