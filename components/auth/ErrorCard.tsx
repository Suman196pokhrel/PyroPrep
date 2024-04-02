import React from 'react'
import AuthHeader from '../molecules/AuthHeader'
import { BackButton } from './BackButton'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

export const ErrorCard = () => {
    return (
        <main>
            <div className='flex items-center gap-5'>
                <div className='flex items-center justify-center p-5 rounded-full bg-red-100'>
                    <ExclamationTriangleIcon className=' text-red-500 h-12 w-12' />
                </div>
                <AuthHeader
                    title='OOps! Something went wrong'
                    subTitle='lets start over'
                />
            </div>

            <BackButton
                backButtonLabel='Back to signin'
                backButtonHref='/signin'
            />
        </main>
    )
}
