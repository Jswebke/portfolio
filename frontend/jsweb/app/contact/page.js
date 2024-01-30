"use client"
import React, { useState } from 'react'
import NavBarPage from '../components/NavBarPage'
import DarkNavBar from '../components/DarkNavBar'
import {toast, ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"; 
import { useForm } from 'react-hook-form'
import Image from 'next/image'
import Footer from '../components/Footer'
import {motion, useAnimation, useInView} from "framer-motion"

import axios from 'axios'
function page() {
    const [show, setShow] = useState(true)
    const[postErr, setPostErr] = useState()
    const form = useForm()
    const {register, handleSubmit, formState} = form
    const {errors} = formState
    
    const postData = async (data) => {
        try {
            
            const response = axios.post('http://127.0.0.1:8000/api/contact/create/', {
            // Your data to be sent in the request body
            CompanyName:data.companyName,
            FullName:data.fullname,
            PhoneNumber:data.phone,
            Email: data.email
            });
            toast.promise(response,{
                pending: 'Submitting your details',
                success: 'Success',
                error: 'An error occured try again',
            })
            
            console.log('Response from Django:', response.data);
        } catch (error) {
            console.error('Error making POST request to Django:', error);
        }
        
};
      // Call the function when needed

    return show ? (
        <main className=''>
            <title>Contact Us – Let’s work together</title>
            <meta name="description" content="Get in touch with J's Web for top-notch development services."></meta>
            <DarkNavBar show={show} setShow={setShow}/>
            <section className='w-full h-[90vh] pl-12 z-0 lg:px-32 flex flex-col justify-center items-start overflow-x-hidden'>
                <div className='flex flex-col items-start justify-center space-y-4'>
                    <p className='md:text-8xl text-7xl font-quattrocento font-medium z-20'>Let's<br />work<br />together</p>
                    <p className='text-lg z-20'>"Passion is what brought us here"</p>
                    <a href='#Form' className='bg-opacity-100 bg-black border text-white border-black px-6 py-2 hover:bg-white hover:text-black ease-in duration-200' >
                        CONTACT US
                    </a>
                </div>
                <div className="bg-[#E8E8E6] w-full -ml-12 lg:-ml-32 h-[90vh] absolute -z-10 flex flex-row justify-end items-end">
                    <Image
                        src="/contact-hero.png"
                        alt='hero' 
                        width={700}
                        height={500}
                        className='aspect-auto -z-10'
                    />
                </div>
            </section>
            <section className='flex flex-row pl-12 justify-between items-center bg-white lg:pl-32 pr-16 w-full py-12 ' id='Form'>
                <div className='flex flex-col space-y-6 items-start justify-start w-full lg:w-1/2'>
                    <h1 className='font-quattrocento font-medium text-[2.75rem] leading-[3.5rem]'>Hi. Tell us about your project</h1>
                        <p className=''>Fill in the form and send us an email</p>
                    <form className="flex flex-col items-start justify-start space-y-4 w-full" onSubmit={handleSubmit(postData)}>
                        <div className="flex flex-col space-y-2 items-start justify-start w-full">
                            <p className='font-normal'>Company name:</p>
                            <input type="text" 
                            className={ (errors.companyName?.message) ? 'py-3 px-2 w-full rounded-none focus:bg-gray-50 focus:outline-red-600 bg-[#E8E8E6]' : 'py-3 px-2 w-full rounded-none focus:bg-gray-50 focus:outline-[#44863F] bg-[#E8E8E6]'}
                            placeholder='Company name'
                            {...register("companyName", {
                                required: {
                                    value: true,
                                    message: 'This field is required'
                                },
                            })} />
                            <p className='text-red-600 text-xs'>{errors.phone?.message}</p>
                        </div>
                        <div className="flex flex-col space-y-2 items-start justify-start w-full">
                            <p className='font-normal'>Full name:</p>
                            <input type="text"
                            className={ (errors.fullname?.message) ? 'py-3 px-2 w-full rounded-none focus:bg-gray-50 focus:outline-red-600 bg-[#E8E8E6]' : 'py-3 px-2 w-full rounded-none focus:bg-gray-50 focus:outline-[#44863F] bg-[#E8E8E6]'}
                            placeholder='Full name'
                            {
                                ...register("fullname", {
                                    required: {
                                        value: true,
                                        message: 'This field is required'
                                    },
                                })
                            }/>
                            <p className='text-red-600 text-xs'>{errors.phone?.message}</p>
                        </div>
                        <div className="flex flex-col space-y-2 items-start justify-start w-full">
                            <p className='font-normal'>Phone number:</p>
                            <input 
                            type="text" 
                            className={ (errors.phone?.message) ? 'py-3 px-2 w-full rounded-none focus:bg-gray-50 focus:outline-red-600 bg-[#E8E8E6]' : 'py-3 px-2 w-full rounded-none focus:bg-gray-50 focus:outline-[#44863F] bg-[#E8E8E6]'}
                            placeholder='Phone number' 
                            {
                                ...register("phone", {
                                    required: {
                                        value: true,
                                        message: 'This field is required'
                                    },
                                    minLength: {
                                        value: 7,
                                        message: 'Invalid phone format 254 712345678'
                                    },
                                    maxLength: {
                                        value: 15,
                                        message: 'Invalid phone format 254 712345678'                                        
                                    },
                                    pattern: {
                                        value: /[0-9]/,
                                        message: 'Invalid phone format enter numbers',
                                        }
                                })
                                }/>
                                <p className='text-red-600 text-xs'>{errors.phone?.message}</p>
                        </div>
                        <div className="flex flex-col space-y-2 items-start justify-start w-full">
                            <p className='font-normal'>Email address:</p>
                            <input type="text"
                            className={ (errors.email?.message) ? 'py-3 px-2 w-full rounded-none focus:bg-gray-50 focus:outline-red-600 bg-[#E8E8E6]' : 'py-3 px-2 w-full rounded-none focus:bg-gray-50 focus:outline-[#44863F] bg-[#E8E8E6]'}
                            placeholder='Email address'
                            {
                                ...register("email",
                                {
                                    required: {
                                        value: true,
                                        message: 'This field is required'
                                    },
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: 'Invalid email format',
                                        }
                                } )
                            }  />
                            <p className='text-red-600 text-xs'>{errors.email?.message}</p>
                        </div>
                        <motion.button type={'submit'} className='bg-white font-medium space-x-2 border-black border-2 w-full py-2 px-6 flex flex-row items-center justify-center hover:bg-black hover:text-white hover:bg-opacity-100 ease-in duration-200'
                            whileTap={{scale:1.5}}
                            duration={0.2}
                            transition={"easInOut"}
                        
                            >
                            <p>SUBMIT</p>
                        </motion.button>
                    </form>
                </div>
            </section>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                theme='dark'
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                transition= 'Bounce'
                />
            <Footer />
        </main>
    ) : <NavBarPage show={show} setShow={setShow} page={'Contact'}/>
}

export default page