import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "./ListUser.scss"

class UserDetail extends React.Component {

    state = {
        user: {}
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`);
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })
        }
    }
    handleOnclickReturn = () => {
        this.props.history.push(`/user`)
    }

    render() {
        let { user } = this.state;
        let isObjectEmpty = Object.keys(user).length === 0;

        return (
            <>
                <div className="user-detail">
                    <div className="user-detail-return">
                        <button onClick={() => this.handleOnclickReturn()}>Return</button>
                    </div>
                    {isObjectEmpty === false &&
                        <>
                            <div className="user-detail-content">
                                <h1>User have id: {user.id}</h1>
                                <table border={1}>
                                    <thead>
                                        <tr>
                                            <td>Id</td>
                                            <td>Avatar</td>
                                            <td>First Name</td>
                                            <td>Last Name</td>
                                            <td>Email</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{user.id}</td>
                                            <td>
                                                <img src={user.avatar} alt="Girl in a jacket" width="100" height="100" />
                                            </td>
                                            <td>{user.first_name}</td>
                                            <td>{user.last_name}</td>
                                            <td>{user.email}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </>
                    }
                </div>
            </>
        )
    }
}

export default withRouter(UserDetail);