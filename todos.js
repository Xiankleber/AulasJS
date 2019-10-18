var listElement = document.querySelector("#app ul");//Busca a lista
var inputElement = document.querySelector("#app input");//Busca o elemento dentro do input
var btnElement = document.querySelector("#app button");// Seleciona o botão

var toDos = JSON.parse(localStorage.getItem("list_todos")) || [];// JSON.parse() analisa uma string JSON, construindo o valor ou um objeto

function renderTodos() {
  listElement.innerHTML = "";

  for (todo of toDos) {
    var todoElement = document.createElement("li"); //criando a li
    var todoText = document.createTextNode(todo); // criando o todo de cada li

    todoElement.appendChild(todoText); //  appendchild texto para a li
    listElement.appendChild(todoElement); //appendChild na li para a ul

    var linkElement = document.createElement("a"); //criando a tag a
    linkElement.setAttribute("href", "#"); // atributo href
    var linkText = document.createTextNode("Excluir");

    linkElement.appendChild(linkText); 
    todoElement.appendChild(linkElement); 
    linkElement.style.marginLeft = "20px";

    var pos = toDos.indexOf(todo);
    linkElement.setAttribute("onclick", "deleteTodo(" + pos + ")");
  }
}

renderTodos();

// Inserir o todo

function addTodos() {
  if (!inputElement.value == "") {
    var content = inputElement.value;
    toDos.push(content);
    inputElement.value = "";
    renderTodos();
    saveToStorage();
  }
}

btnElement.onclick = addTodos;

// excluir o todo

function deleteTodo(pos) {
  toDos.splice(pos, 1);
  renderTodos();
  saveToStorage();
}

// salvar no storage

function saveToStorage() {
  localStorage.setItem("list_todos", JSON.stringify(toDos)); 
}