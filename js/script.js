const list = document.querySelector("#content-list");
let todos = [];

const createTodo = () => {
  const { value: description } = document.querySelector("#note-input");

  if (description.length === 0) {
    alert("Nota inválida.");
    return;
  }

  const todo = findTodo({ description });

  if (todo) {
    alert("Nota já adicionada.");
    return;
  }

  todos.push(description);
  list.innerHTML = mountList(todos);
};

const findTodo = ({ description }) => {
  return todos.find((todo) => todo === description);
};

const mountList = (todos) => {
  return todos.map((todo) => `<li>${todo} <button onclick="removeTodo('${todo}')">X</button></li>` ).join("");
};

const removeTodo = (description) => {
  todos = todos.filter((todo) => todo !== description)
  list.innerHTML = mountList(todos)
}