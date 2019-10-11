console.log("app.js")

let toDos = []

let url = "localhost:3000/toDos.json"


const getTodos = () => {
fetch(url)
    .then(resp => resp.json())
        .then((json) => todos.push(json))
}

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

    renderList()

    document.querySelector("#gen-form").addEventListener("click", (e) => {
        e.target.style.visibility = "hidden"
        renderForm()
    })




// const findTeam = (teamName) => {
//     const team = teams.find((team) => {
//         return team.name === teamName
//     })  
    
//     if(team) {
//         console.log(team)
//     }   
// }

