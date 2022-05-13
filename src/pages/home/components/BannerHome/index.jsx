import React from 'react'
import Banner from '../../../shared/Banner'
import Button from '../../../standalone/Button'

const BannerHome = () => {
  return (
    <Banner>
      <div>
        <h1 className='text-5xl leading-snug font-bold'>
          Your New Smile Starts Here
        </h1>
        <p className='py-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ad,
          recusandae sint excepturi necessitatibus reiciendis ex cum asperiores
          aliquid eligendi.
        </p>
        <Button>Get Started</Button>
      </div>
    </Banner>
  )
}

export default BannerHome
