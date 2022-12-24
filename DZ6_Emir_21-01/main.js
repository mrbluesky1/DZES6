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
