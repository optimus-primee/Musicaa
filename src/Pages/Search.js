import React, { useEffect, useState } from "react";
import apiClient from "../components/spotify";
import APIKit from "../components/spotify";
import * as BsIcons from "react-icons/bs";
import * as FiIcons from "react-icons/fi"
import { IconContext } from "react-icons"

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [idd, setId] = useState("");
  const [albums, setAlbums] = useState([]);

  async function se() {
    console.log("searching for " + searchInput);

    await APIKit.get("search?q=" + searchInput + "&type=artist").then(
      (response) => {
        setId(response.data.artists.items[0].id);
      }
    );
    var returnedalbums = await APIKit.get(
      "artists/" + idd + "/albums" + "?include_groups=album&market=NG&limit=50"
    ).then((response) => {
      console.log(response.data.items);
      setAlbums(response.data.items);
    });
  }
  console.log(albums);
  return (
    <div>
      <IconContext.Provider value={{color:'#EFEEE040'}}>
        <div className=' flex justify-between items-center w-[100%]  pl-[125px] pt-[29px] pb-[26px] mb-[23px]'>
          <FiIcons.FiSearch />
          <input
        className="outline-0 bg-transparent w-[100%] ml-6 text-[#EFEEE040] text-sm font-semibold"
        type="text"
        placeholder="Search artists"
        onKeyPress={(event) => {
          if ((event.key = "Enter")) {
            se();
          }
        }}
        onChange={(event) => setSearchInput(event.target.value)}
      />
      <button onClick={se}></button>
          
        </div>
      </IconContext.Provider>
    

      <div className=" ">
        <div className="  gri px-[23px] sm:mx-[6rem] ">
          {albums.map((album, i) => {
            return (
              <div className="cursor-pointer ">
                <div
                  className="sm:w-[213px] w-[100%] h-[234px] container rounded-[20px]  relative overflow-hidden bg
                "
                >
                  <img
                    className="w-[100%] h-[100%] object-cover pointer-events-none rounded-[20px] "
                    src={album.images[0].url}
                    alt=""
                  />
                  <div className="absolute  bottom-0 left-[15px] text-white font-normal flex items-center justify-between">
                    <div>
                      <h6 className="text-[24px]">{album.name}</h6>
                      <h6 className="text-[10px] ">song.artistName</h6>
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
            );
          })}
        </div>
        
      </div>
    </div>
  );
}

export default Search;
