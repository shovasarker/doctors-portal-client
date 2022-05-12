import React from 'react'

const Banner = () => {
  return (
    <div class='hero !container px-6 bg-base-100'>
      <div
        class='hero-content !px-0  py-10 lg:pt-20 lg:pb-28  !w-full flex-col lg:flex-row-reverse gap-12 bg-[length:90%]'
        style={{
          backgroundImage: "url('https://i.ibb.co/Y2Wsdgh/bg.png')",
        }}
      >
        <img
          src={'https://i.ibb.co/xzf27TP/chair.png'}
          alt='banner'
          class='w-full lg:w-1/2'
        />
        <div>
          <h1 class='text-5xl leading-snug font-bold'>
            Your New Smile Starts Here
          </h1>
          <p class='py-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ad,
            recusandae sint excepturi necessitatibus reiciendis ex cum
            asperiores aliquid eligendi.
          </p>
          <button class='btn btn-primary text-base-100'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Banner