import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import {useEffect, useState} from "react"
import Product from "./Product";

export default function Products()
{
    const [products, setProducts] = useState([]);
    const [filterMenuOpen, setFilterMenuOpen] = useState(false);
    const [filterMinPrice, setFilterMinPrice] = useState(0)
    const [filterMaxPrice, setFilterMaxPrice] = useState(10000)
    const [filterCategory, setFilterCategory] = useState("all")
    const [filterSearch, setFilterSearch] = useState("");
    const fetchAllProducts = async () => {
        const resp = await fetch('https://fakestoreapi.com/products').then(res => res.json());
        return resp;
    }
    const filterProductsFn = (product) => {
        let passed = false;
        if(+product.price >= filterMinPrice && +product.price <= filterMaxPrice)
        {
            if(filterCategory != "all")
            {
                if(product.category == filterCategory)
                {
                    passed = true;
                }
            }
            else
            {
                passed = true;
            }
            if(filterSearch != "")
            {
                if(!product.title.toLowerCase().includes(filterSearch.toLowerCase()))
                {
                    passed = false;
                }
            }
        }
        return passed;
    }
    const filterProducts = async () => {
        const allProds = await fetchAllProducts();
        setProducts(allProds.filter(prod => filterProductsFn(prod)));
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
            <p onClick={() => setFilterMenuOpen(!filterMenuOpen)} className='filter-button'>Filter {filterMenuOpen ? <KeyboardArrowUpIcon fontSize='small'></KeyboardArrowUpIcon> : <KeyboardArrowDownIcon fontSize='small'></KeyboardArrowDownIcon>}</p><br/>
            {filterMenuOpen && (
                <div className='filter-menu'>
                    <InputLabel id="filterLabel">Category</InputLabel>
                    <Select label="Category" labelId='filterLabel' value={filterCategory} onChange={e => setFilterCategory(e.target.value)}>
                        <MenuItem value="all">All</MenuItem>
                        <MenuItem value="electronics">Electronics</MenuItem>
                        <MenuItem value="jewelery">Jewelry</MenuItem>
                        <MenuItem value="men's clothing">Men's Clothing</MenuItem>
                        <MenuItem value="women's clothing">Women's Clothing</MenuItem>
                    </Select>
                    <TextField label="Min Price" value={filterMinPrice} onChange={e => setFilterMinPrice(e.target.value)} type='number'></TextField>
                    <TextField label="Max Price" value={filterMaxPrice} onChange={e => setFilterMaxPrice(e.target.value)} type='number'></TextField>
                    <TextField label="Search" value={filterSearch} onChange={e => setFilterSearch(e.target.value)}></TextField>
                    <Button color='error' onClick={() => filterProducts()}>Apply Filters</Button>
                </div>
            )}
            <div className="products-list">
                {products.map((prod) => (<Product id={prod.id} title={prod.title} price={prod.price} image={prod.image}/>))}
            </div>
        </div>
    )
}