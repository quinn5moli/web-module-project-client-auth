import React, { useState } from "react";

const initialForm = {
    name: '',
    age: '',
    email: '',
}

function AddFriend(props) {

    const { friends, setFriends } = props;
    const [newFriend, setNewFriend ] = useState(initialForm)

    const handleChange = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        setFriends([
            ...friends,
            {...newFriend}
        ]);

        setNewFriend(initialForm)
        console.log(friends)
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Name:
                    <input
                        type="text"
                        name="name"
                        value={newFriend.name}
                        onChange={handleChange}
                    />
                </label>
                <label>Age:
                    <input
                        type="text"
                        name="age"
                        value={newFriend.age}
                        onChange={handleChange}
                    />
                </label>
                <label>Email:
                    <input
                        type="text"
                        name="email"
                        value={newFriend.email}
                        onChange={handleChange}
                    />
                </label>

                <button>Submit</button>

            </form>
        </div>

    )
}

export default AddFriend;