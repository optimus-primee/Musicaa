import React, { useEffect, useState } from "react"
import Search from "../components/Search"
import People from "../Images/Frame 4.png"
import Love from "../Images/Vector.png"
import Cover from "../Images/Cover.png"
import CoverBg from "../Images/Vector.svg"
import CoverBgg from "../Images/Vector (5).png"
import Current from "../Images/1.png"
import Currentt from "../Images/2.png"
import Currenttt from "../Images/3.png"
import Like from "../Images/heart.png"
import Seyi from "../Images/Seyi.png"
import NewRelease from "../components/playlist/NewRelease"
import { Link } from "react-router-dom"

import axios from "axios"
import PlayerState from "../context/PlayerState"

import Actions from "../components/playlist/Actions"
import Controls from "../components/Controls"
import Popular from "../components/playlist/Popular"
import Currentlyplaying from "../Images/Hypertension.jpeg"
import { motion } from "framer-motion"
import Library from "../components/Library"
function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,

        transition: { duration: 0.5, ease: "easeIn" },
      }}
      className="overflow-x-hidden"
    >
      <Search />
      <div className=' px-[23px] sm:ml-[6rem] text-white'>
      <div className='flex  flex-col sm:flex-row'>
          <div className='w-full rounded-[20px] px-[33px] sm:pl-[45px]  bg-[#609EAF] sm:rounded-[40px] sm:w-[686px] relative flex  text-white'>
            <img
              className='sm:hidden absolute top-0 right-0'
              src={CoverBgg}
              alt=''
            />
            <div>
              <h6 className='pt-[32px] sm:pt-[38px] text-[0.8rem] font-thin'>
                Currated playlist
              </h6>
              <h1 className=' pt-[236px] sm:pt-[85px] text-[2rem] font-bold'>
                R & B Hits
              </h1>
              <p className='w-[276px] text-sm leading-[16.8px] pt-[6px]  pb-[46px] sm:pb-[4.75rem]'>
                All mine, Lie again, Petty call me everyday, Out of time, No
                love, Bad habit, and so much more
              </p>

              <div className='flex items-center pb-[42px] sm:pb-[35px] '>
                <img className=' ' src={People} alt='' />
                <img className='ml-3' src={Love} alt='' />
                <h5 className='ml-[0.58rem]'>33K Likes</h5>
              </div>
            </div>

            <motion.img
              initial={{ y: 500 }}
              animate={{
                y: 0,
                transition: { duration: 0.9, type: "spring" },
              }}
              exit={{}}
              className='hidden sm:block sm:z-10 '
              src={Cover}
              alt=''
            />

            <img
              className='hidden sm:block sm:absolute sm:bottom-0 sm:right-0 overflow-hidden '
              src={CoverBg}
              alt=''
            />
          </div>
          <div>
            <h2 className='sm:pl-6 pt-[47px] sm:pt-[1px]  font-bold'>
              Top Charts
            </h2>
            <div className=' sm:block '>
              <Link to='/current'>
                <div className='flex sm:justify-between  sm:items-center items-start sm:w-[417px] bg-[#1A1E1F] pt-[17px] pl-[17px] pb-[16px] rounded-[20px] sm:ml-[22px] mb-3 '>
                  <div className='sm:flex sm:items-center sm:flex-row flex flex-col'>
                    <div className='w-[63px] mr-[14px]'>
                      <div className='w-[100%]  h-[63px]'>
                        <img
                          className=' w-[100%] h-[100%] rounded-[10px] object-cover'
                          src={Seyi}
                          alt=''
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className='text-[17px] pb-[4px] '>NSNV</h4>
                      <h6 className='text-[#EFEEE040] pb-[8px] text-[12px] '>
                        Seyi Vibez
                      </h6>
                      <p className='text-[12px] '>2:34:45</p>
                    </div>
                  </div>
                  <div className='bg-transparent border mr-[29px]   border-[#EFEEE040] p-[10px] rounded-full'>
                    <img className='' src={Like} alt='' />
                  </div>
                </div>
              </Link>

              <Link to='/currently'>
                <div className='flex sm:justify-between sm:items-center items-start sm:w-[417px] bg-[#1A1E1F] pt-[17px] pl-[17px] pb-[16px] rounded-[20px] sm:ml-[22px] mb-3 '>
                  <div className='sm:flex sm:items-center sm:flex-row flex flex-col'>
                    <div className='w-[63px] mr-[14px]'>
                      <div className='w-[100%]  h-[63px]'>
                        <img
                          className=' w-[100%] h-[100%] rounded-[10px] object-cover'
                          src={Currentlyplaying}
                          alt=''
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className='text-[17px] pb-[4px] '>Hypertension</h4>
                      <h6 className='text-[#EFEEE040] pb-[8px] text-[12px] '>
                        Bella Shmurda
                      </h6>
                      <p className='text-[12px] '>2:34:45</p>
                    </div>
                  </div>
                  <div className='bg-transparent border mr-[29px]   border-[#EFEEE040] p-[10px] rounded-full'>
                    <img className='' src={Like} alt='' />
                  </div>
                </div>
              </Link>
              <div className='flex sm:justify-between sm:items-center items-start sm:w-[417px] bg-[#1A1E1F] pt-[17px] pl-[17px] pb-[16px] rounded-[20px] sm:ml-[22px] mb-3 '>
                <div className='sm:flex sm:items-center sm:flex-row flex flex-col'>
                  <img className='mr-[14px]' src={Currenttt} alt='' />
                  <div>
                    <h4 className='text-[17px] pb-[4px] '>Golden age of 80s</h4>
                    <h6 className='text-[#EFEEE040] pb-[8px] text-[12px] '>
                      Sean swadder
                    </h6>
                    <p className='text-[12px] '>2:34:45</p>
                  </div>
                </div>
                <div className='bg-transparent border mr-[29px]   border-[#EFEEE040] p-[10px] rounded-full'>
                  <img className='' src={Like} alt='' />
                </div>
              </div>
            </div>
          </div>
          <NewRelease/>
          <Popular/>
        </div>
      </div>

  
   
    
    </motion.div>
  )
}

export default Home
