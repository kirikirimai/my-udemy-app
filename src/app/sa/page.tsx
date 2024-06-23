"use client";

import React from 'react'
import { createTask } from '../actions/sampleActions'
import { useFormState,useFormStatus } from 'react-dom'


const ServerActionsPage = () => {
  const taskID = 1;
  const createTaskWidthTaskId = createTask.bind(null, taskID);
  const initialState = { error: "" }
  const [state, formAction] = useFormState(createTaskWidthTaskId, initialState)

  const SubmitButton =()=>{
    const { pending } = useFormStatus()
    return <button disabled={pending} type='submit' className='bg-gray-400 ml-2 px-2 disabled:bg-gray-300'>送信</button>
  }
  return (
    <div>
      <form action={formAction}>
        <input id='name' name='name' type="text" className='bg-gray-200' />
        <SubmitButton />
        <div>{state.error}</div>
      </form>
    </div>
  )
}

export default ServerActionsPage