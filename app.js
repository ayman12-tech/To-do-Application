var list=document.getElementById("list");

function addTodo(){
    var todo_item=document.getElementById("todo-item"); //getting input 

    //create li tag with text node
    var li=document.createElement('li'); //createElement is used to create html tag in JS
    var li_text=document.createTextNode(todo_item.value) //createText
    li.appendChild(li_text)
    
    //create delete button tag
    var delBtn=document.createElement("button")
    var delText=document.createTextNode("DELETE")
    delBtn.setAttribute("onclick","deleteItem(this)") //yh wala button pura pas krdo
    delBtn.appendChild(delText)
    li.appendChild(delBtn)
    
    //create edit button
    var editBtn=document.createElement("button")
    var editText=document.createTextNode("EDIT")
    editBtn.setAttribute("onclick","editItem(this)")
    editBtn.appendChild(editText)

    list.appendChild(li)
    li.appendChild(editBtn)

    todo_item.value=""
    console.log(li)
}
function editItem(e)
{
    var val=e.parentNode.firstChild.nodeValue;
    var editValue=prompt("Enter the edit value",val)
    e.parentNode.firstChild.nodeValue=editValue
}
function deleteItem(e)
{
    e.parentNode.remove()
}
function deleteALL()
{
    list.innerHTML=""
}