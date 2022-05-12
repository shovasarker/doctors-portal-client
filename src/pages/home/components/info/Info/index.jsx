import React from 'react'
import { INFOS } from '../../../../../data'
import InfoCard from '../InfoCard'

const Info = () => {
  const infos = INFOS
  return (
    <section className='px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20'>
      {infos?.map(({ id, ...otherProps }) => (
        <InfoCard key={id} {...otherProps} />
      ))}
    </section>
  )
}

export default Info
