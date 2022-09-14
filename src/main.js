let todoBody = document.querySelector("#todoBody");
let todoBodyNotdone = document.querySelector("#todoBodyNotdone");
let todoBodyDone = document.querySelector("#todoBodyDone");
let addInput = document.querySelector("#addInput")
let searchInput = document.querySelector('#searchInput')
let checkbox = document.querySelector("#flexCheckDefault")
let clearAll = document.querySelector(".btn-danger")
// checkbox.checked = item.state;

let todos =[
    {id:1 , title:"buy milk" , state:false},
    {id:2 , title:"buy car" , state:true},
    {id:3 , title:"buy ticket" , state:false},
];

const render = db => {
    renderDoneTodo(db.filter(item => item.state))
    renderNotdoneTodo(db.filter(item => !item.state))
    todoBody.innerHTML =''
    db.map(item => (
        todoBody.innerHTML += `
        
        <div class="sBox d-flex justify-content-between md-w-">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onclick="checkTodo(${item.id})" >
           
            <div class="title">
                 ${item.title}
            </div>
            
            
            <button onclick="deleteTodo(${item.id})" type="button" class="btn btn-outline-danger"><i class="bi bi-x"></i></button>
        </div>
        `
    ))
};
const renderDoneTodo =db =>{
    todoBodyDone.innerHTML =''
    db.map(item => (
        todoBodyDone.innerHTML += `
        
        <div class="sBox d-flex justify-content-between">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onclick="checkTodo(${item.id})" checked >
        <div class="title">
        ${item.title}
          </div>
            
            <button onclick="deleteTodo(${item.id})" type="button" class="btn btn-outline-danger"><i class="bi bi-x"></i></button>
        </div>
        `
    ))
}

const renderNotdoneTodo =db =>{
    todoBodyNotdone.innerHTML =''
    db.map(item => (
        todoBodyNotdone.innerHTML += `
        
        <div class="sBox d-flex justify-content-between ">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onclick="checkTodo(${item.id})" >
        <div class="title">
        ${item.title}
        </div>
            
            <button onclick="deleteTodo(${item.id})" type="button" class="btn btn-outline-danger"><i class="bi bi-x"></i></button>
        </div>
        `
    ))
}


const addTodo = title =>{
    todos =[...todos,{id:Math.floor(Math.random()*1000 ) , title: addInput.value , state:false}];
    addInput.value ='';
    render(todos)
}

const checkTodo =id =>{
    todos = todos.map(item => item.id ===id ? {...item,state: !item.state} :item);
    
    
    
    render(todos);

}
const deleteTodo =id => {
     todos = todos.filter(item => item.id !== id);
     render(todos);
}

render(todos);



function nightMode(){
    const bdy = document.body;
    bdy.classList.toggle("dark-mode");
    if ( document.getElementById("night-day").classList.contains('btn-dark') )
{
document.getElementById("night-day").classList.toggle('btn-light');
}
    
    
}
const clearall = (todos) =>{
    todos = [];
    render(todos)
}
const searchArray=(keyup , todos)=>{
    

}