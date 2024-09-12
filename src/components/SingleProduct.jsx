import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import {useEffect, useState} from "react";
import {useSelector} from 'react-redux';
import {useParams} from "react-router-dom";

//Single product page when you click on an item
export default function SingleProduct()
{
    let {id} = useParams();
    const token = useSelector(state => state.account.token);
    const [product, setProduct] = useState({});
    const [cartAdded, setCartAdded] = useState(false);
    const getProdInfo = async () => {
        const response = await fetch("https://fakestoreapi.com/products/" + id).then(res => res.json());
        setProduct(response)
    }
    useEffect(() => {
        getProdInfo()
    }, [])
    return(
        <div className="single-product">
            <h2>{product.title}</h2>
            <div><img src={product.image}></img></div>
            <p>About: {product.description}</p>
            <hr></hr>
            <p>For only ${product.price}!</p>
            <p>Find it in our {product.category} section!</p>
            {token && (
                <>
                <div className='aligned-row' onClick={() => setCartAdded(true)}>
                    <span>Add to cart</span>
                    <AddShoppingCartIcon></AddShoppingCartIcon>
                </div>
                {cartAdded && (
                    <div className='addedToCart'>
                        {product.title} has been added to cart!
                    </div>
                )}
                </>
            )}
        </div>
    )
}