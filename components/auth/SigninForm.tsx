"use client"
import React, { useTransition, useState } from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../atoms/form'
import { Input } from '../atoms/input'
import { Button } from '../atoms/button'
import { useRouter } from 'next/navigation'
import { LoginSchema } from '@/schemas'
import { FormError } from '../FormError'
import { FormSuccess } from '../FormSuccess'
import { login } from '@/actions/login'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'



const SigninForm = () => {

    const [isPending, startTransition] = useTransition()
    const router = useRouter()
    const [error, setError] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("")
    const searchParams = useSearchParams()
    const urlError = searchParams.get("error") === "OAuthAccountNotLinked" ? "Email already in use with different provider" : ""

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setError("")
        setSuccess("")

        startTransition(() => {
            login(values)
                .then((data) => {
                    if (data) {
                        setError(data?.error)
                        setSuccess(data?.success)
                    }

                })
        })
        // router.push("/dashboard")
    }


    return (
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
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        className=' h-14  xl:h-16'
                                        placeholder='******'
                                        type='password'
                                        {...field}
                                        disabled={isPending}

                                    />
                                </FormControl>
                                <Button variant={"ghost"} asChild className='px-0 font-normal text-base text-green-700'>
                                    <Link href={"/reset"}>
                                        Forgot password ?
                                    </Link>
                                </Button>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormError message={error || urlError} />
                <FormSuccess message={success} />
                <Button
                    disabled={isPending}
                    type='submit'
                    variant={'pyroPrimary'}
                    className='w-full  h-14 text-lg xl:h-16 '
                >
                    Login
                </Button>

            </form>


        </Form>
    )
}

export default SigninForm