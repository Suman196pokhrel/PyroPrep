'use client';
import React, { useCallback, useEffect, useState, useTransition } from 'react';
import { Button } from '@/components/atoms/button';
import { Input } from '@/components/atoms/input';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/atoms/form';
import { useRouter, useSearchParams } from 'next/navigation';
import { NewPasswordSchema } from '@/schemas';
import { CardWrapper } from './CardWrapper';
import { FormError } from '../FormError';
import { FormSuccess } from '../FormSuccess';




export const NewPasswordForm = () => {
    const searchParams = useSearchParams()
    const token = searchParams.get("token")
    const [error, setError] = useState<string | undefined>()
    const [success, setSuccess] = useState<string | undefined>()
    const [isPending, startTransition] = useTransition()


    const form = useForm<z.infer<typeof NewPasswordSchema>>({
        resolver: zodResolver(NewPasswordSchema),
        defaultValues: {
            password: '',
        },
    });

    const onSubmit = useCallback(() => {


        console.log("VALUES =>", token)
    }, [token, success, error]);







    return (
        <CardWrapper
            headerLabel='Create new password'
            headerSubLabel='No hassel, just one click'
            backButtonLabel='Back to signin'
            backButtonHref='/signin'
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-4  xl:space-y-7 w-full text-lg'
                >
                    <div>
                        <FormField
                            control={form.control}
                            name='password'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>New Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            className='h-16'
                                            type='password'
                                            placeholder='******'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormError message={error} />
                    <FormSuccess message={success} />



                    <Button
                        type='submit'
                        variant={"pyroPrimary"}
                        className='w-full  h-14 text-lg xl:h-16 xl:text-xl'
                    >
                        Reset password
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}
