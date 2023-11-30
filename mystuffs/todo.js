let input=document.getElementById('input-data')
// console.log(input);
let list=document.getElementById("ultag")

function addTask()
{
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
    }
    input.value=""
}

list.addEventListener("click",function(e){
    console.log(e);
    if(e.target.nodeName==='LI'){
        e.target.classList.toggle("checked")
    }
    else if(e.target.nodeName==="SPAN")
    {
        e.target.parentElement.remove();
    }
},false)