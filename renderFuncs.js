const renderList = (toDos, filters) => {
    document.querySelector("#container").innerHTML = ""
    const filteredTodos = toDos.filter((todo) => {
        return todo.attributes.title.toLowerCase().includes(filters.searchTerm.toLowerCase())    
    })
    
    filteredTodos.forEach((todo) => {
        generateItem(todo)
    })
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