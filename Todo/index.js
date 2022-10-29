let input = document.querySelector(".input")
let addButton = document.querySelector(".addButton")
let container = document.querySelector(".container")


//Add
addButton.addEventListener('click', ()=>{
    if (input.value == "") {
        alert('Please  enter a task')
    }else{
        let newItem = document.createElement('container');
        newItem.classList.add('item');
        let todoText = document.createElement('p')
        todoText.id= 'item_input'
        todoText.innerText = input.value
         newItem.innerHTML=`
        <div >
        <spam class=" editButton edit">Edit</spam>
        <spam class="deleteButton delete">Delete</spam>
        </div>
        `
        container.appendChild(newItem, todoText);
        input.value = '';
    }
})

//Delete 
container.addEventListener('click', (e)=> {
    if(e.target.classList.contains('delete')){
        
        e.target.parentElement.parentElement.remove();  
    }
})

//Update
container.addEventListener('click', (e)=> {
    if(e.target.classList.contains('edit')){
    e.target.parentElement.parentElement.remove()
    }
})