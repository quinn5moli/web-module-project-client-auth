import React, { useState } from 'react';

const initialForm = {
    username: '',
    password: '',

}

function Login(props) {

    const [ formValues, setFormValues ] = useState(initialForm)

    const loginButton = (e) => {
        e.preventDefault();
        
        axios
            .post("http://localhost:5000/api/login", formValues)
            .then(res => {
                localStorage.setItem('token', res.data.payload)
                history.pushState('/friends')
            })
            .catch(err => console.log(err.response.data.error))
        setFormValues(initialForm)
    }

    const handleChange = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div> 
            <form onSubmit={loginButton}>
                <label>Username:
                    <input
                        type="text"
                        name="username"
                        value={formValues.username}
                        onChange={handleChange}
                    />
                </label>

                <label>Password:
                    <input 
                    type="password"
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                />
                </label>

                <button>Log In</button>
            </form>
        </div>
    )
 }

 export default Login;