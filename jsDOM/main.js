
// // const hey = document.querySelector('.hey')
// // hey.innerText = 'blabla'

// // const blablaInput = document.createElement('input')


// // const allHey = document.querySelectorAll('.a')

// // allHey.forEach(tag => tag.innerHTML+=`<button class="newCreatedButton"}>click me :)</button>`)
// // hey.appendChild(blablaInput);


// // const newDiv = document.createElement('div')
// // newDiv.style.border = '1px solid black'
// //     newDiv.className = 'flexCol'
// //     for(let i = 1; i<11; i++){
// //         const newBtn = document.createElement('button')
// //         newBtn.className = 'newCreatedButton'
// //         newBtn.innerText='click me ' + i
// //         newDiv.appendChild(newBtn)
// //     }
    
// // document.body.appendChild(newDiv)

// // const hey2 = document.querySelector('.hey2')
// // console.log(hey2)
// // // if(hey2){
// //     // document.body.removeChild(hey2)
// //     // hey2.parentElement.removeChild(hey2)
// // // }

// // const shalom = document.querySelector('.test')
// // // shalom.remove() // the kid itself can vanish from the dom
// // shalom.parentElement.remove() // remove the father itself from the child

// let isDark = false
// const changeThemeButton = document.createElement('button');
// changeThemeButton.innerText = 'Dark';

// changeThemeButton.addEventListener('click', () => {
//     console.log(isDark)
//     changeThemeButton.innerText = isDark ? 'Dark' : 'Light'
//     document.body.style.backgroundColor = isDark ? 'white' : 'black'
//     document.body.style.color = isDark ? 'black' : 'white'
//     isDark = !isDark
// })

// document.body.appendChild(changeThemeButton)

// const myInp = document.createElement('input')
// const myInp2 = document.createElement('input')
// const myBtn = document.createElement('button')
// const header2 = document.createElement('h2')

// myInp.placeholder = 'enter first name'
// myInp2.placeholder = 'enter last name'
// myBtn.innerText='alert my value please'

// // myInp.addEventListener('keyup', (e) => {
// //     myInp.value = e.target.value
// // })
// // myInp2.addEventListener('keyup', (e) => {
// //     console.log(e)
// //     myInp2.value = e.target.value
// // })
// // myBtn.addEventListener('click', () => {
// //     header2.innerText = myInp.value
// //     alert('this is my value ' + myInp.value + ' ' + myInp2.value)
// // })

// // document.body.appendChild(myInp)
// // document.body.appendChild(myInp2)
// // document.body.appendChild(myBtn)
// // document.body.appendChild(header2)

// const ul = document.createElement('ul')
// const numArr = [1,2,3,4,5,6,7,8,9,10]
//     numArr.forEach((number) => {
//         const li = document.createElement('li')
//         const deleteButton = document.createElement('button')

//         li.innerText=number
//         deleteButton.innerText="delete " + number

//         deleteButton.addEventListener('click', () => {
//             li.parentElement.removeChild(li)
//             deleteButton.parentElement.removeChild(deleteButton)
//         })

//         ul.appendChild(li)
//         ul.appendChild(deleteButton)
//     })
// document.body.appendChild(ul)
const todos = []
const addTodoInp = document.createElement('input')
const addTodoButton = document.createElement('button')

addTodoButton.innerText='submit'

addTodoButton.addEventListener('click', () => {
    const newTodo = {title:addTodoInp.value, isCompleted:false, id:Date.now()}
    todos.push(newTodo)
})


document.body.appendChild(addTodoInp)
document.body.appendChild(addTodoButton)