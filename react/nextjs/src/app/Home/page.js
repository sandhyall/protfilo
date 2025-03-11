import React from 'react'
import Navbar from '../Component/Navbar/page'
import Hero from '../Component/Hero/page' 
import Feature from '../Feature/page'
import Pageaboutus from '../Component/pageaboutus/page'

const Home=()=> {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <Feature/>
     <Pageaboutus/>
     
    </div>
  )
}

export default Home