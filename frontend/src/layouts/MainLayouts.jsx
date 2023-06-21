import React from 'react'
import {Outlet} from 'react-router-dom'
// import Footer from './utilis/Footer'
const MainLayouts = () => {
  return (
    <div>
        <Outlet/>
        {/* <Footer/> */}
    </div>
  )
}

export default MainLayouts