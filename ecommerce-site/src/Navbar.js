import React from 'react';
import "./Navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import FavoriteIcon from '@material-ui/icons/Favorite';



const Navbar = () => {
    return (
        <div>
            <nav className="header">
                <div className="title">
                    <h2><span className="num">D</span>evskart <AllInclusiveIcon style={{fontSize: "35"}} /></h2>   
                </div>

                <div className="categories">
                    <div><span className="item">Categories</span></div>
                    <div><span className="item">Accesories</span></div>
                    <div><span className="item">Teach on Devskart</span></div>
                    
                </div>
                
                <div className='header__center'>
                    <input type="text" placeholder="Search for anything"/>
                    <SearchIcon />
                </div>
                <div className='header__right'>
                    <div>
                        <Button style={{marginLeft: '10px', backgroundColor: "black", border: '0.5px solid black', fontWeight: '600'}} size="medium" variant="contained" color="primary">Login</Button>
                        <Button style={{marginLeft: "10px", backgroundColor: "white", border: '0.5px solid black', fontWeight: '600'}} size="medium" variant="contained" color="default">Sign up</Button>
                    </div>
                    <div>
                        <Button><AddShoppingCartIcon style={{fontSize: "30px"}} /></Button>
                        <Button><FavoriteIcon style={{fontSize: "30px", color: "red"}} /></Button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;