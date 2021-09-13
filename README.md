## 介绍
这是一个hooks+typescript版本的TodoList小练习

## 脚手架
npx create-react-app 项目名 --template typescript

## 组件划分
    1. APP组件
    2. TodoList组件
    3. 自组件
        - Input
        - List
            - index
            - Item

## 关于useState和useReducer
useState在实际项目中基本用不到，因为有useReducer这个更优解
使用 useReducer 还能给那些会触发深更新的组件做性能优化，因为你可以向子组件传递 dispatch 而不是回调函数 

## 语法难点
1. objA!.value; 断言objA肯定存在value属性
