const taskList = document.getElementsByClassName('to-do-items')[0];
const taskInput = document.getElementById('input');


taskInput.addEventListener('keydown', function(event){
    if(event.key === "Enter")
        addItem()
})


addItem = () => {
    var divParent = document.createElement('div');
    var divChild = document.createElement('div');
    var checkIcon = document.createElement('i');
    var trashIcon = document.createElement('i');

    divParent.className = "item"
    divParent.innerHTML = "<div>" + taskInput.value + "</div>"
    

    divParent.setAttribute('style', "background-color: #fff");

    checkIcon.className = "fa-regular fa-square-check"
    checkIcon.addEventListener('click', function(){

        if (checkIcon.style.color !== "limegreen"){
            checkIcon.style.color = "limegreen"
           
        
        } else {
        checkIcon.style.color = ""
        taskInput.style.textDecoration = "";
        }
    });

    trashIcon.className = "fa-solid fa-trash"
    trashIcon.addEventListener('click', function(){
        if(checkIcon.style.color == "limegreen")
            return  divParent.remove();
       

    })

    taskList.appendChild(divParent);
    divParent.append(divChild);
    divChild.append(checkIcon);
    divChild.append(trashIcon);

    taskInput.value = ""


}