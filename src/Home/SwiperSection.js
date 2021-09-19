import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation } from 'swiper'
import 'swiper/swiper-bundle.css'
import Button from '../Components/Button'

SwiperCore.use([Pagination, Navigation])

export default function SwiperSection() {
  const apiURL = 'https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details'
  const [slideData, setSlideData] = useState([])

  useEffect(() => {
    axios.get(apiURL, {'accept': 'application/json'})
    .then(res => setSlideData(res.data.Details)) 
  }, [])

  return (
    <>
    <Swiper pagination navigation>
      {slideData.map((mySlide, index) => {
        return(
          <SwiperSlide key={`slide-${index}`}>
            <img src={`${mySlide.ImageUrl}`} alt={`slide-${index}`}/>
            <div className='section1-box1'>
              <div className='box1-title white'>{`${mySlide.Title}`}</div>
              <p className='white'>{`${mySlide.Subtitle}`}</p>
              <Button size={'lrg'} colour={'blue'} text={'Contact Us'} />
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
    </> 
  )
}