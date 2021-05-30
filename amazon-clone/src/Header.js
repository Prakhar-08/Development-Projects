import React from 'react';
import "./Header.css";
import {Link} from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{ basket , user}] = useStateValue();
   
    const login=() => {
        if(user) {
            auth.signOut();
        }
    }
    
    return (
        <nav className="header">
            {/* logo on left -> img tag */}
            <Link to="/">
                <img 
                    className="header__logo"
                    src="https://www.forbes.com/coupons/vfiles/81499/merchant_image-merchant_open_graph.png/"
                    alt=""
                />
            </Link>

            {/* search box */}
            <div className="header__searchBox">
                <input type="text" className="header__searchInput"></input>
                <SearchIcon className="header__searchIcon"/>
            </div>
            
            {/* 3 links */}
            <div className="header__nav">
                {/* 1 link */}
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={login} className="header__option">
                        <span style={{fontSize: "12px"}}>Hello,{user?.email}</span>
                        <span><strong>{user ? 'Sign Out' : 'Sign In'}</strong></span>
                    </div>
                </Link>
                {/* 2 link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span style={{fontSize: "12px"}}>Returns</span>
                        <span><strong>& orders</strong></span>
                    </div>
                </Link>
                {/* 3 link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span style={{fontSize: "12px"}}>Your</span>
                        <span><strong>Prime</strong></span>
                    </div>
                </Link>
                {/* basket icon */}
                <Link to="/checkout" className="header__link">
                    <div className="header__basket">
                        <AddShoppingCartIcon style={{fontSize: "30px"}} />
                        <span style={{margin: "0 5px" ,fontSize: "15px"}}>{basket?.length}</span>
                    </div>
                </Link>
            </div>

            
        </nav>
    )
}

export default Header;
