import React, { useEffect } from 'react'
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import auth from '../../../firebase/firebase.init'
import Button from '../../standalone/Button'
import Input from '../../standalone/Input'
import Spinner from '../../standalone/Spinner'

const EmailRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })

  const [updateProfile] = useUpdateProfile()

  useEffect(() => {
    if (user && !error) {
      toast.success('Registered Successfully with Email and Password')
      return
    }
    if (error) {
      console.error(error)
      toast.error(error?.message)
      return
    }
  }, [user, error])

  const onSubmit = async ({ name, email, password }) => {
    await createUserWithEmailAndPassword(email, password)
    await updateProfile({ displayName: name })
    toast.success('User Profile Updated')
    toast.warning(
      'Email Verification is Send to Your Email, If it is not in the mail box then check junk or spam folder please!'
    )
  }

  return (
    <form className='mt-10 space-y-1' onSubmit={handleSubmit(onSubmit)}>
      <Input
        register={register}
        type='text'
        name='name'
        placeholder={''}
        error={errors?.name}
        label='Name'
        required={'Name is Required'}
      />
      <Input
        register={register}
        type='email'
        name='email'
        placeholder={''}
        error={errors?.email}
        label='Email'
        required={'Email is Required'}
        pattern={{
          value:
            /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>().,;\s@"]+\.{0,1})+([^<>().,;:\s@"]{2,}|[\d.]+))$/,
          message: 'Email is not Valid',
        }}
      />
      <Input
        register={register}
        type='password'
        name='password'
        placeholder={''}
        error={errors?.password}
        label='Password'
        required={'Passowrd is Required'}
        minLength={{
          value: 6,
          message: 'Password Must be Atleast 6 character long',
        }}
      />
      <Button type='submit' fullWidth neutral className={'!mt-4'}>
        {loading ? <Spinner small colored /> : <>Register</>}
      </Button>
    </form>
  )
}

export default EmailRegister
