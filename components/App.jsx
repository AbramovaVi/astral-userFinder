import React, {Component} from 'react';

import UserList from "./UserList";

class App extends Component {
    render() {

        return (
            <div>
                <h3>User Finder</h3>
                <UserList />
            </div>
        );
    }
}

export default App;
