let form=document.querySelector("form").addEventListener("submit",getData);


let task=document.querySelector("#task");
let priority=document.querySelector("#priority");

function getData(e){
    e.preventDefault();
    let taskName=task.value;
    let taskPriority=priority.value;
    let tableObj={
        taskName,
        taskPriority
    };
    inTable(tableObj);
}
function inTable(obj){
    let row=document.createElement("tr");
    let th1=document.createElement("th")
    th1.innerText=obj.taskName;
    let th2=document.createElement("th")
    th2.innerText=obj.taskPriority;
    let th3=document.createElement("th")
    th3.innerText="added to favourite";

    row.append(th1,th2,th3);
    document.querySelector("tbody").append(row);
}
