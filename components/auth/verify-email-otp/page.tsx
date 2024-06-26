'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
// import { ring2 } from "ldrs"
// import { motion } from "framer-motion"
// import { animatePopUpWithDelay, animatePopup, animateSlideUp } from "@/lib/animations/topLevel"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from '@/components/atoms/card';
import OtpInput from 'react-otp-input';
import { Progress } from '@/components/atoms/progress';
import { Button } from '@/components/atoms/button';
import AuthHeader from '@/components/molecules/AuthHeader';

const VerifyEmailOtpPage = () => {
    const [otpValue, setOtpValue] = useState('');
    const [isResending, setIsResending] = useState(false);
    const [remainingTime, setRemainingTime] = useState(0);
    const router = useRouter();

    const handleOtpChange = (val: string) => {
        setOtpValue(val);
    };

    const handleResendOtp = async () => {
        setIsResending(true);
        setRemainingTime(60);

        const timer = setInterval(() => {
            setRemainingTime((prev) => prev - 1);
        }, 1000);

        setTimeout(() => {
            clearInterval(timer);
            setIsResending(false);
        }, 60000);
    };

    const handleSubmitOtp = async () => {
        if (otpValue.trim() !== '') {
        }
    };

    return (
        <section>
            <Card>
                <CardHeader className='text-xl font-bold'>
                    <AuthHeader

                        title='Verify your email'
                        subTitle='An otp has been sent to your email, enter the 6 digit OTP in the
                        following fields.'
                    />

                </CardHeader>

                <CardContent className=' my-5'>
                    <OtpInput
                        value={otpValue}
                        onChange={(val) => handleOtpChange(val)}
                        numInputs={6}
                        renderSeparator={<span> - </span>}
                        renderInput={(props, index) => (
                            <div className='flex items-center justify-center mx-4  p-3 border-2   rounded-lg '>
                                <input
                                    {...props}
                                    className=' outline-none focus:outline-none text-2xl w-fulll h-full'
                                />
                            </div>
                        )}
                    />
                </CardContent>

                <CardFooter className='text-slate-500 text-sm w-full flex items-start justify-center flex-col gap-10'>
                    <Button
                        className='text-xl w-full h-16'
                        variant={"pyroPrimary"}
                        onClick={handleSubmitOtp}
                    >
                        Submit
                    </Button>
                    {isResending ? (
                        <div className='flex flex-col gap-5 w-full items-center'>
                            <Progress
                                value={((60 - remainingTime) / 60) * 100}
                                className=' h-2 '
                            />
                            <p>
                                Resend Otp afte{' '}
                                <p className='text-black font-bold inline'> {remainingTime}</p>{' '}
                                seconds
                            </p>
                        </div>
                    ) : (
                        <div>
                            {' '}
                            Didnt&apos;t receive the OTP ?{' '}
                            <span
                                onClick={handleResendOtp}
                                className='text-slate-700 font-semibold hover:underline cursor-pointer'
                            >
                                &nbsp; Resend OTP{' '}
                            </span>
                        </div>
                    )}
                </CardFooter>
            </Card>
        </section>
    );
};

export default VerifyEmailOtpPage;