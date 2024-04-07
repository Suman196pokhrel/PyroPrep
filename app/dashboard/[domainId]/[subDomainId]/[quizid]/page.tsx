import React from 'react'

interface IndieQuizProps {
    params: { quizid: string }
}

const IndieQuiz = (
    {
        params
    }: IndieQuizProps
) => {
    return (
        <section className='flex items-center gap-20 justify-between border-2 border-red-400'>
            {/* LEFT  */}
            <div className='border-2 border-blue-400 w-9/12 '>
                LEFT
            </div>



            {/* RIGHT  */}
            <div className='border-2 border-yellow-400 w-3/12'>
                RIGHT
            </div>
        </section>
    )
}

export default IndieQuiz