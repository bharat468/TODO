function Form({ input, setInput, handleSubmit, isEditing }) {

    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Your Task"
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                />
                <button type="submit">{isEditing ? "Edit Task" : "Add Task"}</button>
            </form>
        </>
    )
}

export default Form
