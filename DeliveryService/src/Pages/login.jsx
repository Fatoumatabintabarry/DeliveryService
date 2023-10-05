
import React from 'react'
import styles from '../style'
import '../index.css'
import {Navbar, Hero, Testimonial, Footer} from '../components/index';
import {boite, google, instagram } from '../assets';

const login = () => {
  return (
   
      <div className='w-full h-screen flex'>
        <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
            <div className='w-full h-[550px] hidden md:block'>
                <img className='w-full h-full' src={boite} alt="/" />
            </div>
            <div className='p-4 flex flex-col justify-around'>
                <form>
                    <h2 className='text-4xl font-bold text-center mb-8'>Shiped.</h2>
                    <div>
                        <input className='border p-2 mr-2' type="text" placeholder='Username' />
                        <input className='border p-2' type="password" placeholder='Password' />
                    </div>
                    <button className='w-full py-2 my-4 bg-purple-600 hover:bg-black-500'>Sign In</button>
                    <p className='text-center'>Forgot Username or Password?</p>
                </form>
                <p className='text-center'>Sign Up</p>
            </div>
        </div>
    </div>
            

  )
}

export default login