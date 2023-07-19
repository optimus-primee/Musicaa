import React, { useContext } from "react";
import playerContext from "../../context/playerContext";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import APIKit from "../spotify";

function NewRelease() {
  const { SetCurrent, currentSong, songslist } = useContext(playerContext);
  const [newReleases, setNewReleases] = useState([]);
  const [width, setWidth] = useState(0);
  const container = useRef();

  useEffect(() => {
    setWidth(container.current.scrollWidth - container.current.offsetWidth);
    const re = async () => {
      await APIKit.get("browse/new-releases" + "?&limit=10&offset=0").then(
        (response) => {
          console.log(response);
          setNewReleases(response.data.albums.items);
          console.log(newReleases);
        }
      );
    };
    re();
  }, []);

  return (
    <>
      <div className="mt-[43px] px-[23px] sm:ml-[6rem] text-white">
       

        <h2 className="mb-[13px] font-bold text-[24px]">New Release.</h2>
        <motion.div className="">
          <motion.div
            ref={container}
            className="w-[1125px] flex cursor-grab overflow-hidden   "
          >
            <motion.div
              className="inline-flex"
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              whileTap={{ cursor: "grabbing" }}
            >
              <ul className="flex ">
                {newReleases.map((newRelease, i) => {
                  return (
                    <div>
                      <div className="songmeta_playlist">
                        <div className="w-[153px] mr-[30px]">
                          <div className="w-[100%] h-[153px]">
                            <img
                              className="w-[100%] h-[100%] object-cover pointer-events-none rounded-[25px] "
                              src={newRelease.images[0].url}
                              alt=""
                            />
                          </div>
                        </div>
                        <h6 className="text-[12px] text-[#EFEEE0]">
                          {newRelease.name}
                        </h6>
                      </div>
                    </div>
                  );
                })}
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default NewRelease;
