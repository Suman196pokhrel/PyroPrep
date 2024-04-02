import { auth } from '@/auth'
import DashboardPage from '@/components/pages/DashboardPage'
import React from 'react'

const Dashboard = async () => {
    const session = await auth()
    return (
        <main className='w-full'>
            {JSON.stringify(session)}
            <DashboardPage />
        </main>
    )
}

export default Dashboard