"use client"
import React, { useTransition, useState } from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../atoms/form'
import { Input } from '../atoms/input'
import { Button } from '../atoms/button'
import { useRouter } from 'next/navigation'
import { ResetSchema } from '@/schemas'
import { FormError } from '../FormError'
import { FormSuccess } from '../FormSuccess'
import { login } from '@/actions/login'
import { CardWrapper } from './CardWrapper'

export const ResetForm = () => {
    const [isPending, startTransition] = useTransition()
    const [error, setError] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("")

    const form = useForm<z.infer<typeof ResetSchema>>({
        resolver: zodResolver(ResetSchema),
        defaultValues: {
            email: "",
        }
    })

    const onSubmit = (values: z.infer<typeof ResetSchema>) => {
        setError("")
        setSuccess("")

        // startTransition(() => {
        //     login(values)
        //         .then((data) => {
        //             if (data) {
        //                 setError(data?.error)
        //                 setSuccess(data?.success)
        //             }

        //         })
        // })
        // router.push("/dashboard")
        console.log("VALUES  =>", values)
    }


    return (
        <CardWrapper
            headerLabel='Reset password'
            headerSubLabel='Create new password via your email'
            backButtonLabel='Back to signin'
            backButtonHref='/signin'
        >

            <Form {...form}>

                <form autoComplete='off' onSubmit={form.handleSubmit(onSubmit)} className='space-y-4  xl:space-y-7 w-full text-lg'>
                    <div>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            className=' h-14  xl:h-16'
                                            placeholder='john.doc@example.com'
                                            {...field}
                                            disabled={isPending}
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
                        disabled={isPending}
                        type='submit'
                        variant={'pyroPrimary'}
                        className='w-full  h-14 text-lg xl:h-16 '
                    >
                        Send reset email
                    </Button>

                </form>


            </Form>

        </CardWrapper>
    )
}
