let inputBlock = document.querySelector(".input")
let addButton = document.querySelector(".addButton")
let container = document.querySelector(".container")


addButton.addEventListener("click", () =>{
    if(inputBlock.value.trim() == ''){
        return alert("Enter a Todo for the list")
    }else{
        const todoItemContainer = document.createElement('div')
        todoItemContainer.classList.add('item')
        container.appendChild(todoItemContainer)


        //Input Value field
        const todoText = document.createElement('p')
        todoText.className = 'item_input'
        todoText.innerText=inputBlock.value
        todoItemContainer.appendChild(todoText)


        //Edit Button
        const editButton = document.createElement('button')
        editButton.className='editButton'
        const spamTag1 = document.createElement('spam')
        spamTag1.innerHTML="Edit"
        editButton.appendChild(spamTag1)
        todoItemContainer.appendChild(editButton)

        //Edit button click
        editButton.addEventListener('click', ()=>{
            inputBlock.value = todoText.innerText
            const parent = editButton.parentElement
            parent.remove()
        })


        //Delete Button
        const deleteButton = document.createElement('button')
        deleteButton.className='deleteButton'
        const spamTag2 = document.createElement('spam')
        spamTag2.innerHTML="Delete"
        deleteButton.appendChild(spamTag2)
        todoItemContainer.appendChild(deleteButton)

        //Delete button click
        deleteButton.addEventListener('click', ()=>{
            const parent = deleteButton.parentElement
            parent.remove()
        })

        inputBlock.value = " "
    }
    
})