import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate()

  return (
    <div className='flex flex-col sm:flex-row items-center justify-between bg-gray-100 p-4 sm:p-8 rounded-lg shadow-lg'>
      {/* left side */}
      <div className='flex flex-col items-start justify-center sm:items-start sm:justify-start text-center sm:text-left'>
        <div className='flex items-center justify-center sm:justify-start mb-4'>
        <p>book appointment</p>
        <p className=''>with 100+ trusted services</p>
      </div>
      <button onClick={()=>{navigate('/login'); scrollTo(0,0)}} className='text-blue-500'>create account</button>
      </div>

      {/* right side */}
      <div className='flex items-center justify-center mt-4 sm:mt-0'>
        <img className='' src={assets.appointment_img} alt="" />
      </div>
    </div>
  )
}

export default Banner
