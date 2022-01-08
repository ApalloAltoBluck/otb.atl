import * as React from "react"
import { useState } from "react"
import SwiperCore, {
  Autoplay,
  EffectFade,
  Pagination,
  Navigation
} from "swiper";

import { Helmet } from "react-helmet"

import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion"


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import videoOne from '../assets/1.mp4';
import videoTwo from '../assets/2.mp4';
import videoThree from '../assets/3.mp4';


// import Swiper core and required modules


SwiperCore.use([Autoplay, EffectFade, Pagination, Navigation]);


const homePageSwitch = (slide) => {

  switch (slide) {

    case 1:
      return <div className="  bg-zinc-100 w-1/2 mx-auto h-56 rounded-xl shadow-inner"><h1 className="mt-24 text-center my-auto">Roadmap.pdf</h1></div>;
    case 2:
      return <Swiper
        slidesPerView={1}
        className="w-3/4 mx-auto rounded-2xl shadow-inner "
        navigation
        loop={true}
      >
        <SwiperSlide className="h-1/2 w-3/4 text-center shadow-inner bg-white"><video id='video' playsInline autoPlay loop muted src={videoOne} /> <p className=" text-center uppercase text-xs">LS3001</p></SwiperSlide>
        <SwiperSlide className="h-1/2 w-3/4 text-center shadow-inner bg-white"><video id='video' playsInline autoPlay loop muted src={videoTwo} /><p className=" text-center uppercase text-xs">SS3001</p></SwiperSlide>
        <SwiperSlide className="h-1/2 w-3/4 text-center shadow-inner bg-white"><video id='video' playsInline autoPlay loop muted src={videoThree} /><p className=" text-center uppercase text-xs"> HD4151</p></SwiperSlide>
      </Swiper>;
    case 3:
      return(<form name="contact" method="POST" data-netlify="true" className="rounded px-8 pt-6 mb-4">
      <p>
        <label className="uppercase font-bold text-xs">Your Name <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" name="name" /></label>   
      </p>
      <p>
        <label className="uppercase font-bold text-xs">Your Email <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" /></label>
      </p>
      <p>
        <label className="uppercase font-bold text-xs">Message <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="message"></textarea></label>
      </p>
      <p>
        <button className="bg-black text-xs rounded-2xl h-1/4 w-32 mx-auto text-white font-bold py-2 px-4 align-middle focus:outline-none uppercase focus:shadow-outline" type="submit">Send</button>
      </p>
    </form>)
    default:
      return <p> </p>;
  }
}

const HomepageContent = (props) => {
  return (
    <> {homePageSwitch(props.slide)}</>
  )
}

const NavigateContent = (props) => {
  return (<>
    {!props.headerShow &&
      <div className="align-center text-center bt-7 mt-7 ">
        <p onClick={() => props.setSlide(1)} className={`cursor-pointer align-center font-bold ${props.slide === 1 ? 'text-stone-400 ' : "text-stone-600"}  `}>ROADMAP</p>
        <p onClick={() => props.setSlide(2)} className={`cursor-pointer align-center font-bold ${props.slide === 2 ? 'text-stone-400 ' : "text-stone-600"} `}>CATALOGUE</p>
        <p onClick={() => props.setSlide(3)} className={`cursor-pointer align-center font-bold  fill-stone-600 ${props.slide === 3 ? 'text-stone-400 ' : "text-stone-600"}`}>CONTACT US</p>
      </div>} </>
  )
}
const IndexContent = (props) => {
  return (

    <>
      {props.headerShow &&
        <div className="mx-auto mt-10 mb-10"  >

          <p className="text-black m-3 uppercase text-xs md:text-md text-large text-center rounded-fill w-3/4 mx-auto"><b>sign up to receive information and updates on upcoming releases, products, and other news.</b></p>
          <div className="mx-auto flex justify-center">
            <div className=" w-3/4">
              <input type="text" id="fname" placeholder="YOUR EMAIL" className="h-3/4 shadow border text-center rounded w-full py-2 px-3 text-gray-700 appearance-none leading-tight focus:outline-none focus:shadow-outline w-50" ></input>
            </div>
          </div>
          <div className="w-1/2 mx-auto l:w-1/5 whitespace-nowrap pb-1 outline outline-2 font-bold text-xs my-auto pl-4 pr-4 pt-1 text-center mt-3 " onClick={() => props.setHeaderShow(false)}>SIGN UP</div>

        </div>
      }
    </>
  )
}

function LoopObject() {
  return (
    <div className="absolute backgroundImage  z-0">
      <motion.svg className="h-1/2 " xmlns="http://www.w3.org/2000/svg" initial={false} viewBox="0 0 1431.09 625">
        <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1">
          <motion.path className="cls-1 overflow-hidden"
            strokeWidth="0"
            initial={{
              rotate: -15,
              skew: 0
            }}
            animate={{
              rotate: 0,
              skew: 25


            }}

            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 10,

            }}
            d="M1424.91,312.74c-3.53-42.57-59.15-70-144.28-106.49C954.51,66.53,791.45-3.33,610.74,7,475.47,14.73,386.61,48.63,226,110.06,134.56,145,1.34,202,6.13,261.21,8,284.89,31.66,303,53.89,315.3,156,370.69,351.35,474.86,492.08,536.57c15.09,6.61,35.12,15.18,61.06,24.7,16.08,5.9,142.1,51.64,250,57.22,115.07,6,212.86-40.74,350.4-106.5C1304,440.05,1430.46,379.59,1424.91,312.74Z" />
          <motion.path
            className="cls-2"
            initial={{
              rotate: -15,
              skew: 0


            }}
            animate={{
              rotate: 0,
              skew: 25

            }}

            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 10

            }}
            strokeWidth="0"
            d="M968,436.42c-137.59,17.46-171.12-10.73-350.4-85.89C565.45,329.45,517,311.57,435.54,275c-86.56-38.9-110-53.8-109.93-72.15.07-32.75,74.81-58,116.8-72.14,237.48-66.28,250.58-10.95,584,109.93,102.71,38.31,142.25,49.81,144.28,75.58C1174.54,364.93,1040.06,413.36,968,436.42Z" /></g>
        </g>
      </motion.svg>
    </div>
  )
}


// markup
const IndexPage = () => {
  const [headerShow, setHeaderShow] = React.useState(true)
  const [slide, setSlide] = React.useState(0)




  React.useEffect(() => {
    if (document.getElementById('video')) {
      let video = document.getElementById('video');
      video.play();

    }
  })

  return (
    <main className="container xs:overflow-hidden mx-auto homepage drop-shadow-2xl">
      <Helmet>‍
        <title>Outside the Box | HOME</title>‍
        <meta name="description" content="OTB is an apparel manufacturer, designer and distributor of premier blank apparel." />
        <meta name="twitter:title" content="Outside the Box | Home" />
        <meta name="twitter:description" content="OTB is an apparel manufacturer, designer and distributor of premier blank apparel." />
        <meta property="og:title" content="Outside the Box | Home"/>
        <meta property="og:description" content="OTB is an apparel manufacturer, designer and distributor of premier blank apparel." />
        <meta property="og:image" content={'./background.jpg'} />
        <meta property="og:url" content="otbatl.us" />
        <meta property="og:site_name" content="Outside the Box | Home" />
        <link rel="icon" type="image/svg" href="otb-grain.svg" sizes="16x16" />
        <meta property="og:locale" content="en_US" />
      </Helmet>‍
      <title>OTB.ATL | HOME </title>
      <LoopObject className="" />

      <div className="grid grid-cols-1 z-10 w-3/4 md:w-1/3 bg-white rounded-3xl mx-auto drop-shadow-2xl shadow-black ">

        <img className="mt-10 mb-10 w-1/4 mx-auto" src="otb-grain.svg" />

        <IndexContent headerShow={headerShow} setHeaderShow={setHeaderShow}></IndexContent>
        <HomepageContent slide={slide}></HomepageContent>
        <NavigateContent headerShow={headerShow} slide={slide} setSlide={setSlide}></NavigateContent>

        <a href="https://www.instagram.com/outsidethebox.atl">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="24" height="24"
            viewBox="0 0 24 24" className="mx-auto m-10"
          >
            <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path></svg>
        </a>
      </div>


    </main>
  )
}

export default IndexPage
