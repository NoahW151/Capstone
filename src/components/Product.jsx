import {useNavigate} from "react-router-dom"

export default function Product({id, title, price, description, category, image, rating})
{
    const navigate = useNavigate();
    return (
        <div className="product-listing" onClick={() => navigate("/product/" + id)}>
            <h3>{title}</h3>
            <img src={image} alt={title}></img>
            <p>${price}</p>
        </div>
    )
}