import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'
import Button from '../../../standalone/Button'
import Input from '../../../standalone/Input'
import Spinner from '../../../standalone/Spinner'

const AddDoctor = () => {
  const [loading, setLoading] = useState(false)
  const getServices = async () => {
    const { data } = await axios.get(
      'https://dpss-server.herokuapp.com/services'
    )
    return data
  }

  const { data: services } = useQuery('services', getServices)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async ({ name, email, speciality, image }) => {
    setLoading(true)
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGE_STORAGE_KEY}`

    const formData = new FormData()
    formData.append('image', image[0])

    const { data } = await axios.post(url, formData)
    if (data?.success) {
      const doctor = {
        name,
        email,
        speciality,
        img: data?.data?.url,
      }

      const { data: result } = await axios.post(
        'https://dpss-server.herokuapp.com/doctor',
        doctor,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      )

      if (result?.insertedId) {
        reset()
        toast.success(`${name} has been added as a doctor`)
      }
    }
    setLoading(false)
  }

  return (
    <div className='my-10'>
      <h2 className='text-2xl text-neutral'>Add a New Doctor</h2>
      <form
        className='max-w-full md:max-w-md px-5 py-8 rounded-lg shadow-xl mt-10 bg-base-100 space-y-1'
        onSubmit={handleSubmit(onSubmit)}
      >
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
        <div className='form-control w-full'>
          <label className='label'>
            <span className='label-text'>Speciality</span>
          </label>
          <select
            {...register('speciality')}
            className='select select-bordered w-full'
          >
            {services?.map(({ _id, name }) => (
              <option key={_id} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <Input
          register={register}
          type='file'
          name='image'
          placeholder={''}
          error={errors?.name}
          label='Image'
          required={'Image is Required'}
          inputClass='!border-0 !px-0 !py-1.5'
        />

        <Button type='submit' fullWidth neutral className={'!mt-6'}>
          {loading ? <Spinner small colored /> : <>Add Doctor</>}
        </Button>
      </form>
    </div>
  )
}

export default AddDoctor
