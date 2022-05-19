import React from 'react';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../../Shared pages/Loading/Loading';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    let signInError;
   
    if(loading||gLoading){
        return <Loading></Loading>
        
    }
    if(error||gError){
        signInError = <p className='text-red-600'>{error?.message||gError?.message}</p>
    }
    if (gUser) {
        console.log(gUser);
    }
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    };
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className=" text-center text-2xl font-bold " >Login</h2>
                    

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
                                      message: 'Provide a valid Email'}
                                  })}
                            />
                            <label class="label">
                            {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                            
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password:</span>
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
                                      message: 'Provide a valid Password'}
                                  })}
                            />
                            <label class="label">
                            {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                
                            </label>
                        </div>
                        {signInError};
                        <input className='btn btn-outline w-full max-w-xs' type="submit" value="Login"/>
                    </form>

                    <div className="divider">OR</div>

                    <button className="btn btn-outline w-full max-w-xs"
                        onClick={() => signInWithGoogle()}
                    >Continue with Google </button>
                </div>
            </div>
        </div>
    );
};

export default Login;