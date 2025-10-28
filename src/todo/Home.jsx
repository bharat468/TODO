import { useState } from "react"
import Form from "./Form"
import List from "./List"
import "./todo.css"

function Home() {
    const [input, setInput] = useState("")
    const [tasks, setTasks] = useState([])
    const [isEditing, setIsEditing] = useState(false);
    const [editId, SetEditId] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        if (isEditing) {
            setTasks(
                tasks.map((obj) => {
                    return obj.id === editId ? { ...obj, task: input } : obj
                })
            )
            setIsEditing(false) 
            SetEditId(null)
            setInput("")

        }
        else {
            if (!input.trim()) return
            setTasks([...tasks, { id: Date.now(), task: input }])
        }
        setInput("")

    }

    function handleDelete(obj) {
        setTasks(tasks.filter((task) => { return task.id !== obj })
        )
    }

    function handleEdit(idToEdit) {
        setIsEditing(true)
        SetEditId(idToEdit)
        const objectToEdit = tasks.find((task) => {
            return task.id === idToEdit;
        })
        setInput(objectToEdit.task)
    }

    function heandleComplete(){
    }

    return (
        <div className="todo">
            <Form
                input={input}
                setInput={setInput}
                handleSubmit={handleSubmit}
                isEditing={isEditing} />
            <List
                tasks={tasks}
                handleDelete={handleDelete}
                handleEdit={handleEdit} 
                heandleComplete = {heandleComplete}/>
        </div>
    )
}

export default Home
