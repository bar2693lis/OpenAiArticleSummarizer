import React from 'react'
import {react, tailwind, redux, api, vite} from "../assets";

const Footer = () => {
  return (
    <footer className='w-full flex justify-center items-center flex-col'>
        <span>Developed By <span className='b_gradient font-satoshi font-bold text-xl'>Bar Lis</span></span>
        <span className='flex-row flex'>Developed with React <img src={react} alt='react_logo' className='w-5 object-contain'/>, Vite <img src={vite} alt='vite_logo' className='w-5 object-contain'/>, Tailwind <img src={tailwind} alt='tailwind_logo' className='w-5 object-contain'/>, Redux<img src={redux} alt='redux_logo' className='w-5 object-contain'/>, RapidAPI<img src={api} alt='api_logo' className='w-5 object-contain'/> </span>
    </footer>
  )
}

export default Footer