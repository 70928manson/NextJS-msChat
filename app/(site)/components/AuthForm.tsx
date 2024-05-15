"use client";

import React, { useCallback, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import Button from '@/components/Button';
import Input from '@/components/inputs/input';
import AuthSocialButton from './AuthSocialButton';
import { BsGithub, BsGoogle, BsInstagram } from 'react-icons/bs';

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>("LOGIN");
    const [isLoading, setIsLoading] = useState(false);

    // why useCallback => 記憶此function, 不會每一次重新render就變成新的函式
    const toggleVariant = useCallback(() => {
        if (variant === "LOGIN") {
            setVariant("REGISTER")
        } else {
            setVariant("LOGIN")
        }
    }, [variant]);

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        if (variant === "REGISTER") {
            // Axios Register
        };
        if (variant === "LOGIN") {
            // NextAuth SignIn       
        }
    };

    const socialAction = (action: string) => {
        setIsLoading(true);

        // NextAuth Social SignIn
    };

    return (
        <div className="mt-8 sm:mx-auto sm-w-full sm:max-w-md">
            <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    {variant === "REGISTER" && (
                        <Input id="name" label="Name" register={register} errors={errors} />
                    )}
                    <Input id="email" label="Email address" register={register} errors={errors} />
                    <Input id="password" label="Password" register={register} errors={errors} />
                    <div>
                        <Button
                            disabled={isLoading}
                            fullWidth={true}
                            type="submit"
                        >
                            {variant === "LOGIN" ? "Sign In" : "Register"}
                        </Button>
                    </div>
                </form>
                <div className="mt-6">
                    {/* 表單底部基準元素 */}
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            {/* 分隔線 */}
                            <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-white px-2 text-gray-500">
                                Or continue with
                            </span>
                        </div>
                    </div>
                    <div className="mt-6 flex gap-2">
                        <AuthSocialButton
                            icon={BsGithub}
                            onClick={() => socialAction('github')}
                        />
                        <AuthSocialButton
                            icon={BsGoogle}
                            onClick={() => socialAction('google')}
                        />
                        <AuthSocialButton
                            icon={BsInstagram}
                            onClick={() => socialAction('instagram')}
                        />
                    </div>
                </div>

                <div className="
                    flex
                    gap-2
                    justify-center
                    text-xs
                    mt-6
                    px-2
                    text-gray-500
                ">
                    <div>
                        {variant === "LOGIN" ? "New to NCKU Food Draw?" : "Already have an account?"}
                    </div>
                    <div
                        onClick={toggleVariant}
                        className="underline cursor-pointer"
                    >
                        {variant === "LOGIN" ? "Create an account" : "Login to NCKU Food Draw"}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthForm
