"use client"
import React from 'react'
import { signIn,useSession } from 'next-auth/react'
const SigninCard = () => {
const {data:session}=useSession()
session&&console.log(session)
  return (

<div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
    <form className="space-y-6" action="/">
        <h5 className="text-xl font-medium text-gray-900 ">Sign in to our platform</h5>
        <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 00 ray-400 " placeholder="name@company.com" required/>
        </div>
        <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 00 ray-400 " required/>
        </div>
        <div className="flex items-start">
            <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 00 ue-600 ray-800 fset-gray-800" required/>
                </div>
                <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 ">Remember me</label>
            </div>
            <a href="/" className="ml-auto text-sm text-blue-700 hover:underline ">Lost Password?</a>
        </div>
        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center -700 ue-800">Login to your account</button>
        <div className="text-sm font-medium text-gray-500 ">
            Not registered? <a href="/" className="text-blue-700 hover:underline ">Create account</a>
        </div>
    </form>

    <div className="w-full flex flex-col gap-3 justify-center items-center mt-3">
        <p>Or</p>
    <button type='button' onClick={()=>{signIn('google',{callbackUrl:"https://pradipchapagain.com.np"})}} className='bg-red-800 text-white py-1 px-4 rounded-md my-3 hover:bg-red-950'>Sign In using Google</button>
    </div>
</div>

  )
}

export default SigninCard