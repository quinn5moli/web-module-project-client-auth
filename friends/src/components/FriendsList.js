import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Friend from './Friend';

function FriendsList(props) {
    
    const { friends, setFriends } = props

    useEffect(() => {
        axiosWithAuth()
            .get('/friends', {
                headers: {
                    authorization: localStorage.getItem('token')
                }
            })
            .then(res => {
                if(friends.length === 0) {
                    setFriends(res.data)
                }
            })
            .catch(err => console.log(err.response.data.error))
    }, [])

    return (
        <div>

            {showAddFriend === true ? <AddFriend {...props}/> : ""}

            {friends. map (friend => {
                return (
                    <Friend
                        key={friend.id}
                        name={friend.name}
                        id={friend.id} 
                    />
                )
            })}
        </div>
    )
}

export default FriendsList;