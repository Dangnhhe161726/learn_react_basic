import React from "react";
import { toast } from 'react-toastify';

class AddTodos extends React.Component {
    state = {
        title: ''
    }

    handleOnChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleOnclickAdd = () => {
        if (!this.state.title) {
            toast.error(`Don't write Todo`)
            return;
        }
        let Todo = {
            id: Math.floor(Math.random() * 100),
            title: this.state.title
        }
        console.log('==> input add: ', Todo)
        this.props.addTodo(Todo)
        this.setState({
            title: ''
        })

        toast.success('add Todo success')
    }

    render() {
        let { title } = this.state;
        return (
            <div className="body-add">
                <input type="text" placeholder="Add Todo" value={title} onChange={(event) => this.handleOnChange(event)} />
                <button onClick={() => this.handleOnclickAdd()}>Add</button>
            </div>
        )
    }
}

export default AddTodos;