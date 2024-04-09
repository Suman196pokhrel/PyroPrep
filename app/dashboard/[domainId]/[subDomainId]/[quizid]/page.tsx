"use client"
import { mockQuizData } from '@/actions/quiz'
import { Button } from '@/components/atoms/button'
import { CarouselApi } from '@/components/atoms/carousel'
import { QuestionStatGrid } from '@/components/quiz/QuestionStatGrid'
import { Question, QuizCards } from '@/components/quiz/QuizCard'
import { QuizTimer } from '@/components/quiz/QuizTimer'
import { Clock } from 'lucide-react'
import React, { useEffect, useState } from 'react'



interface IndieQuizProps {
    params: { quizid: string }
}

export interface QuestionState {
    [questionId: string]: string | null
}

const IndieQuiz = (
    {
        params
    }: IndieQuizProps
) => {

    const [api, setApi] = React.useState<CarouselApi>()
    const [quizFormState, setQuizFormState] = useState<QuestionState>({})
    const [quizTimer, setQuizTimer] = useState<number>()
    const [questions, setQuestions] = useState<Question[] | undefined>(undefined)



    const handleOptionSelect = (questionId: string, selectedOption: string) => {
        setQuizFormState((prevState) => ({
            ...prevState,
            [questionId]: selectedOption,
        }))
    }


    const fetchQuestions = async () => {
        const response = await mockQuizData()
        setQuestions(response.quiz.data)
        setQuizTimer(response.quiz.time)
    }

    useEffect(() => {
        fetchQuestions()
    }, [])


    useEffect(() => {
        console.log(quizFormState)
    }, [quizFormState])


    return (
        <section className='flex items-start gap-10 justify-between  mt-5'>
            {/* QUIZ CARDS  */}
            <div className='w-9/12 flex flex-col gap-5'>
                {questions && (
                    <QuizCards
                        data={questions}
                        api={api}
                        setApi={setApi}
                        handleOptionSelect={handleOptionSelect}
                    />
                )}

            </div>



            {/* QUIZ STATUS GRID  */}
            <div className='w-2/12 border-l-2 pl-4 flex flex-col gap-10'>
                {/* TIMER  */}
                {quizTimer && (
                    <QuizTimer quizTime={quizTimer} setQuizTimer={setQuizTimer} />
                )}

                {questions && (<QuestionStatGrid data={questions} api={api} quizFormState={quizFormState} />)}

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