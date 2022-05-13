import React from 'react'
import SectionTitle from '../../../../standalone/SectionTitle'
import ContactForm from '../ContactForm'

const ContactUs = () => {
  return (
    <section
      id='#contact-us'
      style={{
        backgroundImage: 'url(https://i.ibb.co/xXfm9Dv/appointment.png)',
      }}
      className='text-base-100 py-10 mt-20'
    >
      <SectionTitle
        title={'Contact Us'}
        subTitle='Stay connected with us'
        center
        normal
      />
      <ContactForm />
    </section>
  )
}

export default ContactUs
