import React from 'react'

const Banner = ({ children, largeGap }) => {
  return (
    <section className='hero !container px-6 bg-base-100'>
      <div
        className={`hero-content !px-0  pt-10 pb-20 lg:pt-20 lg:pb-32 !w-full flex-col lg:flex-row-reverse ${
          largeGap ? 'gap-20' : 'gap-12'
        } bg-[length:100%] bg-center`}
        style={{
          backgroundImage: "url('https://i.ibb.co/Y2Wsdgh/bg.png')",
        }}
      >
        <img
          src={'https://i.ibb.co/xzf27TP/chair.png'}
          alt='banner'
          className='w-full lg:w-1/2'
        />
        {children}
      </div>
    </section>
  )
}

export default Banner
