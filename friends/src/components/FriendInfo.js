import React from "react";
import { useParams } from 'react-router-dom';

function FriendInfo(props) {

    let { id } = useParams();

    const displayFriend = props.friends.find(friend => friend.id == id)

    return (
        <div>
            <h3>{displayFriend.name}</h3>
            <h4>Age: {displayFriend.age}</h4>
            <h4>Email: {displayFriend.email}</h4>
        </div>
    )
}

export default FriendInfo;