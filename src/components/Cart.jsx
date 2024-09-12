import {useSelector} from "react-redux";

export default function Cart()
{
    const token = useSelector(state => state.account.token);
    const id = useSelector(state => state.account.id);
    return(
        <div>
            {!token && <h1>Please log in to view your cart</h1>}
        </div>
    )
}