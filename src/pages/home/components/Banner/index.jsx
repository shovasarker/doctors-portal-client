import React from 'react'
import Button from '../../../standalone/Button'

const Banner = () => {
  return (
    <div className='hero !container px-6 bg-base-100'>
      <div
        className='hero-content !px-0  pt-10 pb-20 lg:pt-20 lg:pb-32 !w-full flex-col lg:flex-row-reverse gap-12 bg-[length:100%] bg-center'
        style={{
          backgroundImage: "url('https://i.ibb.co/Y2Wsdgh/bg.png')",
        }}
      >
        <img
          src={'https://i.ibb.co/xzf27TP/chair.png'}
          alt='banner'
          className='w-full lg:w-1/2'
        />
        <div>
          <h1 className='text-5xl leading-snug font-bold'>
            Your New Smile Starts Here
          </h1>
          <p className='py-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ad,
            recusandae sint excepturi necessitatibus reiciendis ex cum
            asperiores aliquid eligendi.
          </p>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  )
}

export default Banner
