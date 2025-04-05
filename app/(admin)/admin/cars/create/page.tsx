import React from 'react'
import AddCarForm from './_components/add-car-form'
const page = () => {
  return (
    <div className='p-6'>
        <h1 className='text-2xl font-bold mb-6'>Create Car</h1>
        <AddCarForm />
    </div>
  )
}

export default page