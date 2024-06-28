import React from 'react'

export default function Contact() {
    return (
        <div className='h-full w-full flex flex-col justify-center font-Poppins items-center '>
            <div className='h-[200px] w-full bg-green-500 text-white px-10 text-4xl font-black tracking-wide flex items-center'>
                Contact Us
            </div>
            <div className='sm:w-[88%] flex justify-evenly my-10 sm:flex-row flex-col items-start'>
                <div className='sm:w-[50%] w-[100%]'>
                    <div className="flex flex-col justify-between items-center h-full space-y-5 py-8">
                        <input
                            placeholder='Your Name'
                            type='text'
                            className='font-semibold bg-gray-100 border-none rounded-md    w-[88%] px-6 py-4 text-lg'
                        />
                        <input
                            placeholder='Your Phone'
                            type='tel'
                            className='font-semibold bg-gray-100   w-[88%] px-6 border-none rounded-md  py-4 text-lg'
                        />
                        <input
                            placeholder='Your Email'
                            type='email'
                            className='font-semibold bg-gray-100 w-[88%] px-6 border-none rounded-md  py-4 text-lg'
                        />
                        <textarea
                            placeholder='Your Message'
                            type='email'
                            className='font-semibold bg-gray-100 w-[88%] px-6 border-none rounded-md  py-4 text-lg'
                        />
                        <button className='bg-slate-800 w-[88%] py-4 mb-5 font-semibold text-xl text-white'>
                            Send Enquiry
                        </button>
                    </div>
                </div>
                <div className='sm:w-[30%] w-[88%] self-center space-y-3 '>
                    <h3 className="text-3xl font-black">Get In Touch</h3>
                    <p className=' text-base'>Drop your requirments we will get back to you as soon as possible.</p>
                    <h3 className="text-xl font-black">Reach Us</h3>
                    <p className=' text-base'>
                        1st Floor Office No.6, Jagdish Sankul, KBT Circle, near Wellness Medical, Thatte Nagar, Nashik, Maharashtra 422005
                    </p>
                    <h3 className="text-xl font-black">Drop a Mail</h3>
                    <p className=' text-base'>
                        <a href="mailto:info@kbt.in" > info@kbt.in </a>
                    </p>
                    <h3 className="text-xl font-black">Call Us</h3>
                    <p className=' text-base'>
                        <a href="tel:+917770002222" > +91 7770002222 </a>
                    </p>


                </div>
            </div>
        </div>
    )
}
