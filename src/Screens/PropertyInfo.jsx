import React from 'react'
import { Carousel } from "flowbite-react";
import pic1 from "../images/image-14.webp";
import pic2 from "../images/image-15.webp";
import pic3 from "../images/image-16.webp";
export default function PropertyInfo() {
    return (
        <div className='h-full w-full flex flex-col justify-center font-Poppins items-center bg-slate-50'>
            <div className='sm:h-[50vh] h-[20vh] w-[92%] !rounded-none my-10'>
                <Carousel
                    className="!rounded-none"
                    style={{ borderRadius: "0" }}
                    indicators={false}
                    loop={true}
                >
                    <div className='flex w-full h-full'>
                        <img className=' object-contain w-[50%] ' src={pic1} alt="..." />
                        <img className=' object-contain w-[50%]' src={pic2} alt="..." />
                    </div>
                    <div className='flex w-full h-full'>
                        <img className=' object-contain w-[50%] ' src={pic1} alt="..." />
                        <img className=' object-contain w-[50%] ' src={pic2} alt="..." />
                    </div>
                    <div className='flex w-full h-full'>
                        <img className=' object-contain w-[50%] ' src={pic1} alt="..." />
                        <img className=' object-contain w-[50%] ' src={pic2} alt="..." />
                    </div>
                </Carousel>
            </div>
            <div className='w-[88%] flex sm:flex-row flex-col justify-evenly mb-10 items-start'>
                <div className='sm:w-[60%] space-y-8'>
                    <div className='w-full bg-white h-[180px] rounded-md'>
                        <div className="flex flex-col justify-evenly items-start h-full px-5">
                            <h3 className="text-3xl font-black">Roongta Grandezza</h3>
                            <h3 className="text-lg text-green-500 font-bold">Govind Nagar</h3>

                            <p className="mt-2 text-sm text-gray-600">
                                Govind Nagar, Off 100ft Ring Road
                            </p>
                            <div className="flex space-x-2 mt-2">
                                <span className="bg-gray-50 text-gray-800 text-base font-bold px-2 py-1 rounded">
                                    2 BHK
                                </span>
                                <span className="bg-gray-50 text-gray-800 text-base font-bold px-2 py-1 rounded">
                                    3 BHK
                                </span>
                                <span className="bg-gray-50 text-gray-800 text-base font-bold px-2 py-1 rounded">
                                    Shops
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='w-full bg-white rounded-md '>
                        <div className="flex flex-col justify-evenly items-start h-full p-5">
                            <h3 className="text-xl font-bold">Description</h3>
                            <p className="text-base text-gray-700 text-justify">If Grand is your way of life, Roongta Grandezza – a grand, 7-winged project, with 7 floors of luxurious 2 & 3 BHK homes, and 13 road-front shops facing a 12m wide road, is where you will feel at home. With plush and varied amenities spanning multiple floors, the project truly leaves one wanting for nothing! Strategically designed and planned, Grandezza optimally utilizes natural ventilation and light, allowing unhindered access to every wing in the project to these natural resources. Positioned and categorized – on the ground, patio, first, and second levels, the 30+ amenities comprising of various exotic features such as the zen garden, meditation aromatic cove, indoor and outdoor sport arenas, multipurpose hall, and reflexology path, etc.provide a multidimensional way to experiencing life. At Govind Nagar, off the 100ft. Ring Road, an area on the rise with respect to life and commerce, the road-front shops at Roongta Grandezza are the most successful venture one would want to invest in!</p>
                        </div>
                    </div>
                    <div className='w-full bg-white rounded-md '>
                        <div className="flex flex-col justify-evenly items-start h-full p-5">
                            <h3 className="text-xl font-bold">Ameneties</h3>
                        </div>
                    </div>
                    <div className='w-full bg-white rounded-md '>
                        <div className="flex flex-col justify-evenly items-start h-full p-5">
                            <h3 className="text-xl font-bold">Property Video</h3>
                        </div>
                    </div>
                    <div className='w-full bg-white rounded-md '>
                        <div className="flex flex-col justify-evenly items-start h-full p-5">
                            <h3 className="text-xl font-bold">Location</h3>
                        </div>
                    </div>
                    <div className='w-full bg-white rounded-md '>
                        <div className="flex flex-col justify-evenly items-start h-full p-5">
                            <h3 className="text-xl font-bold">Gallery</h3>
                        </div>
                    </div>
                </div>
                <div className='sm:w-[35%] w-[100%] sm:mt-0 mt-10'>
                    <div className='w-full bg-white rounded-md '>
                        <div className="flex flex-col justify-between items-center h-[500px]">
                            <h3 className="text-2xl font-bold bg-green-500 text-white w-full rounded-t-md py-5 px-10" >Enquire Now</h3>
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
                            <button className='bg-slate-800 w-[88%] py-4 mb-5 font-semibold text-xl text-white'>
                                Send Enquiry
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
