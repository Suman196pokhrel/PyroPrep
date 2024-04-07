import { Button } from '@/components/atoms/button'
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
            <div className='w-9/12 flex flex-col gap-5'>
                <QuizCard
                    data={{ id: "1", title: "Which is the best linux distribution for web developers?", options: ["Ubuntu", "Arch Linux", "Debian", "Pop Os"] }}
                />

                {/* CONTROLS  */}
                <div className='flex items-center justify-between px-5 w-full'>
                    <Button variant={"pyroPrimaryOutline"} className='p-7 text-base'>
                        Previous
                    </Button>
                    <Button variant={"pyroPrimaryOutline"} className='p-7 text-base'>
                        Next
                    </Button>
                </div>
            </div>



            {/* RIGHT  */}
            <div className='border-2 border-yellow-400 w-3/12'>
                RIGHT
            </div>
        </section>
    )
}

export default IndieQuiz