"use client"
import { mockQuizData } from '@/actions/quiz'
import { Button } from '@/components/atoms/button'
import { CarouselApi } from '@/components/atoms/carousel'
import { QuestionStatGrid } from '@/components/quiz/QuestionStatGrid'
import { Question, QuizCards } from '@/components/quiz/QuizCard'
import { Clock } from 'lucide-react'
import React, { useEffect, useState } from 'react'

interface IndieQuizProps {
    params: { quizid: string }
}

const IndieQuiz = (
    {
        params
    }: IndieQuizProps
) => {

    const [api, setApi] = React.useState<CarouselApi>()

    const [questions, setQuestions] = useState<Question[] | undefined>(undefined)
    const fetchQuestions = async () => {
        const response = await mockQuizData()
        setQuestions(response.data)
    }

    useEffect(() => {
        fetchQuestions()
    }, [])


    return (
        <section className='flex items-start gap-10 justify-between  mt-5'>
            {/* LEFT  */}
            <div className='w-9/12 flex flex-col gap-5'>
                {questions && (
                    <QuizCards
                        data={questions}
                        api={api}
                        setApi={setApi}
                    />
                )}

            </div>



            {/* RIGHT  */}
            <div className='w-2/12 border-l-2 pl-4 flex flex-col gap-10'>
                {/* TIMER  */}
                <div className='flex items-center justify-start gap-2'>
                    <Clock />
                    <p className='text-lg'>12:00</p>
                </div>

                {questions && (<QuestionStatGrid data={questions} api={api} />)}

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