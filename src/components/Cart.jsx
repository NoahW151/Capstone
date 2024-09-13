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
    const deleteProduct = async (prodId) => {
        const response = await fetch("https://fakestoreapi.com/products/" + prodId).then(res => res.json());
        setCartItems(cartItems.filter((item) => item.id == prodId));
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
                            <th>Action</th>
                            {cartItems.map((item) => (<CartItem prodId={item.productId} quantity={item.quantity} deleteProduct={deleteProduct}/>))}
                        </tr>
                    </table>
                    <div className="aligned-row" onClick={() => alert("Your order has been placed")}>
                        Checkout <ShoppingCartCheckoutIcon></ShoppingCartCheckoutIcon>
                    </div>
                </div>
            )}
        </div>
    )
}