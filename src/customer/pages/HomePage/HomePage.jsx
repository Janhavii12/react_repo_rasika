import React from 'react'
import MainCarousel from '../../components/HomeCarosel/MainCarousel'
// import HomeSectionCard from '../../components/HomeSectionCard/HomeSectionCard'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'
import { data } from '../../../Data/data'


const HomePage = () => {
  return (
    <div>
   <MainCarousel/>

   <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
   <HomeSectionCarosel t={data}/>

   </div>
    </div>
  )
}

export default HomePage
