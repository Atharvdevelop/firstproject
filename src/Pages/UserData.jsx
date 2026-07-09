import React, { useEffect, useState } from 'react'

function UserData() {
    const [userdata, setUserData] = useState([]);
    useEffect(() => {
        const fetchdata = async () => {
            try {
                const res = await fetch('http://localhost:8000/api/users/all');
                const data = await res.json();
                setUserData(data);
            }
            catch (error) {
                console.log('Error fetching user Data', error);
            }
        }
        fetchdata();
    }, );
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {userdata.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserData