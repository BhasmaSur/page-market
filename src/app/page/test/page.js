"use client"
import React from 'react'
import Head from 'next/head'

import SpeakerCard from '../(components)/speaker-card'
import NumbersCard from '../(components)/numbers-card'
import EventCard from '../(components)/event-card'
import Slide from '../(components)/slide'
import Footer from '../(components)/footer'
import Navigation from '../(components)/navigation'

const HomeTest = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Marketing Event Page</title>
          <meta property="og:title" content="Marketing Event Page" />
        </Head>
        <Navigation></Navigation>
        <main className="home-main">
          <div className="home-hero section-container">
            <div className="home-max-width max-content-container">
              <div className="home-content-container">
                <h1 className="home-text Heading1">
                  <span>
                    THE MOST INSIGHTFUL
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text02">MARKETING CONFERENCE </span>
                  <span>IN EUROPE</span>
                </h1>
                <span className="home-text04">
                  <span>
                    GET YOUR TICKETS AT A HALF PRICE UNTIL 10.10.2022.
                  </span>
                  <br></br>
                  <span>HURRY UP, LIMITED NUMBERS AVAILABLE.</span>
                </span>
                <div className="home-btns-container">
                  <button className="home-primary button-primary button-lg button">
                    register now
                  </button>
                  <button className="button button-outline button-lg-border">
                    learn more
                  </button>
                </div>
              </div>
              <div className="home-video-container">
                <video
                  src
                  muted="true"
                  poster="/rectangle%205-1200w.png"
                  autoPlay="true"
                  controls="true"
                  className="home-video"
                ></video>
              </div>
            </div>
            <div className="home-blue-background"></div>
          </div>
          <div className="home-sponsors section-container">
            <div className="home-max-width1 max-content-container">
              <span className="home-text07">
                <span></span>
                <span>proudly sponsored by</span>
              </span>
              <div className="home-container1">
                <img
                  alt="image"
                  src="/group%207-1200w.png"
                  className="home-image"
                />
                <img
                  alt="image"
                  src="/group%208-1200w.png"
                  className="home-image1"
                />
                <img
                  alt="image"
                  src="/group%209-1200w.png"
                  className="home-image2"
                />
                <img
                  alt="image"
                  src="/group%2010-1200w.png"
                  className="home-image3"
                />
                <img
                  alt="image"
                  src="/group%2011-1200w.png"
                  className="home-image4"
                />
                <img
                  alt="image"
                  src="/group%2012-1200w.png"
                  className="home-image5"
                />
              </div>
            </div>
          </div>
          <div className="home-speakers section-container">
            <div className="home-max-width2 max-content-container">
              <div className="home-heading-container">
                <span className="home-text10">
                  16 speakers from 7 countries and 3 continents
                </span>
                <h1 className="home-text11 Heading2">meet our speakers</h1>
              </div>
              <div className="home-speakers-container">
                <SpeakerCard></SpeakerCard>
                <SpeakerCard
                  role="digital marketing associate @ WPP"
                  lastName="Simpson"
                  firstName="Mellisa"
                  imageSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBlb3BsZXxlbnwwfHx8fDE2NDM3MDU1MTE&amp;ixlib=rb-1.2.1&amp;h=300"
                ></SpeakerCard>
                <SpeakerCard
                  role="VP OF Marketing @ BUZZFEED"
                  lastName="tevlenko"
                  firstName="alina"
                  imageSrc="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fHBlb3BsZXxlbnwwfHx8fDE2NDM3MDU1MTE&amp;ixlib=rb-1.2.1&amp;h=300"
                ></SpeakerCard>
                <SpeakerCard
                  role="HEAD OF DIGITAL @ HUBSPOT"
                  lastName="iprovich"
                  firstName="gregor"
                  imageSrc="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI5fHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&amp;ixlib=rb-1.2.1&amp;h=300"
                ></SpeakerCard>
                <SpeakerCard
                  role="marketing officer @ salesforce"
                  lastName="daris"
                  firstName="damian"
                  imageSrc="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&amp;ixlib=rb-1.2.1&amp;h=300"
                ></SpeakerCard>
                <SpeakerCard
                  role="social media manager @ vodafone"
                  lastName="warren"
                  firstName="matt"
                  imageSrc="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0N3x8cGVvcGxlfGVufDB8fHx8MTY0MzcwODY5MQ&amp;ixlib=rb-1.2.1&amp;h=300"
                ></SpeakerCard>
                <SpeakerCard
                  role="creative director @ BBDO"
                  lastName="moore"
                  firstName="kathie"
                  imageSrc="https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2OHx8cGVvcGxlfGVufDB8fHx8MTY0MzcwODY5MQ&amp;ixlib=rb-1.2.1&amp;h=300"
                ></SpeakerCard>
                <SpeakerCard
                  role="CMO @ youtube Europe"
                  lastName="chan"
                  firstName="erick"
                  imageSrc="https://images.unsplash.com/photo-1558222218-b7b54eede3f3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwNHx8cGVvcGxlfGVufDB8fHx8MTY0MzcwODY4MQ&amp;ixlib=rb-1.2.1&amp;h=300"
                ></SpeakerCard>
              </div>
            </div>
          </div>
          <div className="home-numbers-banner section-container">
            <div className="home-container2 max-content-container">
              <div className="home-heading-container1">
                <span className="home-text12">
                  Our 12-year conference history in sharing digital marketing
                  insights
                </span>
                <h1 className="home-text13 Heading2">
                  <span>market1 SUMMIT IN NUMBERS</span>
                </h1>
              </div>
              <div className="home-numbers-container">
                <NumbersCard></NumbersCard>
                <NumbersCard
                  text="years"
                  number="12"
                  imageSrc="/interface%20time%20reset-200h.png"
                ></NumbersCard>
                <NumbersCard
                  text="total events"
                  number="64"
                  imageSrc="/interface%20calendar%20favorite-200h.png"
                ></NumbersCard>
                <NumbersCard
                  text="companies"
                  number="15,070"
                  imageSrc="/shopping%20bag%20suit%20case-200h.png"
                ></NumbersCard>
                <NumbersCard
                  text="cities"
                  number="14"
                  imageSrc="/travel%20map%20location%20pin-200h.png"
                ></NumbersCard>
                <NumbersCard
                  text="speakers"
                  number="1,071"
                  imageSrc="/computer%20voice%20mail-200h.png"
                ></NumbersCard>
              </div>
            </div>
          </div>
          <div className="home-location">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1564347288827-3e4293543e07?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxiZXJsaW58ZW58MHx8fHwxNjQzNzEzNjQ5&amp;ixlib=rb-1.2.1&amp;w=1500"
              className="home-image6"
            />
            <div className="home-content-container1 section-container">
              <div className="home-container3">
                <span className="home-text15">berlin, germany</span>
                <span className="home-text16">7-8 MARCH 2023</span>
                <div className="home-container4">
                  <span className="home-text17">
                    <span>— mob-x</span>
                  </span>
                  <span className="home-text19">
                    <span>conference</span>
                  </span>
                  <span className="home-text21">
                    <span>center</span>
                  </span>
                </div>
                <div className="home-container5">
                  <span className="home-text23">beautiful, vibrant berlin</span>
                  <span className="home-text24">
                    <span>
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt nostrud
                      amet.
                    </span>
                    <br></br>
                    <span></span>
                    <br></br>
                    <span>
                      Lorem Ipsum, Velit officia consequat duis enim velit
                      mollit. Exercitation veniam consequat sunt nostrud amet.
                    </span>
                  </span>
                  <div className="home-btns-container1">
                    <button className="button-secondary button button-md">
                      register
                    </button>
                    <button className="home-learn-more button button-outline button-md-border">
                      learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-agenda section-container">
            <div className="home-max-width3 max-content-container">
              <div className="home-heading-container2">
                <h1 className="home-text28 Heading2">
                  <span>key events agenda</span>
                </h1>
                <span className="home-text30">
                  more announcements are coming soon
                </span>
              </div>
              <div className="home-events-container">
                <div className="home-column">
                  <div className="home-column-header">
                    <span className="home-text31">
                      <span>tuesday - 7.03</span>
                    </span>
                    <div className="home-line"></div>
                  </div>
                  <EventCard></EventCard>
                  <EventCard
                    title="tik tok or what?"
                    imageSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBlb3BsZXxlbnwwfHx8fDE2NDM3MDU1MTE&amp;ixlib=rb-1.2.1&amp;h=300"
                  ></EventCard>
                  <EventCard
                    title="sales + marketing duo"
                    imageSrc="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fHBlb3BsZXxlbnwwfHx8fDE2NDM3MDU1MTE&amp;ixlib=rb-1.2.1&amp;h=300"
                  ></EventCard>
                  <EventCard
                    title="best practices for more\ndata-driven results"
                    imageSrc="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI5fHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&amp;ixlib=rb-1.2.1&amp;h=300"
                  ></EventCard>
                </div>
                <div className="home-column1">
                  <div className="home-column-header1">
                    <span className="home-text33">
                      <span>wednesday - 8.03</span>
                    </span>
                    <div className="home-line1"></div>
                  </div>
                  <EventCard
                    title="digital marketing strategies"
                    imageSrc="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&amp;ixlib=rb-1.2.1&amp;h=300"
                  ></EventCard>
                  <EventCard
                    title="a new era of social media"
                    imageSrc="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0N3x8cGVvcGxlfGVufDB8fHx8MTY0MzcwODY5MQ&amp;ixlib=rb-1.2.1&amp;h=300"
                  ></EventCard>
                  <EventCard
                    title="growing a remote team"
                    imageSrc="https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2OHx8cGVvcGxlfGVufDB8fHx8MTY0MzcwODY5MQ&amp;ixlib=rb-1.2.1&amp;h=300"
                  ></EventCard>
                  <EventCard
                    title="beyond the metaverse"
                    imageSrc="https://images.unsplash.com/photo-1558222218-b7b54eede3f3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwNHx8cGVvcGxlfGVufDB8fHx8MTY0MzcwODY4MQ&amp;ixlib=rb-1.2.1&amp;h=300"
                  ></EventCard>
                </div>
              </div>
            </div>
          </div>
          <div className="home-workshops">
            <div className="home-content-container2">
              <div className="home-container6">
                <h1 className="home-text35 Heading2">
                  <span>
                    register for
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span className="home-text38">super insightful</span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    workshops for
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>your team</span>
                </h1>
                <span className="home-text44">
                  get early discounts and group discounts
                </span>
                <span className="home-text45">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </span>
                <button className="button button-md button-outline">
                  learn more
                </button>
              </div>
            </div>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxidXNpbmVzc3xlbnwwfHx8fDE2NDM3MzQ3MjI&amp;ixlib=rb-1.2.1&amp;w=1500"
              className="home-image7"
            />
          </div>
          <div className="home-previous-events section-container">
            <div className="home-max-width4 max-content-container">
              <div className="home-heading-container3">
                <h1 className="home-text46 Heading2">
                  <span>previous events</span>
                </h1>
                <span className="home-text48">
                  Take a tour of our previous conferences
                </span>
              </div>
            </div>
            <div data-type="slider" className="home-slider">
              <Slide rootClassName="slide-root-class-name4"></Slide>
              <Slide
                heading="Slide #2"
                rootClassName="slide-root-class-name1"
              ></Slide>
              <Slide
                heading="Slide #3"
                rootClassName="slide-root-class-name"
              ></Slide>
              <Slide
                heading="Slide #4"
                rootClassName="slide-root-class-name3"
              ></Slide>
              <Slide
                heading="Slide #5"
                rootClassName="slide-root-class-name2"
              ></Slide>
            </div>
            <div className="home-slider-controls">
              <div data-action="previousSlide" className="home-go-left">
                <svg viewBox="0 0 1024 1024" className="home-icon">
                  <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
                </svg>
              </div>
              <div data-action="nextSlide" className="home-go-right">
                <svg viewBox="0 0 1024 1024" className="home-icon2">
                  <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
                </svg>
              </div>
            </div>
          </div>
        </main>
        <Footer rootClassName="footer-root-class-name"></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            position: relative;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
          }
          .home-main {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-hero {
            position: relative;
            padding-top: 128px;
          }
          .home-max-width {
            z-index: 1;
            align-items: stretch;
          }
          .home-content-container {
            flex: 1;
            display: flex;
            max-width: 45%;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text02 {
            color: var(--dl-color-scheme-pink);
          }
          .home-text04 {
            font-style: normal;
            font-weight: 500;
            margin-bottom: 42px;
          }
          .home-btns-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .home-primary {
            margin-right: var(--dl-space-space-oneandhalfunits);
          }
          .home-video-container {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-video {
            flex: 1;
            width: 100%;
            filter: grayscale();
            max-width: 635px;
            min-height: 635px;
            object-fit: cover;
          }
          .home-blue-background {
            top: 0px;
            right: 0px;
            width: 47%;
            height: 100px;
            position: absolute;
            min-height: 80%;
            background-size: cover;
            background-image: url('/blue-background-1500w.png');
            background-repeat: no-repeat;
          }
          .home-sponsors {
            flex: 0 0 auto;
            display: flex;
            padding-top: var(--dl-space-space-oneandhalfunits);
            border-color: rgba(144, 149, 167, 0.1);
            border-width: 0px;
            flex-direction: column;
            border-bottom-width: 1px;
          }
          .home-max-width1 {
            flex-direction: column;
          }
          .home-text07 {
            color: var(--dl-color-scheme-darkgray);
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-twounits);
            letter-spacing: 0.25em;
          }
          .home-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image {
            height: 80px;
            object-fit: cover;
          }
          .home-image1 {
            height: 80px;
            object-fit: cover;
          }
          .home-image2 {
            height: 80px;
            object-fit: cover;
          }
          .home-image3 {
            height: 80px;
            object-fit: cover;
          }
          .home-image4 {
            height: 80px;
            object-fit: cover;
          }
          .home-image5 {
            height: 80px;
            object-fit: cover;
          }
          .home-speakers {
            display: flex;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-max-width2 {
            flex-direction: column;
          }
          .home-heading-container {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-text10 {
            color: var(--dl-color-scheme-darkgray);
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          .home-text11 {
            text-align: center;
          }
          .home-speakers-container {
            width: 100%;
            display: grid;
            grid-row-gap: var(--dl-space-space-fourunits);
            grid-column-gap: 30px;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .home-numbers-banner {
            display: flex;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: column;
            background-size: cover;
            background-image: url('/group%2029-1500w.png');
          }
          .home-container2 {
            flex-direction: column;
          }
          .home-heading-container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-text12 {
            color: var(--dl-color-scheme-white);
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          .home-text13 {
            color: var(--dl-color-scheme-white);
            text-align: center;
          }
          .home-numbers-container {
            width: 100%;
            display: grid;
            grid-row-gap: var(--dl-space-space-fourunits);
            grid-column-gap: 30px;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
          }
          .home-location {
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
          }
          .home-image6 {
            width: 55%;
            max-height: 950px;
            object-fit: cover;
          }
          .home-content-container1 {
            flex: 1;
            display: flex;
            align-items: stretch;
            padding-top: 100px;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            background-color: var(--dl-color-scheme-black);
          }
          .home-container3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text15 {
            color: var(--dl-color-scheme-white);
            font-size: 56px;
            font-style: normal;
            font-weight: 600;
            line-height: 1.1;
            margin-left: -100px;
            padding-top: 4px;
            padding-left: 18px;
            margin-bottom: 6px;
            padding-right: 11px;
            padding-bottom: 6px;
            background-color: var(--dl-color-scheme-lightblue);
          }
          .home-text16 {
            color: var(--dl-color-scheme-white);
            font-size: 56px;
            font-style: normal;
            font-weight: 300;
            line-height: 1.1;
          }
          .home-container4 {
            display: flex;
            align-items: flex-end;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .home-text17 {
            color: var(--dl-color-scheme-pink);
            font-size: 56px;
            font-style: normal;
            font-weight: 600;
            line-height: 1.1;
            margin-left: var(--dl-space-space-fiveunits);
          }
          .home-text19 {
            color: var(--dl-color-scheme-pink);
            font-size: 56px;
            font-style: normal;
            font-weight: 600;
            line-height: 1.1;
            margin-left: -36px;
          }
          .home-text21 {
            color: var(--dl-color-scheme-pink);
            font-size: 56px;
            font-style: normal;
            font-weight: 600;
            line-height: 1.1;
            margin-left: var(--dl-space-space-fiveunits);
          }
          .home-container5 {
            flex: 1;
            width: 100%;
            display: flex;
            max-width: 350px;
            align-items: flex-start;
            margin-left: 124px;
            flex-direction: column;
          }
          .home-text23 {
            color: var(--dl-color-scheme-white);
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text24 {
            color: var(--dl-color-scheme-white);
            margin-bottom: var(--dl-space-space-twounits);
            text-transform: none;
          }
          .home-btns-container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .home-learn-more {
            color: var(--dl-color-scheme-white);
            transition: 0.3s;
            border-color: var(--dl-color-scheme-white);
          }
          .home-learn-more:hover {
            border-color: var(--dl-color-scheme-pink);
          }
          .home-agenda {
            display: flex;
            flex-direction: column;
            padding-bottom: 100px;
          }
          .home-max-width3 {
            flex-direction: column;
          }
          .home-heading-container2 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-text28 {
            text-align: center;
          }
          .home-text30 {
            color: var(--dl-color-scheme-darkgray);
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          .home-events-container {
            width: 100%;
            display: grid;
            grid-row-gap: var(--dl-space-space-fourunits);
            grid-column-gap: 30px;
            grid-template-columns: 1fr 1fr;
          }
          .home-column {
            width: 100%;
            display: grid;
            grid-gap: 30px;
            grid-template-columns: 1fr;
          }
          .home-column-header {
            width: 100%;
            display: flex;
            align-items: center;
          }
          .home-text31 {
            color: var(--dl-color-scheme-darkgray);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 1.1;
            margin-right: 21px;
          }
          .home-line {
            flex: 1;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: rgba(144, 149, 167, 0.2);
          }
          .home-column1 {
            width: 100%;
            display: grid;
            grid-gap: 30px;
            grid-template-columns: 1fr;
          }
          .home-column-header1 {
            width: 100%;
            display: flex;
            align-items: center;
          }
          .home-text33 {
            color: var(--dl-color-scheme-darkgray);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 1.1;
            margin-right: 21px;
          }
          .home-line1 {
            flex: 1;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: rgba(144, 149, 167, 0.2);
          }
          .home-workshops {
            flex: 1;
            width: 100%;
            display: flex;
            flex-direction: row;
          }
          .home-content-container2 {
            flex: 1;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(144, 149, 167, 0.08);
          }
          .home-container6 {
            flex: 0 0 auto;
            display: flex;
            max-width: 366px;
            align-items: flex-start;
            margin-right: 107px;
            flex-direction: column;
          }
          .home-text35 {
            margin-bottom: 42px;
          }
          .home-text38 {
            color: var(--dl-color-scheme-pink);
          }
          .home-text44 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text45 {
            margin-bottom: var(--dl-space-space-threeunits);
            text-transform: none;
          }
          .home-image7 {
            width: 55%;
            min-height: 880px;
            object-fit: cover;
            object-position: bottom;
          }
          .home-previous-events {
            display: flex;
            position: relative;
            flex-direction: column;
            padding-bottom: 150px;
          }
          .home-max-width4 {
            flex-direction: column;
          }
          .home-heading-container3 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-text46 {
            text-align: center;
          }
          .home-text48 {
            color: var(--dl-color-scheme-darkgray);
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          .home-slider {
            flex: 0 0 auto;
            width: 100%;
            height: 420px;
            display: flex;
            position: relative;
            transition: 0.5s;
            align-items: stretch;
            flex-direction: row;
            justify-content: center;
          }
          .home-slider-controls {
            top: calc(50% + 24px);
            width: calc(60% + 48px);
            height: 48px;
            display: flex;
            position: absolute;
            align-self: center;
            justify-content: space-between;
          }
          .home-go-left {
            flex: 0 0 auto;
            width: 48px;
            cursor: pointer;
            height: 48px;
            display: flex;
            z-index: 1;
            transition: 0.3s;
            align-items: center;
            border-color: rgba(144, 149, 167, 0.24);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-scheme-white);
          }
          .home-go-left:hover {
            border-color: var(--dl-color-scheme-lightblue);
            background-color: var(--dl-color-scheme-white80);
          }
          .home-icon {
            width: 24px;
            height: 24px;
            transform: rotate(180deg);
          }
          .home-go-right {
            flex: 0 0 auto;
            width: 48px;
            cursor: pointer;
            height: 48px;
            display: flex;
            z-index: 1;
            transition: 0.3s;
            align-items: center;
            border-color: rgba(144, 149, 167, 0.24);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-scheme-white);
          }
          .home-go-right:hover {
            border-color: var(--dl-color-scheme-lightblue);
            background-color: var(--dl-color-scheme-white80);
          }
          .home-icon2 {
            width: 24px;
            height: 24px;
          }
          @media (max-width: 991px) {
            .home-max-width {
              flex-direction: column;
            }
            .home-content-container {
              max-width: 100%;
              margin-bottom: 42px;
            }
            .home-video {
              max-width: 100%;
              min-height: 500px;
            }
            .home-blue-background {
              top: auto;
              width: 100%;
              bottom: 0px;
              min-height: 40%;
            }
            .home-speakers-container {
              grid-template-columns: 1fr 1fr 1fr;
            }
            .home-numbers-container {
              grid-template-columns: 1fr 1fr 1fr;
            }
            .home-location {
              flex-direction: column;
            }
            .home-image6 {
              width: 100%;
            }
            .home-content-container1 {
              padding-top: 0px;
              padding-left: var(--dl-space-space-threeunits);
            }
            .home-container3 {
              margin-top: -100px;
              align-items: center;
            }
            .home-container5 {
              max-width: 100%;
              margin-left: 0px;
            }
            .home-events-container {
              grid-template-columns: 1fr;
            }
            .home-container6 {
              margin-right: var(--dl-space-space-unit);
            }
            .home-image7 {
              width: 50%;
              object-position: left;
            }
            .home-slider-controls {
              width: calc(75% + 48px);
            }
          }
          @media (max-width: 767px) {
            .home-text {
              font-size: 48px;
            }
            .home-speakers-container {
              grid-template-columns: 1fr 1fr;
            }
            .home-numbers-container {
              grid-template-columns: 1fr 1fr;
            }
            .home-image6 {
              max-height: 100%;
            }
            .home-content-container1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text15 {
              margin-left: -24px;
            }
            .home-btns-container1 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .home-workshops {
              flex-direction: column-reverse;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container6 {
              max-width: 100%;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 0px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-image7 {
              width: 100%;
            }
            .home-previous-events {
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .home-slider-controls {
              width: calc(80% + 48px);
            }
          }
          @media (max-width: 479px) {
            .home-container1 {
              justify-content: center;
            }
            .home-speakers-container {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  )
}

export default HomeTest