import React, { useContext } from 'react'
import playerContext from '../context/playerContext'
import { useEffect, useRef, useState } from "react"

import Search from "../components/Search"

import Currentlyplaying from "../Images/Seyi.png"
import { motion } from 'framer-motion'



function Current() {
  const { SetCurrent, currentSong, songslist } = useContext(playerContext)
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{
     opacity:1,
     
    }}
    exit={{
      opacity:0,  transition:{duration:0.5,ease:"easeIn"}
      
    }}
    >
      <div style={{ backgroundImage:`url(${Currentlyplaying})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center", }} className="h-[100vh] bgg">
    <Search />
    <div className='ml-[6rem] relative z-10 '>
      
      <div className='flex space-x-[27px] items-center'>
        <div className='w-[284px]'>
          <div className='w-[100%] h-[288.97px]'>
            <img
              className='w-[100%] h-[100%] rounded-[35.17px]'
              src={Currentlyplaying}
              alt=''
            />
          </div>
        </div>
        <div>
          <h2 className=' text-[35px] font-bold text-[#A4C7C6] leading-[42px]'>
          No Seyi No Vibe
          </h2>
          <p className='text-[14px] text-[#EFEEE0]  mt-[9px] mb-[10px] w-[527px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </p>
          <p className='text-[14px] text-[#EFEEE0] mb-[40px]'>64 songs ~ 16 hrs+</p>
          <div className='flex items-center space-x-[9px]'>
            <button className=' px-[11.33px] py-[11px] flex  items-center bg-[#FFFFFF12] rounded-[32px] text-[12px] text-white'>
              <span className='mr-[11.33px]'>
                <svg
                  width='14'
                  height='14'
                  viewBox='0 0 14 14'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7.00001 0.333313C10.6744 0.333313 13.6667 3.32415 13.6667 7.00384C13.6667 10.6758 10.6744 13.6666 7.00001 13.6666C3.32562 13.6666 0.333344 10.6758 0.333344 7.00384C0.333344 3.32415 3.32562 0.333313 7.00001 0.333313ZM6.24068 4.35325C6.09911 4.35325 5.96397 4.38541 5.83527 4.44973C5.6744 4.53978 5.5457 4.68128 5.47491 4.84851C5.42987 4.96428 5.35908 5.3116 5.35908 5.31804C5.2883 5.69752 5.24969 6.31498 5.24969 6.99676C5.24969 7.64703 5.2883 8.23812 5.34621 8.62403C5.35265 8.63047 5.42343 9.0614 5.50065 9.20934C5.64222 9.47948 5.91893 9.64671 6.21494 9.64671H6.24068C6.43373 9.64028 6.83913 9.47305 6.83913 9.46661C7.52125 9.18361 8.86616 8.30244 9.4067 7.71714L9.44531 7.67854C9.5161 7.60779 9.60619 7.49845 9.62549 7.47272C9.72845 7.33765 9.77993 7.17042 9.77993 7.00384C9.77993 6.81667 9.72202 6.64301 9.61262 6.50151C9.58688 6.47578 9.49036 6.36644 9.40027 6.27639C8.8726 5.71038 7.4955 4.78419 6.77478 4.50119C6.66539 4.45681 6.38868 4.35968 6.24068 4.35325Z'
                    fill='#FACD66'
                  />
                </svg>
              </span>
              Play all
            </button>
            <button className='px-[11.33px] py-[11px] flex  items-center bg-[#FFFFFF12] rounded-[32px] text-[12px] text-white'>
              <span className='mr-[11.33px]'>
                <svg
                  width='14'
                  height='14'
                  viewBox='0 0 14 14'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M9.79334 0.333313H4.20668C4.02001 0.333313 3.84001 0.33998 3.66668 0.366646C1.56668 0.55998 0.333344 1.96665 0.333344 4.20665V9.79331C0.333344 12.0333 1.56668 13.44 3.66668 13.6333C3.84001 13.66 4.02001 13.6666 4.20668 13.6666H8.00001C8.26001 13.6666 8.42668 13.3733 8.32668 13.1333C8.13334 12.6733 8.00001 12.14 8.00001 11.6666C8.00001 9.64665 9.64668 7.99998 11.6667 7.99998C12.1733 7.99998 12.6667 8.09998 13.12 8.29998C13.3667 8.40665 13.6667 8.23998 13.6667 7.97331V4.20665C13.6667 1.77998 12.22 0.333313 9.79334 0.333313ZM8.65334 4.36665V7.53998C8.65334 7.54665 8.64668 7.55331 8.64668 7.56665C8.63334 8.37998 7.97334 9.03998 7.15334 9.03998C6.32668 9.03998 5.66001 8.36665 5.66001 7.54665C5.66001 6.71998 6.33334 6.05331 7.15334 6.05331C7.32668 6.05331 7.49334 6.08665 7.65334 6.14665V5.01998L5.00668 5.73998V8.20665C5.00668 8.21331 5.00001 8.21998 5.00001 8.22665C4.98668 9.03998 4.32668 9.69331 3.50668 9.69331C2.68001 9.69331 2.01334 9.01998 2.01334 8.19998C2.01334 7.37998 2.68668 6.70665 3.50668 6.70665C3.68001 6.70665 3.84668 6.73998 4.00001 6.79998V5.35998V4.19331C4.00001 3.57331 4.38668 3.07331 4.98001 2.91331L6.96668 2.36665C7.58668 2.19998 7.96668 2.36665 8.18001 2.52665C8.48668 2.75998 8.64001 3.13998 8.64001 3.64665V4.36665H8.65334Z'
                    fill='#FACD66'
                  />
                </svg>
              </span>
              Add to collection
            </button>

            <button className='p-[14px] bg-[#FFFFFF12] rounded-full'>
              <span>
                <svg
                  width='14'
                  height='14'
                  viewBox='0 0 14 14'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M4.51987 0.666973C4.93987 0.679746 5.34654 0.75308 5.74054 0.88708H5.77987C5.80654 0.899746 5.82654 0.913746 5.83987 0.926413C5.9872 0.973746 6.12654 1.02708 6.25987 1.10041L6.5132 1.21375C6.6132 1.26708 6.7332 1.36641 6.79987 1.40708C6.86654 1.44641 6.93987 1.48708 6.99987 1.53308C7.74054 0.96708 8.63987 0.660413 9.56654 0.666973C9.9872 0.666973 10.4072 0.726413 10.8065 0.860413C13.2672 1.66041 14.1539 4.36041 13.4132 6.72041C12.9932 7.92641 12.3065 9.02708 11.4072 9.92641C10.1199 11.1731 8.7072 12.2797 7.18654 13.2331L7.01987 13.3337L6.84654 13.2264C5.32054 12.2797 3.89987 11.1731 2.60054 9.91975C1.7072 9.02041 1.01987 7.92641 0.593202 6.72041C-0.160131 4.36041 0.726535 1.66041 3.21387 0.846413C3.4072 0.779746 3.60654 0.73308 3.80654 0.70708H3.88654C4.07387 0.679746 4.25987 0.666973 4.44654 0.666973H4.51987ZM10.4599 2.77375C10.1865 2.67975 9.88654 2.82708 9.78654 3.10708C9.6932 3.38708 9.83987 3.69375 10.1199 3.79308C10.5472 3.95308 10.8332 4.37375 10.8332 4.83975V4.86041C10.8205 5.01308 10.8665 5.16041 10.9599 5.27375C11.0532 5.38708 11.1932 5.45308 11.3399 5.46708C11.6132 5.45975 11.8465 5.24041 11.8665 4.95975V4.88041C11.8865 3.94641 11.3205 3.10041 10.4599 2.77375Z'
                    fill='#E5524A'
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="">
        <ul className='flex  flex-col-reverse space-y-[10px] mt-[49.03px]'>
                {songslist.map((song, i) => (
                  <li 
                    className={
                      "songContainer " + (currentSong === i ? "selected" : "")
                    }
                    key={i}
                    onClick={() => {
                      SetCurrent(i)
                    }}
                  >
                      <div className='w-[1125px] cursor-pointer'>
            <div className='flex items-center pt-[8px] pb-[9px] pl-[10px] text-[12px] text-[#FFFFFF]  bg-[#33373B5E] w-[100%] rounded-[15px]'>
              <div className='w-[39px] mr-[20.13px]'>
                <div className='w-[100%] h-[39px]'>
                  <img
                    className='w-[100%] h-[100%] rounded-[8.35px] object-cover'
                    src={song.img}
                    alt=''
                  />
                </div>
              </div>
              <span className='mr-[79.04px]'>
                <svg
                  width='18'
                  height='16'
                  viewBox='0 0 18 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M1.43496 8.37182C0.540791 5.58016 1.58662 2.10933 4.51746 1.16599C6.05912 0.668493 7.96162 1.08349 9.04246 2.57433C10.0616 1.02849 12.0191 0.671826 13.5591 1.16599C16.4891 2.10933 17.5408 5.58016 16.6475 8.37182C15.2558 12.7968 10.4 15.1018 9.04246 15.1018C7.68579 15.1018 2.87329 12.8485 1.43496 8.37182Z'
                    stroke='#EFEEE0'
                    stroke-width='0.625'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </span>
              <p className='mr-[242px]'>{song.title}<span>{song.artistName}</span></p>
              
              <p className='mr-[296px]'>Single</p>
              <p className='mr-[199.57px]'>4:17</p>
              <span>
                <svg
                  width='17'
                  height='17'
                  viewBox='0 0 17 17'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M8.25782 8.94595C8.63788 8.94595 8.94598 8.63785 8.94598 8.25779C8.94598 7.87774 8.63788 7.56964 8.25782 7.56964C7.87777 7.56964 7.56967 7.87774 7.56967 8.25779C7.56967 8.63785 7.87777 8.94595 8.25782 8.94595Z'
                    stroke='#FACD66'
                    stroke-width='1.3763'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M8.25782 4.12887C8.63788 4.12887 8.94598 3.82077 8.94598 3.44072C8.94598 3.06066 8.63788 2.75256 8.25782 2.75256C7.87777 2.75256 7.56967 3.06066 7.56967 3.44072C7.56967 3.82077 7.87777 4.12887 8.25782 4.12887Z'
                    stroke='#FACD66'
                    stroke-width='1.3763'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M8.25782 13.763C8.63788 13.763 8.94598 13.4549 8.94598 13.0749C8.94598 12.6948 8.63788 12.3867 8.25782 12.3867C7.87777 12.3867 7.56967 12.6948 7.56967 13.0749C7.56967 13.4549 7.87777 13.763 8.25782 13.763Z'
                    stroke='#FACD66'
                    stroke-width='1.3763'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </span>
            </div>
          </div>
          
          
                   
                   
                  </li>
                ))}
              </ul>
        
           
          
        </div>
      </div>
    </div>
    </div>
    </motion.div>
  )
}

export default Current