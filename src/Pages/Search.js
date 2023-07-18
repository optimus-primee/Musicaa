import React, { useEffect, useState } from "react"
import apiClient from "../components/spotify"
import APIKit from "../components/spotify"

function Search() {
  const [searchInput, setSearchInput] = useState("")
  const [idd, setId] = useState("")
  const [albums, setAlbums] = useState([])

  async function se() {
    console.log("searching " + searchInput)
    await apiClient
      .get("search?q=" + searchInput + "&type=artist")
      .then(function (response) {
        setId(response.data.artists.items[0].id)
      })
    console.log("yy " + idd)

    const returnedAlbums = await apiClient
      .get(
        "artists/" +
          idd +
          "/albums" +
          "?include_groups=album&market=US&limit=50"
      )
      .then(function (response) {
        console.log(response.data.items)
        setAlbums(response.data.items)
      })
  }
  return (
    <div >
      <form className="flex">
        <input
          className='outline-0 bg-transparent w-[100%] ml-6 text-[#EFEEE040] text-sm font-semibold'
          type='text'
          placeholder='Search artists'
          onKeyPress={event=>{
            if(event.key="Enter"){
              console.log("yes")
            }
          }}
          
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <button
          onClick={() => {
            se()
          }}
        >
          butn
        </button>
      </form>
      <div>
        <h5>hhh</h5>
        {albums.map((album, i) => {
          return (
            
              <div className='w-[213px] relative' >
              <div className='w-[100%] h-[234px]'>
                <img className='w-[100%] h-[100%] rounded-[20px] object-cover ' src={album.images[0].url} alt='' />
                
                <div className="">
                  <h5></h5>
                <h6 className="text-[24px] leading-[24px]">{album.name}</h6>
                <h6 className="text-[10px] leading-[12px]">{album.name}</h6>
                </div>
              </div>
              </div>
            
          )
        })}
      </div>
    </div>
  )
}

export default Search
