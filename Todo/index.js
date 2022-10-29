let input = document.querySelector(".input")
let addButton = document.querySelector(".addButton")
let container = document.querySelector(".container")

//Add
addButton.addEventListener('click', ()=>{
    if (input.value.trim != 0) {
        let newItem = document.createElement('div');
        newItem.classList.add('item');
         newItem.innerHTML=`
         <p class="item_input">${input.value}</p>
        <div >
        <spam class=" editBiutton edit">Edit</spam>
        <spam class="deleteButton delete">Delete</spam>
        </div>
        `
        container.appendChild(newItem);
        input.value = '';
    }else{
        alert('Please  enter a task')
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
    if( e.target.classList.contains('edit') ){
        e.removeAttribut("readonly")
        e.focus()
        e.innerText ="Save"
    }else{
        edit.setAttribut("readonly", "readonly")
        edit.innerText ="Edit"
    }
})