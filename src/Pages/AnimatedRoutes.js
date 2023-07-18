import React from "react"
import { Routes, Route, useLocation } from "react-router-dom"

import Home from "./Home"
import Currently from "./Currently"
import Current from "./Current"
import Collections from "./Collections"
import { AnimatePresence } from "framer-motion"
import Search from "./Search"


function AnimatedRoutes() {
  const location = useLocation()
  return (
    <div>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/' exact element={<Home />} />

          <Route path='/collections' element={<Collections />} />
          <Route path='/current' element={<Current/>}/>

          <Route path='/currently' element={<Currently />} />
          <Route path='/lol' element={<Search />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default AnimatedRoutes
