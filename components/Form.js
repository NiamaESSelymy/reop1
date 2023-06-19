import * as React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Outlet } from 'react-router-dom';
import home2 from "../musicplayer/home2"


export default function Form(){
    return (
        <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-100'>
            <h1 className='text-5xl font-semibold'>Welkom Back</h1>
            <p className='font-meduim text-lg text-gray-500 mt-4'>Welkom back! Please enter your details.</p>
            <div className='nt-8'>
                <div>
                    <label className='text-lg font-meduim'>Email</label>
                    <input
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Enter your email'
                    />
                </div>

                <div>
                    <label className='text-lg font-meduim'>Password</label>
                    <input
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Enter your password'
                    />
                </div>
                <div className='mt-8 flex justify-between items-center'>
                    <div>
                        <input
                        type='checkbox'
                        id='remember'
                        />
                        <label className='text-pink-700 ml-2 font-medium text-base' for="remember">Remember for 30 days</label>
                    </div>
                    <button className='font-medium text-base text-black'>Forgot password</button>
                </div>
                <div className='mt-8 flex flex-col gap-y-4'>
                <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-pink-700 text-white text-lg font-bold'> Sign in </button>
                    <button className='text-black flex py-3 rounded-xl border-2 border-gray-100 items-center justify-center gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all'>
                        Sign in with Google
                    </button>
                </div>
                <div className='mt-8 flex justify-center items-center'>
                    <p className='font-medium text-base'>Don't have an account?</p>
                    <button className='text-pink-700 text-base font-medium ml-2'>Sign Up</button>
                </div>
            </div>


        </div>
    )
}