import React from 'react'



type IndiQuizLayoutProps = {
    children: React.ReactNode
    params: {
        quizid: string
    }

}


const IndiQuizLayout = ({
    children,
    params,
}: IndiQuizLayoutProps) => {
    return (
        <div className='border-2 border-red-600 w-full min-h-screen'>
            <h2>Inside indi quiz layout</h2>
            <p>{params.quizid}</p>
            <div>
                {children}
            </div>
        </div>
    )
}

export default IndiQuizLayout