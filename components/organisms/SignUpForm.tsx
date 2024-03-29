"use client"
import React from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../atoms/form'
import { Input } from '../atoms/input'
import { Button } from '../atoms/button'
import { useRouter } from 'next/navigation'

const formSchema = z.object({
    email: z.string().email('Invalid email format').min(1, 'Email is required'),
    password: z.string().min(8, 'Password must be at least 8 characters long'),
    confirmPassword: z.string().min(8, 'Password must be at least 8 characters long')

}).refine((values) => {
    return values.password === values.confirmPassword;
},
    {
        message: "Passwords must match!",
        path: ["confirmPassword"],
    }
);

const SignUpForm = () => {

    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
        }
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        router.push("/auth/signin")
    }


    return (
        <Form {...form}>

            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4  xl:space-y-7 w-full text-lg'>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input className='h-14 text-lg xl:h-16' placeholder='Email' {...field} />
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
                            <FormControl>
                                <Input className='h-14 text-lg xl:h-16' placeholder='password' type='password' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input className='h-14 text-lg xl:h-16' placeholder='confirm password' type='password' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type='submit' className='w-full  h-14 text-lg xl:h-16 xl:text-xl' variant={"pyroPrimary"}>Create account</Button>

            </form>


        </Form>
    )
}

export default SignUpForm