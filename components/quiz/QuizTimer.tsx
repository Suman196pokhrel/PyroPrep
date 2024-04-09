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
        // Check if timeLeft is already 0, clear interval immediately
        if (timeLeft <= 0) {
            return () => { };
        }

        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                const newTime = prevTime - 1;
                // If newTime is less than or equal to 0, clear interval
                if (newTime <= 0) {
                    clearInterval(timer);
                }
                return newTime;
            });
        }, 1000);

        // Clear interval when component unmounts
        return () => clearInterval(timer);
    }, [timeLeft]);

    const formatTime = (seconds: number) => {
        if (seconds <= 0) {
            return '00:00';
        }

        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(remainingSeconds).padStart(2, '0');
        return `${formattedMinutes}:${formattedSeconds}`;
    };



    return (
        <div className='flex items-center justify-start gap-2'>
            <Clock className={` ${timeLeft < 60 ? 'text-red-600' : ''}`} />
            <p className={`text-lg ${timeLeft < 60 ? 'text-red-600 font-semibold' : ''}`}>
                {formatTime(timeLeft)}
            </p>
        </div>

    );
};