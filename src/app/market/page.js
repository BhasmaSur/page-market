// pages/market.js or components/Market.js
"use client"
import Head from 'next/head';
import { useState, useEffect } from 'react';
import Card from './card';

export default function Market() {
  const [menuToggle, setMenuToggle] = useState(false);
  const [data, setData] = useState([]);

  const handleStore = async () => {
    const url = "http://localhost:8081/pages/all";
    try{
        const response = await fetch(url, {
            method: "GET"
        });
        if(!response.ok)
            throw new Error(`HTTP error! Status : ${response.status}`)

        const result = await response.json();
        console.log("result", result);
        setData(result)
  }
  catch(error){
    console.log("Error:", error)
  }
}

useEffect(() => {
    handleStore();
}, [])

  return (
    <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      <Head>
        <title>PageMarket</title>
        <meta name="description" content="Free open source Tailwind CSS Store template" />
        <link href="https://fonts.googleapis.com/css?family=Work+Sans:200,400&display=swap" rel="stylesheet" />
      </Head>

      <nav id="header" className="w-full z-30 top-0 py-1">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
          <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
            <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
          <input className="hidden" type="checkbox" id="menu-toggle" checked={menuToggle} onChange={() => setMenuToggle(!menuToggle)} />

          <div className={`hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1 ${menuToggle ? "block" : "hidden"}`} id="menu">
            <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
              <li><a className="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="#">Profile</a></li>
              <li><a className="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="#">Support</a></li>
            </ul>
          </div>

          <div className="order-1 md:order-2">
            <a className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
              <svg className="fill-current text-gray-800 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z" />
              </svg>
              PAGEMARGET
            </a>
          </div>

          <div className="order-2 md:order-3 flex items-center" id="nav-content">
            <a className="inline-block no-underline hover:text-black" href="#">
              {/* User icon */}
            </a>
            <a className="pl-3 inline-block no-underline hover:text-black" href="#">
              {/* Shopping cart icon */}
            </a>
          </div>
        </div>
      </nav>

      {/* Carousel */}
      <div className="carousel relative container mx-auto" style={{ maxWidth: "1600px" }}>
        <div className="carousel-inner relative overflow-hidden w-full">
          {/* Additional slides and controls would similarly be implemented */}
        </div>
      </div>

      {/* Product Listing */}
      <section className="bg-white py-8">
        <div className="container mx-auto my-auto flex items-center flex-wrap pt-4 pb-12 justify-around">
          {
            data.map((val, index) => {
                console.log(val.name);
                return <Card name = {val.name} followers={val.followers} imgurl={val.imgUrl} profileurl={val.profileUrl}/>
            })
          }
        </div>
      </section>

      {/* About Section */}
      {/* <section className="bg-white py-8">
        <div className="container py-8 px-6 mx-auto">
          <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8" href="#">About</a>
          <p className="mt-8 mb-8">This template is inspired by the stunning nordic minimalist design...</p>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="container mx-auto bg-white py-8 border-t border-gray-400">
        <div className="container flex px-3 py-8">
          <div className="w-full mx-auto flex flex-wrap">
            {/* Footer content */}
          </div>
        </div>
      </footer>
    </div>
  );
}
