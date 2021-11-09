import {dummyList} from "../todoList";

const url = "http://stephanstrehler.de:8081/todoList"

export const getTodoList = () => {
    return Promise.resolve(dummyList);
}
