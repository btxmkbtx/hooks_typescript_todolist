export interface ITodo {
    id: number
    content: string
    completed: boolean
}

export interface IState {
    todoList: ITodo[]
}

export interface IAction {
    type:ACTION_TYPE
    payload:ITodo | number //联合类型，两种可能性
}

export enum ACTION_TYPE {
    ADD_TODO = 'addTodo',
    REMOVE_TODO = 'removeTodo',
    TOGGLE_TODO = 'toggleTodo'
}
