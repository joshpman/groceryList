document.addEventListener('DOMContentLoaded', (event)=>{
    document.getElementById("submit__button").addEventListener('click', addItem);
    document.querySelector(".item__list").addEventListener('click', handleItemClick);
    document.getElementsByClassName("clear__items")[0].addEventListener('click', clearAll);
});

function addItem(){
    const itemInput = document.getElementById("item__input");
    const item = itemInput.value;
    itemInput.value = "";
    if(item!==null  && item!==""){
        const newItem = document.querySelector(".test").cloneNode(true);
        newItem.querySelector(".test__input").placeholder=item;
        document.getElementsByClassName("item__list")[0].appendChild(newItem);
        
    }
}

function handleItemClick(event){
    const target = event.target;
    const listItem = target.closest('.test');
    if(listItem){
        if(target.matches('.edit')){
            handleEditClick(listItem);
        }else if(target.matches(".delete")){
            handleDeleteClick(listItem);
        }else if(target.matches(".clear__items")){
            clearAll();
        }
    }
}

function handleEditClick(listItem){
    if(listItem.firstChild.disabled===true){
        let insert = listItem.firstChild.placeholder;
        listItem.firstChild.disabled = false;
        listItem.firstChild.value = insert;
    }else{
        let value = listItem.firstChild.value;
        value = listItem.firstChild.placeholder;
        listItem.firstChild.disabled = true;
    }
    const form = listItem.firstChild;
    
}

function handleDeleteClick(listItem){
    listItem.remove();
}

function clearAll(){
    let listItems = document.querySelector(".item__list");
    let arr = Array.from(listItems.querySelectorAll("li"));
    for(let i = 1; i<arr.length; i++){
        console.log("Bump");
        arr[i].remove();
    }
}