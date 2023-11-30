let input=document.getElementById('input-data')
// console.log(input);
let list=document.getElementById("ultag")

function addTask()
{
    // let store=JSON.parse(localStorage.getItem('todo-list'))||[]

    if(input.value==='')
    {
        alert('Please enter your task!')
    }
    else{
        let li=document.createElement("li")
        li.innerHTML=input.value
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        list.appendChild(li)
        li.appendChild(span)
        // store.push(input.value)
        // localStorage.setItem('todo-list',JSON.stringify(store))
       
    }
    saveData()
    input.value=""
}

list.addEventListener("click",function(e){
    console.log(e);
    if(e.target.nodeName==='LI'){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.nodeName==="SPAN")
    {
        e.target.parentElement.remove();
        saveData()
    }
},false)

function saveData(){
    localStorage.setItem('data',list.innerHTML)
}

function display()
{
    list.innerHTML=localStorage.getItem('data')
}

display()