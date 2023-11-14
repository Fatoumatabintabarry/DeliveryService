
import React from 'react'
import AuthHeader from '../components/authHeader';
import { signupFields } from '../constants/formFields';
import "../index.css"

const SignupSender = () => {
    return (
     //just added header component first before writing the form 
        <div className='min-h-full h-screen  justify-center py-12 px-4 sm:px-6 lg:px-8'>
          
          <AuthHeader
          heading="Get started! "
          paragraph="Already have an account ?"
          linkName=" login "
          linkUrl="/login"
          />
      <div className=' lg:w-1/2 justify-center items-center bg-white form-container '>
      <div className='w-full px-8 md:px-32 lg:px-24  '>
      <form className=' rounded-md shadow-2xl p-10  '>
      <div class="form-group">
                <label for="profile">I am a: </label>
                      <select name="profile" id="profile">
                        <option value="Sender">Sender</option>
                        <option value="Driver">Driver</option>
                        <option value="Admin">Admin</option>
                        </select>                 
        </div>
        <br />
      <div className="justify-center">
          {signupFields.map(field =>(
          
              <div key={field.id} className="block text-gray-700 text-sm font-bold ">
                 <label className='relative text-sm text-gray-500 dark:text-gray-400 
                    duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0]
                    left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
                    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                    peer-focus:scale-75 peer-focus:-translate-y-4'> </label>     
                  <input 
                  className='text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 
                  text-base transition duration-500 ease-in-out transform border-transparent 
                  rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white
                  dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 
                  ring-offset-current ring-offset-2 ring-gray-400'
                  id={field.id}
                  type={field.type} 
                  name={field.name} 
                  placeholder={field.placeholder}
                   />
  
              </div>
  
          ))}
          <br />
          <div>
              <button type="submit" className="bg-purple-500 flex w-full justify-center rounded-md 
               px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline 
               focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                          Sign up 
              </button>
          </div>
  
  
          </div>
      </form>
      </div>
      </div>
      </div>        
  
    );
  }
  
  
export default SignupSender;