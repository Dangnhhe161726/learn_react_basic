import React from "react";
import axios from "axios";
import "./ListUser.scss";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

class ListUser extends React.Component {
    state = {
        listUser: []
    }

    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users')
        console.log('===> data call api:', res)
        this.setState({
            listUser: res && res.data && res.data.data ? res.data.data : []
        })
    }

    handleOnclickViewDetail = (user) => {
        this.props.history.push(`/user/${user.id}`)
    }

    render() {
        let { listUser } = this.state;
        return (
            <>
                <div className="list-user">
                    <div className="list-user-title">
                        <h1>This is Manager User Page</h1>
                    </div>
                    <div className="list-user-content">
                        <table border={1}>
                            <thead>
                                <tr>
                                    <td>Id</td>
                                    <td>First Name</td>
                                    <td>Last Name</td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {listUser && listUser.length > 0
                                    && listUser.map((item, index) => {
                                        return (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.first_name}</td>
                                                <td>{item.last_name}</td>
                                                <td>
                                                    <button onClick={() => this.handleOnclickViewDetail(item)}>View Detail</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(ListUser);