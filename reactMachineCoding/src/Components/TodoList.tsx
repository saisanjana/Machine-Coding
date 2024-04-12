import { useState } from "react"

const TodoList  = () => {
    const [todos,setTodos] = useState<any>([]);
    const [inputVal, setInputVal] = useState('');
    const [editingTodo, setEditingTodo] = useState<number|null>(null);
    const [editInputVal, setEditInputVal] = useState('');
    const onInputChange = (e:any) => {
        setInputVal(e.target.value)
    }
    const addItem = () => {
        let dummyTodos = [...todos];
        setTodos([...dummyTodos, {name:inputVal,completed:false}])
        setInputVal('')
    }
    const changeTodoStatus= (index:number) => {
        let dummyTodos = [...todos]
        dummyTodos[index].completed = !dummyTodos[index].completed
        setTodos([...dummyTodos]);
    }
    const removeTodo = (index:number) =>{
        let dummyTodos = [...todos];
        dummyTodos.splice(index,1);
        setTodos([...dummyTodos])
    }
    const editTodo = (index:number) => {
        setEditingTodo(index);
        setEditInputVal(todos[index].name);
    }
    const onChangeEditInput = (e:any) => {
        setEditInputVal(e.target.value);
    }
    const saveEdits=(index:number) => {
        let dummyTodos = [...todos];
        dummyTodos[index].name = editInputVal;
        setTodos([...dummyTodos])
        setEditInputVal('');
        setEditingTodo(null);
    }
    return (
    <>
    <div className="flex justify-center m-10">
        <input className="border-2 border-black p-2" onChange={(e)=>{onInputChange(e)}} value={inputVal} ></input>
        <button className="m-2 bg-violet-500 p-2 rounded-lg" onClick={addItem}>Add</button>
    </div>
    <div className="flex flex-col justify-center align-middle text-center">
        {todos.map((todo:any,index:number)=>{
            return (<div key={todo.name}>
                <input type="radio" onClick={() => {changeTodoStatus(index)}} checked={todo.completed}></input>
                {(editingTodo === index) ? 
                    <input value={editInputVal} onChange={(e) => {onChangeEditInput(e)}} autoFocus></input>
                :<label className={todo.completed ? "m-2 opacity-50" : "m-2"} onDoubleClick={()=>{editTodo(index)}} >{todo.name}</label>}
                {(editingTodo === index) ?
                    <span onClick={()=>{saveEdits(index)}} className="cursor-pointer">save</span>
                :<span className="text-red-600 text-xl cursor-pointer" onClick={()=>{removeTodo(index)}}>X</span>}
            </div>)
        })}
    </div>
    </>
    );
}

export default TodoList;