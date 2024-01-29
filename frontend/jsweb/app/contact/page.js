"use client"
import React, { useState } from 'react'
import NavBarPage from '../components/NavBarPage'
import DarkNavBar from '../components/DarkNavBar'
import Image from 'next/image'
import Footer from '../components/Footer'
import axios from 'axios'
function page() {
    const [show, setShow] = useState(true)
    const[formData,setFormData] = useState({
        CompanyName: '',
        FullName: '',
        PhoneNumber:'',
        Email:''
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log('Input change event:', name, value);
        setFormData({
            ...formData,
            [name]: value,
        });
    }
    
    const postData = async () => {
        console.log(formData)
        if (formData == '2'){
            console.log(formData)
        }
        try {
            
            const response = await axios.post('http://127.0.0.1:8000/api/contact/create/', {
            // Your data to be sent in the request body
            CompanyName:formData.CompanyName,
            FullName:formData.FullName,
            PhoneNumber:formData.PhoneNumber,
            Email:formData.Email
            });
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
                    <div className="flex flex-col items-start justify-start space-y-4 w-full">                        <div className="flex flex-col space-y-2 items-start justify-start w-full">
                            <p className='font-normal'>Company name:</p>
                            <input type="text" className='py-3 px-2 w-full rounded-none focus:bg-gray-50 focus:outline-[#44863F] bg-[#E8E8E6] ' placeholder='Company name' name='CompanyName' value={formData.CompanyName} onChange={handleInputChange} required={true} />
                        </div>
                        <div className="flex flex-col space-y-2 items-start justify-start w-full">
                            <p className='font-normal'>Full name:</p>
                            <input type="text" className='py-3 px-2 w-full rounded-none focus:bg-gray-50 focus:outline-[#44863F] bg-[#E8E8E6]' placeholder='Full name' name = 'FullName' value={formData.FullName} onChange={handleInputChange} required={true}/>
                        </div>
                        <div className="flex flex-col space-y-2 items-start justify-start w-full">
                            <p className='font-normal'>Phone number:</p>
                            <input type="text" className='py-3 px-2 w-full rounded-none focus:bg-gray-50 focus:outline-[#44863F] bg-[#E8E8E6]' placeholder='Phone number' name = 'PhoneNumber' value={formData.PhoneNumber} onChange={handleInputChange} required={true}/>
                        </div>
                        <div className="flex flex-col space-y-2 items-start justify-start w-full">
                            <p className='font-normal'>Email address:</p>
                            <input type="text" className='py-3 px-2 w-full rounded-none focus:bg-gray-50 focus:outline-[#44863F] bg-[#E8E8E6]' placeholder='Email address' name='Email' value={formData.Email} onChange={handleInputChange}required={true}  />
                        </div>
                        <button className='bg-white font-medium space-x-2 border-black border-2 w-full py-2 px-6 flex flex-row items-center justify-center hover:bg-black hover:text-white hover:bg-opacity-100 ease-in duration-200' onClick={postData}>
                            <p>SUBMIT</p>
                        </button>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    ) : <NavBarPage show={show} setShow={setShow} page={'Contact'}/>
}

export default page