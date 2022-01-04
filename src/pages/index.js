import * as React from "react"

import SwiperCore, {
  Autoplay,
  EffectFade,
  Pagination,
  Navigation
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import AutoHeight from 'react-auto-height'


// import Swiper core and required modules


SwiperCore.use([Autoplay, EffectFade, Pagination, Navigation]);


const homePageSwitch = (slide) => {
  switch (slide) {

    case 1:
      return <div className="  bg-zinc-100 w-1/2 mx-auto h-56 rounded-xl shadow-inner"><h1 className="mt-24 text-center my-auto">Roadmap.pdf</h1></div>;
    case 2:
      return <Swiper
        slidesPerView={1}
        className=" h-56 w-1/2 mx-auto rounded-2xl shadow-inner "
        navigation
      >
        <SwiperSlide className="h-56 w-3/4 text-center shadow-inner bg-zinc-100"><p className="mt-24">Product 1</p></SwiperSlide>
        <SwiperSlide className=" h-56 text-center bg-zinc-100 shadow-inner "><p className="mt-24">Product 2</p></SwiperSlide>
        <SwiperSlide className=" h-56 text-center bg-zinc-100 shadow-inner"><p className="mt-24">Product 3</p></SwiperSlide>
      </Swiper>;
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

          <p className="text-black m-3 uppercase text-xs md:text-md text-large text-center w-3/4 mx-auto"><b>sign up to receive information and updates on upcoming releases, products, and other news.</b></p>
          <div className="mx-auto flex justify-center">
            <div className=" w-3/4">
              <input type="text" id="fname" placeholder="YOUR EMAIL" className="h-3/4 shadow border text-center rounded w-full py-2 px-3 text-gray-700 appearance-none leading-tight focus:outline-none focus:shadow-outline w-50" ></input>
            </div>
          </div>
          <div className="w-1/2 mx-auto l:w-1/5 rounded-full whitespace-nowrap pb-1 outline outline-2 font-bold text-xs my-auto pl-4 pr-4 pt-1 text-center mt-3 " onClick={() => props.setHeaderShow(false)}>SIGN UP</div>

        </div>
      }
    </>
  )
}
// markup
const IndexPage = () => {
  const [headerShow, setHeaderShow] = React.useState(true)
  const [slide, setSlide] = React.useState(0)
  

  return (
    <main className="container mx-auto homepage">
      <title>Home Page</title>
      <div className="grid grid-cols-1 w-3/4 md:w-1/3 bg-white rounded-3xl mx-auto shadow-lg">

        <img className="mt-10 w-1/2 mx-auto" src="otb-grain.svg" />
      
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
