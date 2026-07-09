import React, { useState } from 'react'

function Signup() {
    const [email,setemail]=useState("")
    const [username,setusername]=useState("")
    const [password,setpassword]=useState('')
    const [data , setdata]=useState([])
    const handleSubmit = async (e)=>{
        e.preventDefault()
        try {
            const res = await fetch('http://localhost:8000/api/users/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password })
            })
            const result = await res.json()
            setdata(result)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" value={username} onChange={e => setusername(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={e => setemail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={e => setpassword(e.target.value)} />
            <button type="submit">Signup</button>
        </form>



    </div>
  )
}

export default Signup