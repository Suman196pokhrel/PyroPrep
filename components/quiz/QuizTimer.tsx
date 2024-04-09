"use client"
import { Clock } from 'lucide-react'
import React, { useEffect, useMemo, useState } from 'react'

interface QuizTimerProps {
    quizTime: number
    setQuizTimer: React.Dispatch<React.SetStateAction<number | undefined>>
}


export const QuizTimer = ({ quizTime }: QuizTimerProps) => {

    const [timeLeft, setTimeLeft] = useState(quizTime);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => prevTime - 1);
        }, 1000);

        // Clear interval when component unmounts or when timeLeft becomes 0
        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds}`;
    };



    return (
        <div className='flex items-center justify-start gap-2'>
            <Clock />
            <p className='text-lg'>{formatTime(timeLeft)}</p>
        </div>
    );
};