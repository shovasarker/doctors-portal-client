import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import Spinner from '../../../standalone/Spinner'
import CheckoutForm from '../CheckoutForm'

const stripePromise = loadStripe(
  'pk_test_51KCmDPJRLMbRrdCMxbVI1MxlYwGBKycxcxQPz4xsZwhhRrfc4ABxi6TjWmX9d9f6C0k0mSVQCQTtTIyzt8yNIzu400K7Nbs1o8'
)

const Payment = () => {
  const { id } = useParams()

  const getBooking = async () => {
    const { data } = await axios.get(
      `https://dpss-server.herokuapp.com/booking/${id}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      }
    )
    return data
  }

  const { data: booking, isLoading } = useQuery(['booking', id], getBooking)

  if (isLoading) return <Spinner center colored />
  const {
    patient: { name },
    treatment,
    price,
    slot,
    date,
  } = booking

  return (
    <div>
      <div className='flex flex-col lg:flex-row items-center justify-start gap-6 my-10'>
        <div className='card w-full bg-base-100 shadow-xl'>
          <div className='card-body space-y-2'>
            <h2 className='text-xl text-secondary'>
              Hello, <span className='font-semibold'>{name}</span>
            </h2>
            <h4 className='text-xl'>
              Please Pay for <span className='font-semibold'>{treatment}</span>
            </h4>
            <p>
              We will see you on <span className='font-bold'>{date}</span> at{' '}
              <span className='font-bold'>{slot}</span>
            </p>
            <p>
              Please Pay : <span className='font-bold'>${price}</span>
            </p>
          </div>
        </div>
        <div className='card w-full bg-base-100 shadow-xl'>
          <div className='card-body'>
            <Elements stripe={stripePromise}>
              <CheckoutForm booking={booking} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
