import React, {FC, ReactElement, useRef} from 'react';
import {ITodo} from "../typings";

interface Iprops {
    addTodo: (todo:ITodo) => void
    todoList: ITodo[]
}

const TdInput:FC<Iprops> = (props:Iprops): ReactElement => {

    const inputRef = useRef<HTMLInputElement>(null)

    const {addTodo, todoList} = props

    const addItem = ():void => {
        const val: string = inputRef.current!.value.trim()
        if(val.length) {
            const isExist = todoList.find(todo=>todo.content === val)
            if(isExist) {
                alert('添加对象已存在')
            }

            addTodo({
                id: new Date().getTime(),
                content: val,
                completed: false
            })

            inputRef.current!.value = '' //添加结束后清空一下输入框
        } else {
            alert('请输入添加项内容')
        }
    }

    return (
        <div className="td-input">
            <input type="text" placeholder="请输入待办事项" ref={inputRef}/>
            <button onClick={addItem}>增加</button>
        </div>
    )
}

export default TdInput;
