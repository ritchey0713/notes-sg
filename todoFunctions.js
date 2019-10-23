const correctFetch = async () => {
    const resp = await fetch("http://localhost:3000/todos")
    if(resp.status === 200){
        const json = await resp.json()
        return json 
    } else {
        throw new Error("help")
    }
}


const getTodos = async () => {
    toDos = await correctFetch()
    renderList(toDos.data, filters)
}


const generateItem = (toDo) => {
    const toDoDiv = document.createElement("div")
    const toDoSpan = document.createElement("span")
    const checkBox = document.createElement("input")

    toDoDiv.id = "todo-wrapper"

    toDoSpan.id = "todo-data"
    toDoSpan.innerText = toDo.attributes.title

    checkBox.id = "todo-checked"
    checkBox.name = "done"
    checkBox.setAttribute("type", "checkbox")
    checkBox.checked = toDo.attributes.complete

    checkBox.addEventListener("change", (e) => {
        // update checkbox
    })
    document.querySelector("#container").append(toDoDiv, toDoSpan, checkBox)

}



const genreateForm = () => {
    const form = document.createElement('form')
    const formInput = document.createElement('input')
    const formSubmit = document.createElement('button')

    form.id = "create-todo"

    formInput.placeholder = "todo text"
    formInput.id = "form-text"
    formInput.name = "formInput"

    formSubmit.textContent = "Submit"
    formSubmit.id = "form-submit"
    
   
    form.appendChild(formInput)
    form.appendChild(formSubmit)

    return form 
}





const saveToDo = (todo = null) => {
    if (todo != null) {
        toDos.push(todo)
    } else {
        throw new Error("HALP ME")
    }
}
