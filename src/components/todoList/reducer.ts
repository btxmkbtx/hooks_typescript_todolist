import {ACTION_TYPE, IAction, IState, ITodo} from "./typings";

function todoReducer(state: IState, action: IAction):IState {
    const {type, payload} = action

    switch(type){
        case ACTION_TYPE.ADD_TODO:
            return {
                ...state,
                todoList: [...state.todoList, payload as ITodo] //payload是联合类型，所以返回值需要做类型断言
            }
        case ACTION_TYPE.REMOVE_TODO:
            return {
                ...state,
                todoList: state.todoList.filter(todo=>todo.id!=payload)
            }
        case ACTION_TYPE.TOGGLE_TODO:
            return {
                ...state,
                todoList: state.todoList.map(todo=>{
                    return todo.id===payload ?
                        {
                            ...todo,
                            completed: !todo.completed
                        } :
                        {
                            ...todo
                        }
                })
            }
        default:
            return state
    }
}

export {
    todoReducer
}
