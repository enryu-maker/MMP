import React from 'react'
import pic1 from "../images/image-14.webp";

export default function Property() {
  return (
    <div className='h-full w-full flex flex-col justify-center font-Poppins items-center bg-slate-50'>
      <div className='h-[200px] w-full bg-green-500 text-white px-10 text-4xl font-black tracking-wide flex items-center'>
        Property List
      </div>
      <div className=' flex w-full flex-wrap justify-evenly'>
        <div className="bg-white shadow-md w-[380px] my-10 rounded-lg overflow-hidden">
          <img src={pic1} alt="Roongta Grandezza" className="w-full" />
          <div className="p-4">
            <h3 className="text-lg font-bold">Roongta Grandezza</h3>
            <div className="flex space-x-2 mt-2">
              <span className="bg-gray-50 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                2 BHK
              </span>
              <span className="bg-gray-50 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                3 BHK
              </span>
              <span className="bg-gray-50 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                Shops
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Govind Nagar, Off 100ft Ring Road
            </p>
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
              View
            </button>
          </div>
        </div>
        <div className="bg-white shadow-md w-[380px] my-10 rounded-lg overflow-hidden">
          <img src={pic1} alt="Roongta Grandezza" className="w-full" />
          <div className="p-4">
            <h3 className="text-lg font-bold">Roongta Grandezza</h3>
            <div className="flex space-x-2 mt-2">
              <span className="bg-gray-50 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                2 BHK
              </span>
              <span className="bg-gray-50 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                3 BHK
              </span>
              <span className="bg-gray-50 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                Shops
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Govind Nagar, Off 100ft Ring Road
            </p>
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
              View
            </button>
          </div>
        </div>
        <div className="bg-white shadow-md w-[380px] my-10 rounded-lg overflow-hidden">
          <img src={pic1} alt="Roongta Grandezza" className="w-full" />
          <div className="p-4">
            <h3 className="text-lg font-bold">Roongta Grandezza</h3>
            <div className="flex space-x-2 mt-2">
              <span className="bg-gray-50 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                2 BHK
              </span>
              <span className="bg-gray-50 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                3 BHK
              </span>
              <span className="bg-gray-50 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                Shops
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Govind Nagar, Off 100ft Ring Road
            </p>
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
