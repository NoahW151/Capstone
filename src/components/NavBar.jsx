import MenuIcon from '@mui/icons-material/Menu'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

export default function NavBar()
{
    const token = useSelector((state) => state.account.token);

    const [navShown, setNavShown] = useState(false)
    return(
        <div className='navbar'>
            {navShown && <div>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
                {!token && <Link to='/login'>Login</Link>}
                {token && <Link to='/account'>My Account</Link>}
                {token && <Link to='/cart'>My Cart</Link>}
                <span className='menuicon' onClick={() => setNavShown(!navShown)}><MenuIcon></MenuIcon></span>
                </div>}
            {!navShown && <div className='menuicon' onClick={() => setNavShown(!navShown)}>
            <MenuIcon></MenuIcon>
            </div>}
        </div>
    )
}