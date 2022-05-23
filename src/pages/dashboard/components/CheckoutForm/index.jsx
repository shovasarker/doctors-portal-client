import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Spinner from '../../../standalone/Spinner'

const CheckoutForm = ({ booking }) => {
  const stripe = useStripe()
  const elements = useElements()
  const [cardError, setCardError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [transactionId, setTransactionId] = useState('')
  const [clientSecret, setClientSecret] = useState('')
  const { price, patient } = booking
  useEffect(() => {
    const getClientSecret = async () => {
      try {
        const { data } = await axios.post(
          'http://localhost:5000/create-payment-intent',
          { price },
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
          }
        )

        setClientSecret(data?.clientSecret)
      } catch (error) {
        if (
          error?.response?.status === 401 ||
          error?.response?.status === 403
        ) {
          toast?.error(error?.message)
        }
      }
    }
    getClientSecret()
  }, [price])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) return

    const card = elements.getElement(CardElement)

    if (card == null) return

    const { error } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    })

    if (error) {
      setCardError(error?.message)
      return
    }
    setCardError('')
    setLoading(true)
    //   confirm card Payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patient?.name,
            email: patient?.email,
          },
        },
      })

    if (intentError) {
      setCardError(intentError?.message)
      setSuccess('')
    } else {
      setCardError('')
      setSuccess('Congrats! Your Payment is Completed.')
      setTransactionId(paymentIntent?.id)
      toast?.success('Congrats! Your Payment is Completed.')
    }
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button
        type='submit'
        disabled={!stripe || !clientSecret || success}
        className='btn btn-secondary btn-sm text-base-100 !px-4'
      >
        {loading ? <Spinner small /> : <>Pay</>}
      </button>
      {cardError && (
        <p className='text-red-500 text-center text-xs'>{cardError}</p>
      )}
      {success && (
        <div className='text-center text-sm text-success'>
          <p>{success}</p>
          <p>
            Your Transaction Id :{' '}
            <span className='text-orange-500'>{transactionId}</span>
          </p>
        </div>
      )}
    </form>
  )
}

export default CheckoutForm
