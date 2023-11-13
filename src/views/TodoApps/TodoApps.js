import React from "react";
import "./TodoApps.scss";
import AddTodos from "./AddTodos";
import { toast } from 'react-toastify';
import color from "../HOC/Color";

class TodoApps extends React.Component {
    state = {
        listTodos: [
            { id: '1', title: 'Hong Dang' },
            { id: '2', title: 'Thu Thuy' }

        ],
        editTodo: {}
    }

    addTodo = (Todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, Todo]
        })

    }

    handelOnclickDelete = (todo) => {
        console.log('==> input delete', todo)
        let check = window.confirm('Do you want to delete Todo ?')
        if (check) {
            let currentListTodo = this.state.listTodos
            currentListTodo = currentListTodo.filter(item => item.id !== todo.id)
            this.setState({
                listTodos: currentListTodo
            })
            toast.success('delete success')
        }
    }

    handleOnclickEdit = (todo) => {
        let { editTodo, listTodos } = this.state
        //click save
        if (editTodo.id === todo.id) {
            let listTodosCopy = [...listTodos]
            let objectIndex = listTodosCopy.findIndex((item => item.id === todo.id))
            listTodosCopy[objectIndex].title = editTodo.title
            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })
            toast.success('Update Todo success')
            return;
        }

        //click edit
        this.setState({
            editTodo: todo
        })
    }

    handelOnchangeEdit = (event) => {
        let editTodoCopy = { ...this.state.editTodo }
        editTodoCopy.title = event.target.value
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let { listTodos, editTodo } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0


        return (
            <>
                <div className="header">
                    <h1>Hello, This is my TodoApps</h1>
                </div>
                <div className="body">
                    <AddTodos addTodo={this.addTodo} />
                    <div className="body-list-add">
                        {listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        <div className="todo-child-content">
                                            {isEmptyObj === false && item.id === editTodo.id ?
                                                <span>
                                                    {item.id} - <input type="text" value={editTodo.title} onChange={(event) => this.handelOnchangeEdit(event)} />
                                                </span>
                                                :
                                                <span>
                                                    {item.id} - {item.title}
                                                </span>
                                            }
                                        </div>
                                        <div className="todo-child-action">
                                            <button onClick={() => this.handleOnclickEdit(item)}>
                                                {isEmptyObj === false && item.id === editTodo.id ? 'Save' : 'Edit'}
                                            </button>
                                            <button onClick={() => this.handelOnclickDelete(item)}>Delete</button>
                                        </div>
                                    </div>
                                )
                            }
                            )
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default color(TodoApps);
