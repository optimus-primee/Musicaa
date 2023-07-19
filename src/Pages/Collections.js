import React, { useContext,useEffect } from "react";
import playerContext from "../context/playerContext";
import { useRef, useState } from "react";
import Search from "../components/Search";
import { motion } from "framer-motion";
import * as BsIcons from "react-icons/bs";
function Collections() {
  const { SetCurrent, currentSong, songslist } = useContext(playerContext);

  const [width, setWidth] = useState(0);
  const container = useRef();

  useEffect(() => {
    setWidth(container.current.scrollWidth - container.current.offsetWidth);
  }, []);
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



      
      <div className="px-[23px] sm:ml-[6rem] ">
        <div className="flex space-x-[10px] items-center mb-[23px]">
          <button className="py-[10px] px-[17.5px] bg-[#FACD66] rounded-[27px]">
            My Collection
          </button>
          <button className="py-[10px] px-[27.5px] border border-[#EFEEE040] text-[#EFEEE040] rounded-[27px]">
            Likes
          </button>
        </div>
        <ul className="gri">
          {songslist.map((song, i) => (
            <li
              className={
                "songContainer " + (currentSong === i ? "selected" : "")
              }
              key={i}
              onClick={() => {
                SetCurrent(i);
              }}
            >
              <div className="cursor-pointer ">
                <div
                  className="w-[213px] h-[234px] container rounded-[20px]  relative overflow-hidden bg
                  "
                >
                  <img
                    className="w-[100%] h-[100%] object-cover pointer-events-none rounded-[20px] "
                    src={song.img}
                    alt=""
                  />
                  <div className="absolute  bottom-0 left-[15px] text-white font-normal flex items-center justify-between">
                    <div>
                      <h6 className="text-[24px]">{song.title}</h6>
                      <h6 className="text-[10px] ">{song.artistName}</h6>
                      <h6 className="text-[10px] relative z-[-10] likes">
                        2.3m Likes
                      </h6>
                    </div>
                  </div>
                  <div className="absolute bottom-[50px] right-[20px] text-[30px]  p-1 rounded-full text-[#FACD66] bg-[rgba(250,201,102,0.3)] opacity-0 play">
                    <BsIcons.BsPlayFill />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Collections;
