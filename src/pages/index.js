import * as React from "react";
import { useState } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Pagination,
  Navigation,
} from "swiper";
import { useForm, ValidationError } from "@formspree/react";

import { Helmet } from "react-helmet";
import { navigate } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

import DOMPurify from "dompurify";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import videoOne from "../assets/1.mp4";
import videoTwo from "../assets/2.mp4";
import videoThree from "../assets/3.mp4";

import $ from "jquery";

// import Swiper core and required modules

SwiperCore.use([Autoplay, EffectFade, Pagination, Navigation]);

const homePageSwitch = (slide) => {
  switch (slide) {
    case 2:
      return (
        <Swiper
          slidesPerView={1}
          className="w-3/4 mx-auto rounded-2xl shadow-inner "
          navigation
          loop={true}
        >
          <SwiperSlide className="h-1/2 w-3/4 text-center shadow-inner bg-white">
            <video id="video" playsInline autoPlay loop muted src={videoOne} />{" "}
            <p className=" text-center uppercase text-xs">LS3001</p>
          </SwiperSlide>
          <SwiperSlide className="h-1/2 w-3/4 text-center shadow-inner bg-white">
            <video id="video" playsInline autoPlay loop muted src={videoTwo} />
            <p className=" text-center uppercase text-xs">SS3001</p>
          </SwiperSlide>
          <SwiperSlide className="h-1/2 w-3/4 text-center shadow-inner bg-white">
            <video
              id="video"
              playsInline
              autoPlay
              loop
              muted
              src={videoThree}
            />
            <p className=" text-center uppercase text-xs"> HD4151</p>
          </SwiperSlide>
        </Swiper>
      );
    case 3:
      return <ContactForm></ContactForm>;
    default:
      return <p> </p>;
  }
};

function SignupForm(props) {
  const [submitText, setSubmitText] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "https://otbatl.us20.list-manage.com/subscribe/post-json?u=5ff1c86d00f08d5be0c5da5a7&id=29e71e047d&c=?",
      data: $("#mc-embedded-subscribe-form").serialize(),
      cache: false,
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      success: (res) => {
        // localStorage.setItem('submitted-form', 'true')
        if (res.result === "error") {
          console.log(res);
          if (new String(res.msg).includes("is already subscribed")) {
            props.setHeaderShow(false);
          } else {
            setSubmitText({ __html: DOMPurify.sanitize(res.msg) });
          }
        } else {
          props.setHeaderShow(false);
        }
      },
      error: (error) => {
        alert(error);
        setSubmitText({ __html: DOMPurify.sanitize(error.msg) });
      },
    });
  };
  return (
    <>
      {submitText && (
        <p
          className="text-center uppercase text-xs m-5 font-bold w-1/2 mx-auto"
          dangerouslySetInnerHTML={submitText}
        ></p>
      )}
      <div id="mc_embed_signup">
        <form
          onSubmit={handleSubmit}
          id={"mc-embedded-subscribe-form"}
          className="w-3/4 mx-auto"
        >
          <div id="mc_embed_signup_scroll">
            <div className="mc-field-group">
              <input
                type="email"
                placeholder="YOUR EMAIL"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                className="h-1/2 p-1 mx-auto text-xs shadow border flex text-center rounded align-middle  text-gray-700 appearance-none leading-tight focus:outline-none focus:shadow-outline w-3/4"
              />
            </div>
            <div id="mce-responses" className="clear foot">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: "none" }}
              />
              <div
                className="response"
                id="mce-success-response"
                style={{ display: "none" }}
              />
            </div>{" "}
            {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
            <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_5ff1c86d00f08d5be0c5da5a7_29e71e047d"
                tabIndex={-1}
                defaultValue
              />
            </div>
            <div className="optionalParent">
              <div className="clear foot">
                <input
                  type="submit"
                  className="w-1/2 flex text-center mx-auto rounded-md l:w-1/5 whitespace-nowrap pb-1 text-white bg-slate-900 outline outline-2 font-bold text-xs my-auto pt-1 justify-center mt-3"
                  value="SIGN UP"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  defaultValue="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

const IndexContent = (props) => {
  return (
    <>
      {props.headerShow && (
        <div className="mx-auto mt-10 mb-10">
          <p className="text-black m-3 uppercase text-xs md:text-md text-large text-center rounded-md w-3/4 mx-auto">
            <b>
              sign up to receive information and updates on upcoming releases,
              products, and other news.
            </b>
          </p>
          <SignupForm setHeaderShow={props.setHeaderShow} />
        </div>
      )}
    </>
  );
};

const HomepageContent = (props) => {
  return <> {homePageSwitch(props.slide)}</>;
};

const NavigateContent = (props) => {
  return (
    <>
      {!props.headerShow && (
        <div className="align-center text-center bt-7 mt-7 ">
          <p
            onClick={() => props.setSlide(2)}
            className={`cursor-pointer align-center font-bold ${
              props.slide === 2 ? "text-stone-400 " : "text-stone-600"
            } `}
          >
            CATALOGUE
          </p>
          <p
            onClick={() => props.setSlide(3)}
            className={`cursor-pointer align-center font-bold  fill-stone-600 ${
              props.slide === 3 ? "text-stone-400 " : "text-stone-600"
            }`}
          >
            CONTACT US
          </p>
        </div>
      )}{" "}
    </>
  );
};

function ContactForm() {
  const [state, handleSubmit] = useForm("xnqwpqnd");
  if (state.succeeded) {
    return (
      <p className="text-center uppercase text-sm font-bold w-1/2 mx-auto">
        Thanks for contacting us!
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      id={"mc-embedded-subscribe-form"}
      className="w-3/4 mx-auto"
    >
      <label className="uppercase font-bold text-xs" htmlFor="mce-FNAME">
        YOUR NAME{" "}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        name="FNAME"
        id="mce-FNAME"
      />{" "}
      <br />
      <label className="uppercase font-bold text-xs" htmlFor="mce-EMAIL">
        Email Address
      </label>
      <input
        type="email"
        name="EMAIL"
        className="required email shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="mce-EMAIL"
      />
      <label className="uppercase font-bold text-xs" htmlFor="mce-MMERGE3">
        MESSAGE{" "}
      </label>
      <input
        type="text"
        className="required email shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        name="MMERGE3"
        id="mce-MMERGE3"
      />
      <input
        type="submit"
        className="w-1/2 flex text-center mx-auto rounded-md l:w-1/5 whitespace-nowrap pb-1 text-white bg-slate-900 outline outline-2 font-bold text-xs my-auto pt-1 justify-center mt-3"
        value="CONTACT US"
        name="subscribe"
        id="mc-embedded-subscribe"
      />
    </form>
  );
}

function LoopObject() {
  return (
    <div className="absolute backgroundImage  z-0">
      <motion.svg
        className="h-1/2 "
        xmlns="http://www.w3.org/2000/svg"
        initial={false}
        viewBox="0 0 1431.09 625"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <motion.path
              className="cls-1 overflow-hidden"
              strokeWidth="0"
              initial={{
                rotate: -15,
                skew: 0,
              }}
              animate={{
                rotate: 0,
                skew: 25,
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 10,
              }}
              d="M1424.91,312.74c-3.53-42.57-59.15-70-144.28-106.49C954.51,66.53,791.45-3.33,610.74,7,475.47,14.73,386.61,48.63,226,110.06,134.56,145,1.34,202,6.13,261.21,8,284.89,31.66,303,53.89,315.3,156,370.69,351.35,474.86,492.08,536.57c15.09,6.61,35.12,15.18,61.06,24.7,16.08,5.9,142.1,51.64,250,57.22,115.07,6,212.86-40.74,350.4-106.5C1304,440.05,1430.46,379.59,1424.91,312.74Z"
            />
            <motion.path
              className="cls-2"
              initial={{
                rotate: -15,
                skew: 0,
              }}
              animate={{
                rotate: 0,
                skew: 25,
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 10,
              }}
              strokeWidth="0"
              d="M968,436.42c-137.59,17.46-171.12-10.73-350.4-85.89C565.45,329.45,517,311.57,435.54,275c-86.56-38.9-110-53.8-109.93-72.15.07-32.75,74.81-58,116.8-72.14,237.48-66.28,250.58-10.95,584,109.93,102.71,38.31,142.25,49.81,144.28,75.58C1174.54,364.93,1040.06,413.36,968,436.42Z"
            />
          </g>
        </g>
      </motion.svg>
    </div>
  );
}

// markup
const IndexPage = () => {
  const [headerShow, setHeaderShow] = React.useState(true);
  const [slide, setSlide] = React.useState(0);

  React.useEffect(() => {
    if (document.getElementById("video")) {
      let video = document.getElementById("video");
      video.play();
    }
    if (localStorage.getItem("submitted-form") === "true") {
      setHeaderShow(false);
    }
  });

  return (
    <main className="container xs:overflow-hidden mx-auto homepage drop-shadow-2xl">
      <Helmet>
        ???<title>Outside the Box | HOME</title>???
        <meta
          name="description"
          content="OTB is an apparel manufacturer, designer and distributor of premier blank apparel."
        />
        <meta name="twitter:title" content="Outside the Box | Home" />
        <meta
          name="twitter:description"
          content="OTB is an apparel manufacturer, designer and distributor of premier blank apparel."
        />
        <meta property="og:title" content="Outside the Box | Home" />
        <meta
          property="og:description"
          content="OTB is an apparel manufacturer, designer and distributor of premier blank apparel."
        />
        <meta property="og:image" content="/background.jpg" />
        <meta property="og:url" content="otbatl.us" />
        <meta property="og:site_name" content="Outside the Box | Home" />
        <link rel="icon" type="image/svg" href="otb-grain.svg" sizes="16x16" />
        <meta property="og:locale" content="en_US" />
      </Helmet>
      ???<title>OTB.ATL | HOME </title>
      <LoopObject className="" />
      <div className="grid grid-cols-1 z-10 w-3/4 md:w-1/3 bg-white rounded-3xl mx-auto drop-shadow-2xl shadow-black ">
        <img className="mt-10 mb-10 w-1/4 mx-auto" src="otb-grain.svg" />

        <IndexContent
          headerShow={headerShow}
          setHeaderShow={setHeaderShow}
        ></IndexContent>
        <HomepageContent slide={slide}></HomepageContent>
        <NavigateContent
          headerShow={headerShow}
          slide={slide}
          setSlide={setSlide}
        ></NavigateContent>

        <a href="https://www.instagram.com/outsidethebox.atl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="mx-auto m-10"
          >
            <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
          </svg>
        </a>
      </div>
    </main>
  );
};

export default IndexPage;
