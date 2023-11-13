import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <>
                <div className="topnav">
                    <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink>
                    <NavLink to="/job" activeClassName="active" >Manager Job</NavLink>
                    <NavLink to="/todo" activeClassName="active" >App Todo</NavLink>
                    <NavLink to="/user" activeClassName="active" >Manager User</NavLink>
                </div>
            </>
        )
    }
}

export default Nav;