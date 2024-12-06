import React, { useContext, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


const Login = () => {

    const {userLogin,SignInwithGoogle, setUser} = useContext(AuthContext);
    const [error, setError] = useState({});
    
    
    const location = useLocation();
    console.log(location)
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);



    const handleSubmit = e =>{
        e.preventDefault()
        console.log('Login page')

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        userLogin (email, password)
        .then((result) =>{
            const user = result.user;
            setUser(user);
            console.log(user); 
            navigate(location?.state ? location.state : '/services'); 
        })
        
        .catch((err) =>{
            setError({ ...error, login: err.code })
        });
    }

    const handleGoogleSubmit =() =>{
        SignInwithGoogle()
        .then((result) =>{
            const user = result.user
            setUser(user);
            console.log(user)
            navigate(location?.state ? location.state : '/services');
        })
        .catch((error) =>{
            console.log('Error', error)
        })

    }

    

   

    return (
        <div className="card mx-auto items-center justify-center  w-full max-w-sm shrink-0 shadow-2xl col-span-1">
            <div className='mx-5 my-4'>
                <div className='text-left '>
                    <h1 className='text-3xl font-semibold text-white'>Login Your Account</h1>
                    <p className=' font-semibold text-gray-400 mt-4'>Don't have an account? <span className='text-white text-lg'><Link to='/auth/register'>Register</Link></span> </p>
                </div>

            </div>
            <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white font-semibold">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text text-white font-semibold">Password</span>
                    </label>
                
                    <input type={showPassword ? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered" required />
                    <button onClick={() => setShowPassword(!showPassword)} className=' absolute right-4 text-xl top-12'>{showPassword ? <FaRegEye/> : <FaEyeSlash/> }</button>
                    {
                        error.login && <label className='label text-red-700'>{error.login}</label>
                    }
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover text-white hover:text-white">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6 mb-4">
                    <button className="btn bg-black border-none text-[#A4DBC1] text-xl font-semibold w-72 hover:rounded-full hover:bg-[#6b9481] hover:text-black">Login</button>
                </div>
                <div className='flex  gap-4'>
                    <button onClick={handleGoogleSubmit} className='btn'> <FcGoogle /> Google</button>
                    <button className='btn'><FaFacebook className='text-[#005EFF]' />Facebook</button>
                    <button className='btn'> <FaApple /> Apple</button>
                </div>
            </form>
        </div>
    );
};

export default Login;