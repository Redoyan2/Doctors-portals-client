import React from 'react';
import { useForm } from "react-hook-form";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    if (user) {
        console.log(user);
    }
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body ">
                    <h2 className="text-center font-bold text-2xl">LOGIN</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email:</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                class="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[A-Za-z]{3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}

                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text my-2">Password:</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                class="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Provide a valid Password'
                                    }
                                })}
                            />
                            <label>
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                        </div>
                        <input className='btn btn-outline w-full max-w-xs mt-4' type="submit" value='Login' />
                    </form>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline w-full max-w-xs "
                        onClick={() => signInWithGoogle()}
                    >Continue with Google </button>
                </div>
            </div>
        </div>
    );
};

export default Login;