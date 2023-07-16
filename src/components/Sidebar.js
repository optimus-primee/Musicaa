import React, { useEffect, useState } from "react";
import APIKit from "./spotify";
import Logo from "../Images/logo.svg";
import { SidebarData } from "../data/SidebarData";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai"

function Sidebar() {
  const [image, setImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLAY3C19kL0nV2bI_plU3_YFCtra0dpsYkg&usqp=CAU"
  );
  useEffect(() => {
    APIKit.get("me/playlists").then((response) => {
      console.log(response.data);
    });
  }, []);
  const [navbar, setNavbar] = useState(false);

  const showSidebar = () => setNavbar(!navbar);

  return (
    <>
      <div className="fixed  z-10 ">
        <IconContext.Provider value={{ color: "#EFEEE040", size: "20px" }}>
          <div className="sm:hidden">
            <span className="nav"></span>
          </div>
          <div className="flex items-center gap-2">
            <img className="ml-[27px] mt-6" src={Logo} alt="" />
            <div className="sm:hidden flex mt-6 ">
              <IconContext.Provider
                value={{ size: "30px", color: "#EFEEE040" }}
              >
                <HiMenuAlt4 onClick={showSidebar} />
              </IconContext.Provider>
            </div>
          </div>
          <div className=" sm:hidden ">
            <nav className={navbar ? " nav-menu active" : " nav-menu"}>
              <ul
                className="block sm:flex sm:flex-row gap-[74px] px-6 "
                
              >
                <li className="flex justify-end ">
                <AiOutlineClose className="text-white mt-10 text-[23px] " />
              </li>
                {SidebarData.map((item, index) => {
                  return (
                    <li className="pt-8 active flex gap-5 text-[#EFEEE040] font-bold" key={index}
                    onClick={showSidebar}>
                      <Link to={item.path}>{item.icon}</Link>
                      <h6>{item.title}</h6>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          <nav className="hidden xl:block">
            <ul className=" bg-[#1A1E1F] px-4 rounded-[32px] pb-8 ml-5 mt-[39px]">
              {SidebarData.map((item, index) => {
                return (
                  <li className="pt-8 active" key={index}>
                    <Link to={item.path}>{item.icon}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div>
            <ul className="hidden xl:block bg-[#1A1E1F] px-4 pt-[26px] pb-[27px] ml-5 rounded-[32px] mt-5 ">
              <li className="">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.25">
                    <path
                      d="M11 1.83333C8.59837 1.83333 6.64587 3.78583 6.64587 6.18749C6.64587 8.54333 8.48837 10.45 10.89 10.5325C10.9634 10.5233 11.0367 10.5233 11.0917 10.5325C11.11 10.5325 11.1192 10.5325 11.1375 10.5325C11.1467 10.5325 11.1467 10.5325 11.1559 10.5325C13.5025 10.45 15.345 8.54333 15.3542 6.18749C15.3542 3.78583 13.4017 1.83333 11 1.83333Z"
                      fill="#EFEEE0"
                    />
                    <path
                      d="M15.6566 12.9708C13.0991 11.2658 8.9283 11.2658 6.35246 12.9708C5.1883 13.75 4.54663 14.8042 4.54663 15.9317C4.54663 17.0592 5.1883 18.1042 6.3433 18.8742C7.62663 19.7358 9.3133 20.1667 11 20.1667C12.6866 20.1667 14.3733 19.7358 15.6566 18.8742C16.8116 18.095 17.4533 17.05 17.4533 15.9133C17.4441 14.7858 16.8116 13.7408 15.6566 12.9708Z"
                      fill="#EFEEE0"
                    />
                  </g>
                </svg>
              </li>
              <li className="pt-6">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.53505 0.833336C11.8107 0.833336 13.6667 2.6575 13.6667 4.90334V9.29417H8.07078C7.66974 9.29417 7.35263 9.60584 7.35263 10C7.35263 10.385 7.66974 10.7058 8.07078 10.7058H13.6667V15.0875C13.6667 17.3333 11.8107 19.1667 9.51639 19.1667H4.97436C2.68936 19.1667 0.833374 17.3425 0.833374 15.0967V4.9125C0.833374 2.6575 2.69868 0.833336 4.98369 0.833336H9.53505ZM15.9952 6.83769C16.2702 6.55352 16.7194 6.55352 16.9944 6.82852L19.6711 9.49602C19.8086 9.63352 19.8819 9.80769 19.8819 10.0002C19.8819 10.1835 19.8086 10.3669 19.6711 10.4952L16.9944 13.1627C16.8569 13.3002 16.6736 13.3735 16.4994 13.3735C16.3161 13.3735 16.1327 13.3002 15.9952 13.1627C15.7202 12.8877 15.7202 12.4385 15.9952 12.1635L17.4619 10.706H13.6669V9.29435H17.4619L15.9952 7.83685C15.7202 7.56185 15.7202 7.11269 15.9952 6.83769Z"
                    fill="#EFEEE0"
                  />
                </svg>
              </li>
            </ul>
          </div>
        </IconContext.Provider>
      </div>
    </>
  );
}

export default Sidebar;
