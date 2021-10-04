import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {

    const {showAddFriend, setShowAddFriend} = props;

    const handleClick = () => {
        setShowAddFriend(!showAddFriend)
    }

    return (
        <div>
            <ul>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link onClick={props.logout}>Logout</Link>
                </li>
                {localStorage.getItem('token') ?
                <li>
                    <Link onClick={handleClick}>Add Friend</Link>
                </li> : ""}
            </ul>
        </div>
    )
}

export default NavBar;