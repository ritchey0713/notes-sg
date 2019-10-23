let toDos = [];

let filters = {
    searchTerm: ""
}

getTodos()

//let url = "localhost:3000/toDos.json"

// toDos = fetchTodos()

// console.log(toDos.data)

// const getTodos = () => {
// fetch(url)
//     .then(resp => resp.json())
//         .then((json) => todos.push(json))
// }

// toDos = [
//     {
//         text: "hello1",
//         complete: true
//     }, {
//         text: "hello2",
//         complete: true
//     }, {
//         text: "hello3",
//         complete: false
//     }, {
//         text: "hello4",
//         complete: false
//     }]

    

    document.querySelector("#gen-form").addEventListener("click", (e) => {
        console.log(e)
        e.target.style.visibility = "hidden"
        renderForm()
    })

    document.querySelector('#searchTerm').addEventListener("input", (e) => {
        filters.searchTerm = e.target.value
        renderList(toDos, filters)
    })

    // submit 

    // click 

    // input 

    // change 

    