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
        <main className=' w-full p-2'>
            <h2 className='text-[#3d4e61] font-bold text-3xl'>Set {params.quizid}</h2>

            <section className='w-full'>
                {children}
            </section>
        </main>
    )
}

export default IndiQuizLayout