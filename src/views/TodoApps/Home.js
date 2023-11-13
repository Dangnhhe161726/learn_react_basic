import React from "react";
import color from "../HOC/Color";
import { connect } from "react-redux";

class Home extends React.Component {

    handleOnclickDelete = (user) => {
        console.log('>> input user delete', user);
        this.props.deleteUserRedux(user);
    }

    handleOnSubmit = (event, nameUser) => {
        event.preventDefault()
        this.props.addUserRedux({ name: nameUser })
    }

    render() {
        let listUser = this.props.dataRedux;

        let input;

        return (
            <>
                <div>
                    <h1>This is my Home Page </h1>
                </div>
                <div>
                    <form onSubmit={(event) => this.handleOnSubmit(event, input.value)}>
                        <input type="text" ref={node => input = node} />
                        <button type="submit">Add</button>
                    </form>
                </div>
                <br />
                <div>
                    {listUser && listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (
                                <div key={item.id} style={{ display: "flex" }}>
                                    <div className="content" style={{ margin: "0px 10px 0px 0px" }}>
                                        {item.id} - {item.name}
                                    </div>
                                    <div className="action" style={{ color: "red" }}>
                                        <button onClick={() => this.handleOnclickDelete(item)}> X </button>
                                    </div>
                                </div >
                            )
                        })
                    }
                </div >
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: (addUser) => dispatch({ type: 'ADD_USER', payload: addUser })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(color(Home));