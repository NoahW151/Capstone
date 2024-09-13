import {useEffect, useState} from "react"
import Button from "@mui/material/Button"

export default function CartItem({prodId, quantity, deleteProduct})
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
            <td><Button color="error" onClick={() => deleteProduct(prodId)}>Delete</Button></td>
        </tr>
    )
}