import React from 'react';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Shared pages/Loading/Loading';

const SignUp = () => {
    const [createUserWithEmailAndPassword, user, loading, error, ] = useCreateUserWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    let signInError;
   
    if(loading){
        return <Loading></Loading>
        
    }
    if(error){
        signInError = <p className='text-red-600'>{error?.message}</p>
    }
    if (user) {
        console.log(user);
    }
    const onSubmit = data => {
        createUserWithEmailAndPassword(data.email, data.password);
    };
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className=" text-center text-2xl font-bold " >Sign Up</h2>
                    

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name:</span>
                            </label>
                            <input
                                type="name"
                                placeholder="Enter your name"
                                class="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    },
                                   
                                  })}
                            />
                            <label class="label">
                            {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                            {errors.name?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                            
                            </label>
                        </div>
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
                        <input className='btn btn-outline w-full max-w-xs' type="submit" value="Sign Up"/>
                    </form>
                        <p className='text-m'>Already have an account? <Link className='text-primary font-bold ' to='/login'>Login Now</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;