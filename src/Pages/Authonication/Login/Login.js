import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body items-center">
                    <h2 className="card-title ">Login</h2>

                    <div className="divider">OR</div>

                    <button className="btn btn-outline "
                    onClick={()=>signInWithGoogle()}
                    >Continue with Google </button>
                </div>
            </div>
        </div>
    );
};

export default Login;