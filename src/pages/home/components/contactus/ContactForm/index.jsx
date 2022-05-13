import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '../../../../standalone/Button'

import Input from '../../../../standalone/Input'
import TextArea from '../../../../standalone/TextArea'

const ContactForm = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-full px-6 md:max-w-md mx-auto space-y-4 mt-10 text-neutral flex flex-col'
    >
      <Input
        type={'email'}
        name='name'
        placeholder='Email Address'
        required
        register={register}
      />
      <Input
        type={'text'}
        name='subject'
        placeholder='Subject'
        required
        register={register}
      />
      <TextArea
        type={'text'}
        name='message'
        placeholder='Your Message'
        required
        register={register}
      />
      <Button type='submit' className={'capitalize mx-auto px-10 !mt-10'}>
        Submit
      </Button>
    </form>
  )
}

export default ContactForm
