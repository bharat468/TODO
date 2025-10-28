import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";


function List({ tasks, handleDelete, handleEdit, handleComplete }) {
  return (
    <ul>
      {
        tasks.map((obj) => {
          return <li key={obj.id}>
            <input type="checkbox" className='checkbox' onClick={handleComplete}/>
            <span>{obj.task}</span>
            <p>
              <MdDeleteForever onClick={() => handleDelete(obj.id)} />
              <MdEdit onClick={() => { handleEdit(obj.id) }} />
            </p>
          </li>
        })
      }
    </ul>
  )
}

export default List
