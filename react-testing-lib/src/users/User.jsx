import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

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
        <div data-testid="users-page">
            {users.map(user => <Link 
                            to={`/users/${user.id}`} 
                            key={user.id} 
                            data-testid="user-item"
                            >
                                {user.name}
                            </Link>)}
        </div>
    )
}

export default User