var list=document.getElementById("list");
firebase.database().ref('todos').on('child_added',function(data){ //getting data from firebase
    //create li tag with text node
    var li=document.createElement('li'); //createElement is used to create html tag in JS
    var li_text=document.createTextNode(data.val().value) //createText
    li.appendChild(li_text)
    
    //create delete button tag
    var delBtn=document.createElement("button")
    var delText=document.createTextNode("DELETE")
    delBtn.setAttribute('id',data.val().key)
    delBtn.setAttribute("onclick","deleteItem(this)") //yh wala button pura pas krdo
    delBtn.appendChild(delText)
    li.appendChild(delBtn)
    
    //create edit button
    var editBtn=document.createElement("button")
    var editText=document.createTextNode("EDIT")
    editBtn.setAttribute('id',data.val().key)
    editBtn.setAttribute("onclick","editItem(this)")
    editBtn.appendChild(editText)

    list.appendChild(li)
    li.appendChild(editBtn)
})

function addTodo(){ //sending data to firebase
    var todo_item=document.getElementById("todo-item"); //getting input 
    var database=firebase.database().ref('todos')
    var key=database.push().key;
    var todo={
        value:todo_item.value,
        key:key
    }
    database.child(key).set(todo)
    todo_item.value=""

}
function editItem(e)
{
    var val=prompt("Enter the edit value",e.parentNode.firstChild.nodeValue)
    var editTodo={
        value:val,
        key:e.id
    }
    firebase.database().ref('todos').child(e.id).set(editTodo)
    e.parentNode.firstChild.nodeValue=val
}
function deleteItem(e)
{
    firebase.database().ref('todos').child(e.id).remove() //to remive from firebase
    // console.log(e.id)
    e.parentNode.remove() //to remove from DOM i.e html page
}
function deleteALL()
{
    firebase.database().ref('todos').remove()
    list.innerHTML=""
}