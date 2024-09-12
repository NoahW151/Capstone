import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

export default function Account()
{
    const token = useSelector(state => state.account.token);
    const id = useSelector(state => state.account.id);
    const username = useSelector(state => state.account.username);
    const [user, setUser] = useState({});
    const getUser = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/users/" + id).then(res => res.json());
            setUser(response);
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        getUser()
    }, [])
    return(
        <div>
            {!user && (
                <h1>Please login to view this page</h1>
            )}
            {user && (
                <div>
                    <h2>Welcome {user.username}!</h2>
                    <p>Email: {user.email}</p>
                    <p>Phone #: {user.phone}</p>
                </div>
            )}
        </div>
    )
}