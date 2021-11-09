export interface TodoListEntry {
    id: number;
    listId: number;
    text: string;
    done: boolean;
}

export interface TodoList {
    id: number;
    name: string;
    entries: TodoListEntry[];
}

export const dummyList: TodoList[] = [
    {
        id: 1,
        name: "first list",
        entries: [
            {
                id: 3,
                listId: 1,
                text: "TypeScript lernen",
                done: false
            },
            {
                id: 4,
                listId: 1,
                text: "webseite bauen",
                done: false
            },
            {
                id: 5,
                listId: 1,
                text: "React lernen",
                done: false
            }
        ]
    },
    {
        id: 2,
        name: "second list",
        entries: []
    }
];

export interface TodoListNameToEntryCount {
    listName: string;
    entryCount: number;
}

export function countElements (list: TodoList[]): TodoListNameToEntryCount[] {
    const countElementOfList = (list: TodoList) => {
        return {
            listName: list.name,
            entryCount: list.entries.length
        };
    }

    return list.map(countElementOfList);
};
