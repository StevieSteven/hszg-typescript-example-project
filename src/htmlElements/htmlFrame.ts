import {TodoList} from "../todoList";
import {htmlBody} from "./htmlBody";

export const htmlFrame = (todoList: TodoList[]) => {
    return `
    <html>
        <head>
            <title>TODO List</title>
            <style>
                .green {
                    color: #0A0
                }
            </style>
        </head>
        <body>
            ${htmlBody(todoList)}
        </body>
    </html>
    
    `
}
