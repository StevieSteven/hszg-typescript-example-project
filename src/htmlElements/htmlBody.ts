import {TodoList} from "../todoList";
import {todoListSection} from "./todoListSection";

export const htmlBody = (todoList: TodoList[]) => {
    return `
        <div>
            <h1>TODO List Zusammenfassung</h1>
        
            ${todoList.map(list => todoListSection(list)).join("")}
        </div>
    `
}
