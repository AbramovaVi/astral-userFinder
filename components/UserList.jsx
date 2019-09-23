import React, { Component } from 'react';
import { getUsers } from "../sources/users.js";

class UserList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        getUsers({ firstName: "1 todo"})
            .then( ({ data }) => this.setState( {users: data}) );

    }

    render() {
        const { users } = this.state;

        if ( users.length !== 0 ) {
            return (
                <ul>
                    {users.map((item, index) => <li key={index}>{item.firstName} {item.secondName}</li>)}
                </ul>
            )
        } else {return (
            <h3>Нет данных</h3>
        )}
    }
}

export default UserList;