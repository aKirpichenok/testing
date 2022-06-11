import axios from "axios"
import { useEffect, useState } from "react"

const User = () => {
    const [users,setUsers] = useState([])

    const loadUsers = async () => {
        const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(resp.data)
    }

    useEffect(() => {
        loadUsers()
    }, [])

    return (
        <div>
            {users.map(user => <div key={user.id} data-testid="user-item">{user.name}</div>)}
        </div>
    )
}

export default User