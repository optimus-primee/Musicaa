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
        <Library/>
      </div>

  
   
    
    </motion.div>
  )
}

export default Home
