import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '../../standalone/Button'
import Input from '../../standalone/Input'

const EmailLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form className='mt-10 space-y-3' onSubmit={handleSubmit(onSubmit)}>
      <Input
        register={register}
        type='email'
        name='email'
        placeholder={''}
        error={errors?.email}
        label='Email'
        required={'Email is Required'}
      />
      <Input
        register={register}
        type='password'
        name='password'
        placeholder={''}
        error={errors?.password}
        label='Password'
        required={'Passowrd is Required'}
      />
      <button className='btn btn-link text-neutral !p-0 capitalize !mt-0'>
        Forget Password?
      </button>
      <Button type='submit' neutral className={'!w-full !mt-6'}>
        Login
      </Button>
    </form>
  )
}

export default EmailLogin
