console.log("func")

//uuid



const generateList = (toDo) => {
    const toDoDiv = document.createElement("div")
    const toDoSpan = document.createElement("span")
    const checkBox = document.createElement("input")

    toDoDiv.id = "todo-wrapper"

    toDoSpan.id = "todo-data"
    toDoSpan.innerText = toDo.text

    checkBox.id = "todo-checked"
    checkBox.name = "done"
    checkBox.setAttribute("type", "checkbox")
    checkBox.checked = toDo.complete

    checkBox.addEventListener("change", (e) => {
        // update checkbox
    })

    document.querySelector("#container").appendChild(toDoDiv).appendChild(toDoSpan).appendChild(checkBox)

}

const renderList = () => {
    toDos.forEach((todo) => {
        generateList(todo)
    })
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


const renderForm = () => {
    const form = genreateForm()
    document.body.appendChild(form)

     form.addEventListener("submit", (e) => {
        e.preventDefault();
        e.target.style.visibility = "hidden"
        
        newTodo = {
            text: e.target.elements.formInput.value, 
            complete: false 
        }

        // persistance
        saveToDo(newTodo) 
        form.remove()
    })
}


const saveToDo = (todo = null) => {
    if (todo != null) {
        toDos.push(todo)
    } else {
        throw new Error("HALP ME")
    }
}
