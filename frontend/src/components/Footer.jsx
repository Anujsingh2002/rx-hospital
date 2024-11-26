import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                {/* left */}
                <div >
                    <img className='mb-5 w-20' src={assets.logorx} alt="" />
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex doloremque cumque fuga ipsum eveniet, molestias dolorum minus, esse recusandae totam nisi! Nemo similique, labore nobis perspiciatis eius facere deserunt quam.</p>
                </div>

                {/* center */}
                <div>
                    <p className='text-xl font-medium mb-5'>Company</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li >Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                {/* right */}
                <div>
                    <p className='text-xl font-medium mb-5'>Get in touch</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+91 9876543210</li>
                        <li>rxhospital@gmail.com</li>
                    </ul>
                </div>
            </div>

            {/* copyright */}
            <div>
                <hr />
                <p className='py-5 text-center text-sm font-semibold'>Copyright 2024 @ rx-hospital - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer