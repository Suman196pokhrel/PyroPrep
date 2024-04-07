import { Button } from '@/components/atoms/button'
import { QuestionStatGrid } from '@/components/quiz/QuestionStatGrid'
import { QuizCard } from '@/components/quiz/QuizCard'
import { Clock } from 'lucide-react'
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
        <section className='flex items-start gap-10 justify-between  mt-5'>
            {/* LEFT  */}
            <div className='w-9/12 flex flex-col gap-5'>
                <QuizCard
                    data={{ id: "1", title: "Which is the best linux distribution for web developers?", options: ["Ubuntu", "Arch Linux", "Debian", "Pop Os"] }}
                />

                {/* CONTROLS  */}
                <div className='flex items-center justify-center gap-36 w-full'>
                    <Button variant={"pyroPrimaryOutline"} className='p-7 text-base'>
                        Previous
                    </Button>
                    <Button variant={"pyroPrimaryOutline"} className='p-7 text-base'>
                        Next
                    </Button>
                </div>
            </div>



            {/* RIGHT  */}
            <div className='w-2/12 border-l-2 pl-4 flex flex-col gap-10'>
                {/* TIMER  */}
                <div className='flex items-center justify-start gap-2'>

                    <Clock />
                    <p className='text-lg'>12:00</p>
                </div>

                <QuestionStatGrid />

                {/* CONTROL GROUP  */}
                <div className='flex flex-col gap-5'>
                    <Button variant={"pyroPrimary"} className='py-6 text-base'>Submit </Button>
                    <Button variant={"destructive"} className='py-6 text-base bg-red-500'>Cancel </Button>
                </div>

            </div>
        </section>
    )
}

export default IndieQuiz