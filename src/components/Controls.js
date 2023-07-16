import React, { useState, useEffect, useRef, useContext } from "react";
import playerContext from "../context/playerContext";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";

function Controls() {
  // Global State
  const {
    currentSong,
    songs,
    nextSong,
    prevSong,
    repeat,
    random,
    playing,
    toggleRandom,
    toggleRepeat,
    togglePlaying,
    handleEnd,
    songslist,
  } = useContext(playerContext);

  const audio = useRef("audio_tag");

  // self State
  const [statevolum, setStateVolum] = useState(0.3);
  const [dur, setDur] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const fmtMSS = (s) => {
    return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + ~~s;
  };

  const toggleAudio = () =>
    audio.current.paused ? audio.current.play() : audio.current.pause();

  const voluweWrapper = document.querySelector(".volume-wrapper");
  const [volume, setVolume] = useState(1);
  const handleClick = (e) => {
    const selectedLength = e.clientX - voluweWrapper.offsetLeft;
    setVolume((selectedLength / voluweWrapper.clientWidth).toFixed(2));
  };

  //Update the player volume when the volume state changed
  useEffect(() => {
    audio.volume = volume;
  }, [volume]);

  const handleProgress = (e) => {
    let compute = (e.target.value * dur) / 100;
    setCurrentTime(compute);
    audio.current.currentTime = compute;
  };

  useEffect(() => {
    audio.current.volume = statevolum;
    if (playing) {
      toggleAudio();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSong]);

  return (
    <>
      <div>
        <div className="w-full py-8   h-[125px] z-10  fixed bottom-0 bg-[rgba(29,33,35,0.3)] backdrop-blur-xl ">
          <div className="flex justify-between items-center sm:px-[101px]">
            <div className="flex items-center">
              <div className="w-[49px]">
                <div className="w-[100%] h-[49px]">
                  <img
                    className="w-[100%] h-[100%] object-cover rounded-[14px]"
                    src={songslist[currentSong].img}
                    alt=""
                  />
                </div>
              </div>
              <div className="flex flex-col ml-[13px]">
                <h6 className="text-[14px] font-bold text-white">
                  {songslist[currentSong].artistName}
                </h6>

                <h6 className="text-[10px] font-bold text-[#EFEEE040]">
                  {songslist[currentSong].title}
                </h6>
              </div>
            </div>
            <div className="flex flex-col justify-between  items-center ">
              <div className="">
                <div className="flex justify-between items-center mb-[10px] ">
                  <div className="sm:flex hidden">
                  <span
                    onClick={toggleRandom}
                    className={"random " + (random ? "active" : "")}
                  >
                    <svg
                      className="mr-[46px]"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.5 12.7594C14.5 12.7461 14.4933 12.7328 14.4933 12.7194C14.4867 12.6661 14.48 12.6128 14.46 12.5661C14.4333 12.5061 14.4 12.4594 14.36 12.4128C14.36 12.4128 14.36 12.4061 14.3533 12.4061C14.3067 12.3594 14.2533 12.3261 14.1933 12.2994C14.1333 12.2728 14.0667 12.2594 14 12.2594L10.8867 12.2728C10.8867 12.2728 10.8867 12.2728 10.88 12.2728C10.48 12.2728 10.0933 12.0861 9.85333 11.7661L9.04 10.7194C8.87333 10.4994 8.56 10.4594 8.34 10.6328C8.12 10.8061 8.08 11.1128 8.25333 11.3328L9.06666 12.3794C9.5 12.9394 10.18 13.2728 10.8867 13.2728H10.8933L12.7933 13.2661L12.32 13.7394C12.1267 13.9328 12.1267 14.2528 12.32 14.4461C12.42 14.5461 12.5467 14.5928 12.6733 14.5928C12.8 14.5928 12.9267 14.5461 13.0267 14.4461L14.36 13.1128C14.4067 13.0661 14.44 13.0128 14.4667 12.9528C14.4867 12.8861 14.5 12.8194 14.5 12.7594Z"
                        fill="white"
                      />
                      <path
                        d="M5.61333 5.23275C5.18 4.63275 4.48667 4.27942 3.74667 4.27942C3.74 4.27942 3.74 4.27942 3.73333 4.27942L2 4.28609C1.72667 4.28609 1.5 4.51275 1.5 4.78609C1.5 5.05942 1.72667 5.28609 2 5.28609L3.74 5.27942H3.74667C4.16667 5.27942 4.56 5.47942 4.8 5.81942L5.52 6.81942C5.62 6.95275 5.77333 7.02609 5.92667 7.02609C6.02667 7.02609 6.13333 6.99275 6.22 6.93275C6.44667 6.76609 6.49333 6.45275 6.33333 6.23275L5.61333 5.23275Z"
                        fill="white"
                      />
                      <path
                        d="M14.4933 4.82606C14.4933 4.81273 14.5 4.79939 14.5 4.79273C14.5 4.72606 14.4867 4.65939 14.46 4.59939C14.4333 4.53939 14.4 4.48606 14.3533 4.43939L13.02 3.10606C12.8267 2.91273 12.5067 2.91273 12.3133 3.10606C12.12 3.29939 12.12 3.61939 12.3133 3.81273L12.7867 4.28606L10.9667 4.27939C10.96 4.27939 10.96 4.27939 10.9533 4.27939C10.1867 4.27939 9.46667 4.65939 9.04 5.30606L4.78 11.6927C4.54 12.0527 4.13333 12.2727 3.7 12.2727H3.69333L2 12.2594C1.72667 12.2594 1.5 12.4794 1.5 12.7594C1.5 13.0327 1.72 13.2594 2 13.2594L3.7 13.2661C3.70667 13.2661 3.70667 13.2661 3.71333 13.2661C4.48667 13.2661 5.2 12.8861 5.62667 12.2394L9.88667 5.85273C10.1267 5.49273 10.5333 5.27273 10.9667 5.27273H10.9733L14 5.28606C14.0667 5.28606 14.1267 5.27273 14.1933 5.24606C14.2533 5.21939 14.3067 5.18606 14.3533 5.13939C14.3533 5.13939 14.3533 5.13273 14.36 5.13273C14.4 5.08606 14.44 5.03939 14.46 4.97939C14.48 4.93273 14.4867 4.87939 14.4933 4.82606Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  </div>
                  <div className="sm:flex hidden">
                    <span className="prev" onClick={prevSong}>
                      <svg
                        className="mr-[46px]"
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.4933 5.586V11.966C13.4933 13.2727 12.0733 14.0927 10.94 13.4393L8.17334 11.846L5.40667 10.246C4.27334 9.59266 4.27334 7.95933 5.40667 7.306L8.17334 5.706L10.94 4.11266C12.0733 3.45933 13.4933 4.27266 13.4933 5.586Z"
                          fill="white"
                        />
                        <path
                          d="M2.50668 13.3927C2.23335 13.3927 2.00668 13.166 2.00668 12.8927V4.65271C2.00668 4.37938 2.23335 4.15271 2.50668 4.15271C2.78002 4.15271 3.00668 4.37938 3.00668 4.65271V12.8927C3.00668 13.166 2.78002 13.3927 2.50668 13.3927Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </div>

                  <span
                    className="play"
                    onClick={() => {
                      togglePlaying();
                      toggleAudio();
                    }}
                  >
                    <span className={!playing ? "" : "hide"}>
                      <svg
                        className="mr-[46px]"
                        width="61"
                        height="62"
                        viewBox="0 0 61 62"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_d_15329_172)">
                          <rect
                            x="18"
                            y="18"
                            width="25"
                            height="25.5453"
                            rx="12.5"
                            fill="#FACD66"
                            shape-rendering="crispEdges"
                          />
                          <path
                            d="M26.3333 30.7727V28.9537C26.3333 26.6193 27.9856 25.6643 30.0017 26.8315L31.5781 27.741L33.1546 28.6505C35.1707 29.8177 35.1707 31.7277 33.1546 32.8949L31.5781 33.8044L30.0017 34.7138C27.9856 35.881 26.3333 34.9261 26.3333 32.5917V30.7727Z"
                            fill="#EFEEE0"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_15329_172"
                            x="0"
                            y="0"
                            width="61"
                            height="61.5453"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset />
                            <feGaussianBlur stdDeviation="9" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_15329_172"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_15329_172"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </span>
                    <span className={!playing ? "hide" : ""}></span>
                  </span>

                  <span className="next" onClick={nextSong}>
                    <svg
                      className="mr-[46px]"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.50667 5.586V11.966C2.50667 13.2727 3.92667 14.0927 5.06 13.4393L7.82667 11.846L10.5933 10.246C11.7267 9.59266 11.7267 7.95933 10.5933 7.306L7.82667 5.706L5.06 4.11266C3.92667 3.45933 2.50667 4.27266 2.50667 5.586Z"
                        fill="white"
                      />
                      <path
                        d="M13.4933 13.3927C13.22 13.3927 12.9933 13.166 12.9933 12.8927V4.65271C12.9933 4.37938 13.22 4.15271 13.4933 4.15271C13.7667 4.15271 13.9933 4.37938 13.9933 4.65271V12.8927C13.9933 13.166 13.7733 13.3927 13.4933 13.3927Z"
                        fill="white"
                      />
                    </svg>
                  </span>

              <div className="sm:flex hidden">
              <span
                    onClick={toggleRepeat}
                    className={"repeat " + (repeat ? "active" : "")}
                  >
                    <svg
                      className="mr-[46px]"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.60666 12.226C2.48 12.226 2.35333 12.1793 2.25333 12.0793C1.34 11.1593 0.833328 9.94599 0.833328 8.65932C0.833328 5.98599 2.99999 3.81266 5.66666 3.81266L9.71333 3.82599L8.98666 3.13266C8.78666 2.93932 8.77999 2.62599 8.97333 2.42599C9.16666 2.22599 9.48 2.21932 9.68 2.41266L11.3067 3.97266C11.4533 4.11266 11.5 4.33266 11.4267 4.51932C11.3533 4.70599 11.1667 4.83266 10.96 4.83266L5.66666 4.81932C3.55333 4.81932 1.83333 6.54599 1.83333 8.66599C1.83333 9.68599 2.23333 10.6527 2.96 11.3793C3.15333 11.5727 3.15333 11.8927 2.96 12.086C2.86 12.1793 2.73333 12.226 2.60666 12.226Z"
                        fill="white"
                      />
                      <path
                        d="M6.66666 15.2727C6.53999 15.2727 6.41999 15.226 6.31999 15.1327L4.69333 13.5727C4.54666 13.4327 4.49999 13.2127 4.57333 13.026C4.65333 12.8393 4.83999 12.7393 5.03999 12.7127L10.34 12.726C12.4533 12.726 14.1733 10.9993 14.1733 8.87933C14.1733 7.85933 13.7733 6.89266 13.0467 6.166C12.8533 5.97266 12.8533 5.65266 13.0467 5.45933C13.24 5.266 13.56 5.266 13.7533 5.45933C14.6667 6.37933 15.1733 7.59266 15.1733 8.87933C15.1733 11.5527 13.0067 13.726 10.34 13.726L6.29333 13.7127L7.01999 14.406C7.21999 14.5993 7.22666 14.9127 7.03333 15.1127C6.92666 15.2193 6.79999 15.2727 6.66666 15.2727Z"
                        fill="white"
                      />
                      <path
                        d="M8.16667 11.0527C7.89334 11.0527 7.66667 10.826 7.66667 10.5527V8.29267L7.54 8.43267C7.35334 8.63934 7.04 8.65267 6.83334 8.47267C6.62667 8.29267 6.61334 7.97267 6.79334 7.766L7.79334 6.65267C7.93334 6.49934 8.15334 6.446 8.34667 6.51934C8.54 6.59934 8.66667 6.77934 8.66667 6.99267V10.5593C8.66667 10.8327 8.44 11.0527 8.16667 11.0527Z"
                        fill="white"
                      />
                    </svg>
                  </span>
              </div>
                </div>
              </div>
              <audio
                onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
                onCanPlay={(e) => setDur(e.target.duration)}
                onEnded={handleEnd}
                ref={audio}
                type="audio/mpeg"
                preload="true"
                src={songslist[currentSong].fileUrl}
              />

              <div className="sm:flex hidden">
                <div className=" h-1 bg-white/[0.04] w-[749px] rounded relative">
                  <input
                    type="range"
                    className="opacity-0 absolute w-full h-1  hidden md:block"
                    onChange={handleProgress}
                    value={dur ? (currentTime * 100) / dur : 0}
                  />
                  <div
                    className="bg-[#FACD66] h-full rounded player"
                    style={{ width: currentTime + "%" }}
                  ></div>
                  <div
                    className="h-3 w-3 rounded-full border border-white absolute top-1/2 -translate-x-1/2 -translate-y-1/2 p-0.5"
                    style={{ left: currentTime + "%" }}
                  >
                    <div className="h-full w-full rounded-full bg-[#FACD66] shadow-[0_0_8px_rgba(0,0,0,0.92)]"></div>
                  </div>
                </div>
              </div>
            </div>
           <div className="sm:flex hidden">
           <div className="flex items-center">
              <svg
                width="12"
                height="14"
                viewBox="0 0 12 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.515 0.835006C9.675 0.370006 8.6025 0.490006 7.5075 1.17251L5.3175 2.54501C5.1675 2.63501 4.995 2.68751 4.8225 2.68751H4.125H3.75C1.935 2.68751 0.9375 3.68501 0.9375 5.50001V8.50001C0.9375 10.315 1.935 11.3125 3.75 11.3125H4.125H4.8225C4.995 11.3125 5.1675 11.365 5.3175 11.455L7.5075 12.8275C8.1675 13.24 8.8125 13.4425 9.4125 13.4425C9.8025 13.4425 10.1775 13.3525 10.515 13.165C11.3475 12.7 11.8125 11.7325 11.8125 10.4425V3.55751C11.8125 2.26751 11.3475 1.30001 10.515 0.835006Z"
                  fill="#EFEEE0"
                />
              </svg>

              <div
                className="volume-wrapper w-[160px] h-1 bg-white/[0.04] rounded hover:cursor-pointer ml-[12.9px]"
                onClick={handleClick}
              >
                <div
                  className="bg-[#FACD66] h-full rounded"
                  style={{ width: volume * 100 + "%" }}
                ></div>
              </div>
            </div>
           </div>
          </div>
        </div>

        <div className="plsoptions"></div>
      </div>
    </>
  );
}

export default Controls;
