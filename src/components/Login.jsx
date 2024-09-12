import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { setToken, updateUsername, setId, setCartId } from '../slices/AccountSlice'

export default function Login()
{
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [status, setStatus] = useState("");
    const dispatch = useDispatch();
    const getUserIdByName = async (name) => {
        try {
            const response = await fetch("https://fakestoreapi.com/users").then(res => res.json());
            const user = response.filter((item) => item.username === name)
            return user[0].id;
        } catch (error) {
            console.error(error)
            return null;
        }
    }
    const login = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            }).then(res => res.json());
            const token = response.token;
            dispatch(setToken({token}))
            dispatch(updateUsername({username}))
            const id = await getUserIdByName(username)
            dispatch(setId({id}))
            const cartResponse = await fetch("https://fakestoreapi.com/carts/user/" + id).then(res => res.json());
            const cartId = cartResponse[0].id;
            dispatch(setCartId({cartId}));
            setStatus("Login successful!")
        } catch (error) {
            setStatus("Login error. Please check your username and password.")
        }
    }
    return(
        <form className='login'>
            <h1>Log in</h1>
            <TextField value={username} label="Username" onChange={e => setUsername(e.target.value)} required></TextField>
            <TextField value={password} label="Password" type='password' onChange={e => setPassword(e.target.value)} required></TextField>
            <Button onClick={() => login()} color='error'>Log in</Button>
            <p>{status}</p>
        </form>
    )
}