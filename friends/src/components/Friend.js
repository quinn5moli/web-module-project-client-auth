import React from 'react';
import { Link } from 'react-router-dom';

function Friend(props) {

    return (
        <div>
            <Link to ={`/friends/${props.id}`}>
                {props.name}
            </Link>
        </div>
    )
}

export default Friend;