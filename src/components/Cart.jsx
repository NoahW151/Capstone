import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import CartItem from "./CartItem";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout'

export default function Cart()
{
    const token = useSelector(state => state.account.token);
    const id = useSelector(state => state.account.id);
    const cartId = useSelector(state => state.account.cartId);
    const [cartItems, setCartItems] = useState([]);
    const getCartItems = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/carts/" + cartId).then(res => res.json())
            setCartItems(response.products)
            return response.products;
        } catch (error) {
            console.error(error)
            return null;
        }
    }
    useEffect(() => {
        getCartItems();
    }, [])
    return(
        <div>
            {!token && <h1>Please log in to view your cart</h1>}
            {token && (
                <div>
                    <h2 onClick={() => console.log(cartItems)}>Your cart</h2>
                    <table>
                        <tr>
                            <th>Product Title</th>
                            <th>Quantity</th>
                            {cartItems.map((item) => (<CartItem prodId={item.productId} quantity={item.quantity}/>))}
                        </tr>
                    </table>
                    <div className="aligned-row" onClick={() => alert("Payment confirmed")}>
                        Checkout <ShoppingCartCheckoutIcon></ShoppingCartCheckoutIcon>
                    </div>
                </div>
            )}
        </div>
    )
}