"use client"
import React from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../atoms/form'
import { Input } from '../atoms/input'
import { Button } from '../atoms/button'
import { useRouter } from 'next/navigation'
import { RegisterSchema } from '@/schemas'



const SignUpForm = () => {

    const router = useRouter()

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password: "",
            name: "",
        }
    })

    function onSubmit(values: z.infer<typeof RegisterSchema>) {
        console.log(values)
        // router.push("/signin")
    }


    return (
        <Form {...form}>

            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4  xl:space-y-7 w-full text-lg'>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input className='h-14 text-lg xl:h-16' placeholder='John' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input className='h-14 text-lg xl:h-16' placeholder='john.doe!example.com' type='email' {...field} />
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
                                <Input className='h-14 text-lg xl:h-16' placeholder='******' type='password' {...field} />
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