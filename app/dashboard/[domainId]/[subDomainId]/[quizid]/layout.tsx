import React from 'react'



type IndiQuizLayoutProps = {
    children: React.ReactNode
}


const IndiQuizLayout = ({
    children
}: IndiQuizLayoutProps) => {
    return (
        <div className='border-2 border-red-600'>
            <h2>Inside indi quiz layout</h2>
            <div>
                {children}
            </div>
        </div>
    )
}

export default IndiQuizLayout