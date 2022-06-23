import React, { useState } from 'react'
import API from '../App'

function LoginForm({setUser}){
    const [formData, setFormData] = useState({username: "", password: ""})
    const [feedback, setFeedback] = useState("")


    function handleChange(e){
        const obj = {...formData, [e.target.name]: e.target.value}
        setFormData(obj)
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch(API + "login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(d =>{
            if (d.error){setFeedback(d.error)
            } else {
                setFeedback("")
                console.log("log in success")
                console.log(d)
            }
        })
        
    }

    return <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="username"></input>
        <input type="text" name="password" value={formData.password} onChange={handleChange} placeholder="password"></input>
        <button type="submit" > Log In</button>
        <p>{feedback}</p>
    </form>
}

export default LoginForm