import React from 'react'
import { WiDayCloudyGusts } from "react-icons/wi";

export default function Navbar() {
  return (
    <>
    <nav>
      <div className='bg-blue-900 flex items-center justify-start h-12 p-1'>
      <WiDayCloudyGusts className='text-white text-4xl font-bold mx-3' />
      <h1 className='text-3xl font-bold text-white'>MyWeather</h1>
      </div>
    </nav>
    </>
  )
}
