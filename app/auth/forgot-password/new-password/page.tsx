'use client';
import React from 'react';
import { Button } from '@/components/atoms/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/atoms/card';
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
import { Checkbox } from '@/components/atoms/checkbox';
import { useRouter } from 'next/navigation';
import AuthHeader from '@/components/molecules/AuthHeader';

const newPasswordFormSchema = z
    .object({
        password: z
            .string()
            .min(8, 'Password must be at least 8 characters long')
            .max(32, 'Password cannot be longer than 32 character')
            .regex(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/,
                'password must include at least one lowercase letter, one uppercase letter, and one number '
            ),
        confirmPassword: z.string(),
    })
    .superRefine(({ confirmPassword, password }, ctx) => {
        if (confirmPassword !== password) {
            ctx.addIssue({
                code: 'custom',
                message: 'The passwords did not match',
                path: ['confirmPassword'],
            });
        }
    });

const NewPasswordPage = () => {
    const router = useRouter();

    const form = useForm<z.infer<typeof newPasswordFormSchema>>({
        resolver: zodResolver(newPasswordFormSchema),
        defaultValues: {
            password: '',
            confirmPassword: '',
        },
    });

    function onSubmit(values: z.infer<typeof newPasswordFormSchema>) {
        console.log(values);
        router.push('/auth/signin');
    }

    return (
        <section>
            <Card className='w-[500px]'>
                <CardHeader>
                    <AuthHeader
                        title='Create new password'
                        subTitle='Forgot password? no problem.'
                    />
                </CardHeader>

                <CardContent>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className='flex flex-col space-y-7 text-lg'
                        >
                            <FormField
                                control={form.control}
                                name='password'
                                render={({ field }) => (
                                    <FormItem>
                                        {/* <FormLabel>New Password</FormLabel> */}
                                        <FormControl>
                                            <Input
                                                className='h-16 text-lg'
                                                type='password'
                                                placeholder='enter your password'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name='confirmPassword'
                                render={({ field }) => (
                                    <FormItem>
                                        {/* <FormLabel>Confirm password</FormLabel> */}
                                        <FormControl>
                                            <Input
                                                className='h-16 text-lg'
                                                type='password'
                                                placeholder='confirm your password'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button
                                type='submit'
                                className='bg-green-600 text-xl  w-full h-16'
                            >
                                Confirm
                            </Button>
                        </form>
                    </Form>
                </CardContent>

                <CardFooter className=''></CardFooter>
            </Card>
        </section>
    );
};

export default NewPasswordPage;