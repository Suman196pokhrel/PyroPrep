import { QuizCard } from '@/components/quiz/QuizCard'
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
        <section className='flex items-start gap-20 justify-between  mt-5'>
            {/* LEFT  */}
            <QuizCard
                data={{ id: "1", title: "Which is the best linux distribution for web developers?", options: ["Ubuntu", "Arch Linux", "Debian", "Pop Os"] }}
            />



            {/* RIGHT  */}
            <div className='border-2 border-yellow-400 w-3/12'>
                RIGHT
            </div>
        </section>
    )
}

export default IndieQuiz