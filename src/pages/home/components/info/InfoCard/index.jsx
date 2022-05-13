import React from 'react'

const InfoCard = ({ img, color, details, title }) => {
  return (
    <div
      className={`card w-full !flex-col md:!flex-row items-center pt-10 md:py-4 px-4 xl:px-5 ${
        color ? 'bg-gradient-to-r from-secondary to-primary' : 'bg-neutral'
      } text-white`}
    >
      <img
        src={img}
        alt=''
        className='w-20 h-20 md:w-16 md:h-16 xl:w-20 xl:h-20'
      />
      <div className='card-body !px-4 !py-6'>
        <h2 className='card-title !block !text-center md:!text-left'>
          {title}
        </h2>
        <p className=' text-center md:text-left'>{details}</p>
      </div>
    </div>
  )
}

export default InfoCard
