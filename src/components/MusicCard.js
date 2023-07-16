import React, { useEffect, useState } from "react"
import Currenttt from "../Images/3.png"
import { allMusics } from "../data/MusicData"
import * as BsIcons from "react-icons/bs"
import * as BiIcons from "react-icons/bi"
import {  useParams } from "react-router-dom"

function MusicCard() {
  let { id } = useParams()
  const  allMusic =  allMusics.find((p) => p.id === id)
 
 
  return (
    <div className='w-full py-8 bg-red-500 h-[125px]  fixed bottom-0'>
      
      <div className="flex justify-between items-center">
        <div className="flex">
          <img className='mr-[14px]' src={Currenttt} alt='' />
         <div>
         <h3>{allMusic.name}</h3>
          <h6>{allMusic.title}</h6>
         </div>
        </div>
        <div className="flex flex-col justify-between  items-center ">
          <div className="flex justify-between pb-3">
            <BsIcons.BsShuffle  className="mr-2"/>
            <BiIcons.BiSkipPrevious className="mr-2" />
            <BsIcons.BsFillPlayFill className="mr-2" />
            <BiIcons.BiSkipNext className="mr-2" />
          </div>
          <div className='h-[4px] w-[749px] bg-transparent cursor-pointer rounded-[50px] relative'>
            <div
              className='h-[4px] w-[30%] rounded-[50px] bg-[#FACD66] before:content-[""] before:absolute 
        before:w-[8px] before:h-[8px]  before:bg-[#FACD66] before:rounded-[50%]  before:top-[50%] before:-translate-y-1/2 before:left-[200px]'
            ></div>
          </div>
        </div>
        <div className='h-[3px] w-[160px] bg-transparent cursor-pointer rounded-[50px] relative'>
            <div
              className='h-[4px] w-[30%] rounded-[50px] bg-[#FACD66] '
            ></div>
          </div>
      </div>
    </div>
  )
}

export default MusicCard