import React, { useContext } from "react"
import playerContext from "../../context/playerContext"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import axios from "axios"

function Popular() {
  const { SetCurrent, currentSong, songslist } = useContext(playerContext)
  const [width, setWidth] = useState(0)
  const [yinka,setYinka] = useState("")
  const container = useRef()

  useEffect(() => {
    setWidth(container.current.scrollWidth - container.current.offsetWidth)
  }, [])

    axios.get("https://musica-api.up.railway.app/new").then((response) => {
      setYinka(response.data[0].artist)
      
    })
    console.log("this is wat would represent the variable " + yinka)

  return (
    <>
      <div className='mt-[43px] px-[23px] sm:ml-[6rem] text-white'>
        <h2 className='mb-[13px] font-bold text-[24px]'>
          {yinka}
        </h2>
        <motion.div className=''>
          <motion.div
            ref={container}
            className='w-[1125px] flex cursor-grab overflow-hidden   '
          >
            <motion.div
              className='inline-flex'
              drag='x'
              dragConstraints={{ right: 0, left: -width }}
              whileTap={{ cursor: "grabbing" }}
            >
              <ul className='flex flex-row-reverse'>
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
                    <div className='tmbn_song'>
                      <i className='fas fa-play'></i>
                    </div>
                    <div className='songmeta_playlist'>
                      <div className='w-[153px] mr-[30px]'>
                        <div className='w-[100%] h-[153px]'>
                          <img
                            className='w-[100%] h-[100%] object-cover pointer-events-none rounded-[25px] '
                            src={song.img}
                            alt=''
                          />
                          <h6>{song.title}</h6>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default Popular
