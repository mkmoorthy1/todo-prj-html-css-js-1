let item = document.getElementById('todo-input');
let todoButton = document.querySelector('#todo-button');
let todoBox = document.querySelector('#todo-box');
todoButton.addEventListener('click', () => {
	let itemVal = item.value;

	if (!itemVal) {
		alert('Enter A Todo');
		return false;
	}

	const listItem = document.createElement('li');
	listItem.innerHTML = `
        ${itemVal}
       <i class="fa-solid fa-trash-can"></i>
   `;

	listItem.addEventListener('click', function() {
		this.classList.toggle('done');
	});

	const deleteItem= listItem.querySelector("i");

    console.log(deleteItem);

    deleteItem.addEventListener('click',function(){
        
        listItem.remove();
    })



	todoBox.appendChild(listItem);

    item.value="";
	
});

//console.log(listItem);
