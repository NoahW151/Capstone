import {useEffect, useState} from "react"

export default function CartItem({prodId, quantity})
{
    const [prod, setProd] = useState("");
    const getProd = async () => {
        const response = await fetch("https://fakestoreapi.com/products/" + prodId).then(res => res.json());
        setProd(response);
    }
    useEffect(() => {
        getProd();
    }, [])
    return(
        <tr>
            <td>{prod.title}</td>
            <td>{quantity}</td>
        </tr>
    )
}