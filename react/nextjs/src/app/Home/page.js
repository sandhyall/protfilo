import React from 'react'
import Navbar from '../Component/Navbar/page'
import Hero from '../Component/Hero/page' 
import Feature from '../Feature/page'
import Pageaboutus from '../Component/pageaboutus/page'
import Pageproject from '../Component/Pageproject/page'
import Contactus from '../Contact us/page'

const Home=()=> {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <Feature/>
     <Pageaboutus/>
     <Pageproject/>
     <Contactus/>
    </div>
  )
}

export default Home