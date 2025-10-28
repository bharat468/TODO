import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";


function List({ tasks, handleDelete, handleEdit }) {
  return (
    <ul>
      {
        tasks.map((obj) => {
          return <li key={obj.id}>{obj.task}
            <MdDeleteForever onClick={() => handleDelete(obj.id)} />
            <MdEdit onClick={() => { handleEdit(obj.id) }} />

          </li>
        })
      }
    </ul>
  )
}

export default List
