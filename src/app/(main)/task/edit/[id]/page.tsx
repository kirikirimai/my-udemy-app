import React from 'react'

const TaskEditId = ({params}:{params: {id: string}}) => {
  return (
    <div>TaskEditId
        id: {params.id}
    </div>
  )
}

export default TaskEditId