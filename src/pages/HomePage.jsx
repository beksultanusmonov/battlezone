import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>
      {/* monthly */}
      <div className="flex flex-col items-center gap-5 sm:flex-row rounded-3xl md:max-w-[70vw] bg-f-c  lg:max-w-[850px] mx-auto py-8 sm:gap-0 justify-center lg:gap-3 lg:px-3 transition-all duration-300 hover:scale-102 cursor-pointer shadow-2xl">
        <div className="flex w-full sm:w-auto gap-5 sm:flex-col justify-between px-3">
          <div>
            <h1 className='text-3xl sm:text-5xl font-bold'>ESTRADA</h1>
            <span className='font-bold text-xl sm:text-3xl text-white'>Oyligi !</span>
          </div>
          <Link to={'/main/battles'} className='btn bg-white'>Jang Maydoniga</Link>
        </div>
        <div className="w-[90vw] sm:w-[70vw] md:w-[40vw] lg:w-[500px] xl:w-[600px]  sm:h-[200px]  md:h-[160px] lg:h-[170px] xl:h-[200px] rounded-2xl overflow-hidden h-[180px]">
          <img src="../uz-stars.png" className='w-full h-full object-cover' />
        </div>
      </div>
      {/* statistics */}
      <div className='my-12 flex flex-wrap justify-center gap-5'>
        <div className="w-[300px] py-3 bg-base-100 rounded-xl px-2 flex gap-1 justify-around transition-all duration-200 hover:scale-102 cursor-pointer shadow-xl">
          <div className='flex items-end'>
            <h1 className='font-bold text-2xl'>Oylik <br /> Janglar</h1>
          </div>
          <img src="../a-vs.png" className='w-[150px] h-[150px]' />
        </div>
        <div className="w-[300px] py-3 bg-base-100 rounded-xl px-2 flex gap-1 justify-around transition-all duration-200 hover:scale-102 cursor-pointer shadow-xl">
          <div className='flex items-end'>
            <h1 className='font-bold text-xl'>Uyushtirilgan <br /> Janglar</h1>
          </div>
          <img src="../c-vs.png" className='w-[150px] h-[150px]' />
        </div>
        <div className="w-[300px] py-3 bg-base-100 rounded-xl px-2 flex gap-1 justify-around transition-all duration-200 hover:scale-102 cursor-pointer shadow-xl">
          <div className='flex items-end'>
            <h1 className='font-bold text-2xl'>Statistika</h1>
          </div>
          <img src="../statistics.png" className='w-[150px] h-[150px]' />
        </div>
      </div>
      {/* Battles */}
    </div>
  )
}

export default HomePage
