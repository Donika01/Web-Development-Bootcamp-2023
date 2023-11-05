let command = prompt("What do you want to do?");

const toDoList = [];

while (command !== 'quit') {
    command = prompt("Enter a command");
    if (command === 'new') {
        const addItem = prompt("Add a new Item")
        console.log(`${addItem} added to the list`);
        toDoList.push(addItem);
    } else if (command === 'list') {
        for (let listElement in toDoList)
            console.log(`${listElement}: ${toDoList[listElement]}`);
    } else if (command === 'delete') {
        if (toDoList.length === 0) {
            console.log("List is empty")
        } else {
            const value = prompt("Which item do you want to delete")
            if (!isNaN(parseInt(value))) {
                let indexToDelete = parseInt(value);
                toDoList.splice(indexToDelete, 1);
            } else {
                console.log("Cannot convert to an integer");
            }

        }
    }
    console.log("*********")
}

console.log("You quit!")