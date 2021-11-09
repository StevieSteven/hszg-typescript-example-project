import {TodoList, TodoListEntry} from "../todoList";

export const todoListSection = (todoList: TodoList) => {
    return `
    <div>
        <h2>${todoList.name}</h2>
        ${todoListEntrySection(todoList.entries)}
    </div>
    `
}

const todoListEntrySection = (entries: TodoListEntry[]) => {
    return `
        <ul>
            ${entries.map(entry => {
        return `
                    <li class="${entry.done ? "green" : ""}">${entry.text}</li>
                `
    }).join("")}
        </ul>
    `
}
