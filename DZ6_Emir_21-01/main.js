const input = document.getElementById('input')
const createButton = document.getElementById('create_todo')
const todoList = document.getElementById('todo_list')

const createTodo = function () {
    if (input.value.trim() === '') {
        return false
    } else {
        const div = document.createElement('div')
        let array = []
        array.push(input.value)
        array.map((e)=>{
            const h2 = document.createElement('h2')
            document.body.append(h2)
            h2.append(e.split("").reverse().join(""))

            div.append(h2)

        })

        div.setAttribute('class', 'block_text')

        todoList.append(div)
    }
    input.value = ''
}


createButton.addEventListener('click', createTodo)
input.addEventListener('keydown', (e) => e.keyCode === 13 ? createTodo() : false)

// const createTodo = function () {
//     if (input.value.trim() === '') {
//         return false
//     } else {
//         const div = document.createElement('div')
//         const text = document.createElement('h3')
//         div.setAttribute('class', 'block_text')
//         text.setAttribute('class', 'text')
//
//         text.innerText = input.value.trim()
//         div.append(text)
//         todoList.append(div)
//     }
//     input.value = ''
// }
//
