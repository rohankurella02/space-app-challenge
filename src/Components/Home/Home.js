import React from 'react'
import Navbar from '../Navbar/Navbar'
import Weather from '../Weather/Weather'

function Home() {


  return (
    <div className='home'>
      <Navbar />
      <Weather />
    </div>
  )
}

export default Home