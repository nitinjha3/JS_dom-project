let input=document.getElementById('input-data')
// console.log(input);
let list=document.getElementById('ultag')

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
        list.appendChild(span)
    }
    input.value=""
}