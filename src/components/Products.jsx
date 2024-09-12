import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import {useEffect, useState} from "react"
import Product from "./Product";

export default function Products()
{
    const [products, setProducts] = useState([]);
    const [filterMenuOpen, setFilterMenuOpen] = useState(false);
    const fetchAllProducts = async () => {
        const resp = await fetch('https://fakestoreapi.com/products').then(res => res.json());
        return resp;
    }
    useEffect(() => {
        async function getProds() {
            const prods = await fetchAllProducts();
            setProducts(prods);
        }
        getProds();
    }, [])
    return(
        <div>
            <h2>Our stock</h2>
            <p onClick={() => setFilterMenuOpen(!filterMenuOpen)} className='filter-button'>Filter {filterMenuOpen ? <KeyboardArrowDownIcon fontSize='small'></KeyboardArrowDownIcon> : <KeyboardArrowUpIcon fontSize='small'></KeyboardArrowUpIcon>}</p>
            <div className="products-list">
                {products.map((prod) => (<Product id={prod.id} title={prod.title} price={prod.price} image={prod.image}/>))}
            </div>
        </div>
    )
}