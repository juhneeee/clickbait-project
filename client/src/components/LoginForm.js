import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function LoginForm({API, setUser}){
    const [formData, setFormData] = useState({username: "jimmy", password: "password"})
    const [feedback, setFeedback] = useState("")

    const history = useHistory()

    function handleChange(e){
        const obj = {...formData, [e.target.name]: e.target.value}
        setFormData(obj)
    }

    function handleSignUp(){
        fetch(API + "signup", {
            method: "POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(console.log)
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(formData)
        fetch(API + "login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(d =>{
            console.log(d)
            if (d.error){setFeedback(d.error)
            } else {
                setFeedback("")
                console.log("log in success")
                setUser(d.id)
            }
        })
    }

    return <div className='form'>

    <form className='hundred' onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username"></input>
        <label>Password:</label>
        <input type="text" name="password" value={formData.password} onChange={handleChange} placeholder="Password"></input>
        <button type="submit" > Log In</button>
        <p>{feedback}</p>
    </form>
    <button onClick={handleSignUp}>Sign Up</button>
    </div>
}

export default LoginForm