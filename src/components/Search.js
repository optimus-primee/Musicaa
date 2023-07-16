import React from "react"
import * as FiIcons from "react-icons/fi"
import { IconContext } from "react-icons"

function Search() {
  return (
    <>
      <IconContext.Provider value={{color:'#EFEEE040'}}>
        <div className=' flex justify-between items-center w-[100%]  pl-[125px] pt-[29px] pb-[26px] mb-[23px]'>
          <FiIcons.FiSearch />
          <input
            className='outline-0 bg-transparent w-[100%] ml-6 text-[#EFEEE040] text-sm font-semibold'
            type='text'
            placeholder='Search artists'
          />
        </div>
      </IconContext.Provider>
    </>
  )
}

export default Search
