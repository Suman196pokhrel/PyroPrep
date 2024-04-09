import { Clock } from 'lucide-react'
import React from 'react'

interface QuizTimerProps {
    quizTime: number
}


export const QuizTimer = ({
    quizTime
}: QuizTimerProps) => {
    return (
        <div className='flex items-center justify-start gap-2'>
            <Clock />
            <p className='text-lg'>{quizTime}</p>
        </div>
    )
}
