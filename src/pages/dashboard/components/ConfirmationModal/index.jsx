import axios from 'axios'
import React, { useContext } from 'react'
import { toast } from 'react-toastify'
import DeleteContext from '../../../../contexts/DeleteContext'

const ConfirmationModal = ({ email, name, refetch }) => {
  const { setDeleted } = useContext(DeleteContext)
  const handleDeleteDoctor = async () => {
    const { data } = await axios.delete(
      `https://dpss-server.herokuapp.com/doctor/${email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      }
    )

    if (data?.deletedCount) {
      toast.success(`Dr. ${name} is Deleted`)
      refetch()
      setDeleted({})
    }
  }
  return (
    <>
      <input type='checkbox' id='confirmation-modal' className='modal-toggle' />
      <div className='modal modal-bottom sm:modal-middle !z-50'>
        <div className='modal-box'>
          <h3 className='font-bold text-2xl'>Warning!</h3>
          <p>Do your Want to Delete Dr. {name}</p>
          <div className='modal-action'>
            <button
              className='btn btn-error btn-md'
              onClick={handleDeleteDoctor}
            >
              Delete
            </button>
            <label
              htmlFor='confirmation-modal'
              className='btn btn-outline btn-md'
              onClick={() => setDeleted({})}
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConfirmationModal
