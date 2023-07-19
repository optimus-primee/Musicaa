import React from "react"
import * as FiIcons from "react-icons/fi"
import { IconContext } from "react-icons"
import { useNavigate } from "react-router-dom"
function Search() {
  const navigate = useNavigate()
  const handleClick =()=>{
    navigate("/search")
  }
  return (
    <>
      <IconContext.Provider value={{color:'#EFEEE040'}}>
        <div className=' flex justify-between items-center w-[100%]  pl-[125px] pt-[29px] pb-[26px] mb-[23px]'onClick={handleClick}>
          <FiIcons.FiSearch  />
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
