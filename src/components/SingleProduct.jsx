import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import {useEffect, useState} from "react";
import {useSelector} from 'react-redux';
import {useParams} from "react-router-dom";

export default function SingleProduct()
{
    let {id} = useParams();
    const token = useSelector(state => state.account.token);
    const [product, setProduct] = useState({});
    const getProdInfo = async () => {
        const response = await fetch("https://fakestoreapi.com/products/" + id).then(res => res.json());
        setProduct(response)
    }
    useEffect(() => {
        getProdInfo()
    })
    return(
        <div className="single-product">
            <h2>{product.title}</h2>
            <div><img src={product.image}></img></div>
            <p>About: {product.description}</p>
            <hr></hr>
            <p>For only ${product.price}!</p>
            <p>Find it in our {product.category} section!</p>
            {token && (
                <div>
                    <AddShoppingCartIcon></AddShoppingCartIcon>
                </div>
            )}
        </div>
    )
}