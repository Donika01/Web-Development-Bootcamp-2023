const todoList = [];

while (true) {
  const command = prompt(
    "What do you wanna do? (new - add an item), (delete - delete an item), (list - list items)"
  );

  if (command === "new") {
    const newItem = prompt("Enter new item name");
    console.log(`${newItem} added to the list`);
    todoList.push(newItem);
  } else if (command === "delete") {
    if (todoList.length === 0) {
      console.log("Nothing to delete");
    } else {
      const deleteIndex = prompt("Which item do you want to delete");
      if (!isNaN(parseInt(deleteIndex))) {
        let indexToDelete = parseInt(deleteIndex);
        todoList.splice(indexToDelete, 1);
        console.log(`Deleted successfully at index ${deleteIndex}`);
      } else {
        console.log("Cannot convert to an integer");
      }
    }
  } else if (command === "list") {
    for (let listElement in todoList) {
      console.log(`${listElement}: ${todoList[listElement]}`);
    }
  } else if (command === "quit") break;
  else {
    console.log("Command is not valid. Please enter a valid command. ");
  }
}

console.log("*********");
console.log("You quit!");