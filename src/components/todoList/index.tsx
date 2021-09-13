import React, {FC, ReactElement, useCallback, useReducer} from 'react';
import TdInput from "./input";
import TdList from "./list";
import {ACTION_TYPE, ITodo} from "./typings";
import {todoReducer} from "./reducer";

const initState = {
    todoList: []
}

const TodoList: FC = (): ReactElement => {

    ////useState在实际项目中基本用不到，因为有useReducer这个更优解
    //const [todoList, setTodoList] = useState<ITodo[]>([])//这个useState的写法是函数泛型
    const [state, dispatch] = useReducer(todoReducer, initState);

    //为了防止addTodo函数句柄在子组件中随着渲染多次生成，控制这个方法只在初期化时生成函数句柄
    const addTodo = useCallback((todo:ITodo):void => {
        //setTodoList([...todoList, todo])
        dispatch({
            type: ACTION_TYPE.ADD_TODO,
            payload: todo
        })
    }, [])

    const removeTodo = useCallback((id: number):void => {
        dispatch({
            type: ACTION_TYPE.REMOVE_TODO,
            payload: id
        })
    }, [])

    const toggleTodo = useCallback((id: number):void => {
        dispatch({
            type: ACTION_TYPE.TOGGLE_TODO,
            payload: id
        })
    }, [])

    return (
        <div className="todo-list">
            <TdInput addTodo={addTodo} todoList={state.todoList}/>
            <TdList todoList={state.todoList} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
        </div>
    )
}

export default TodoList;
