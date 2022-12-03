import React, { useState } from "react"
import logo from "./Assets/logo.svg"
import burger from "./Assets/icon-menu.svg"
import close from "./Assets/icon-menu-close.svg"


const Header = () => {

const [open, setOpen] = useState(false);
let mobileBurgerClass = "mobile-burger-menu"
let mobileOverlayClass = "mobile-overlay"
let menuIcon = burger;

const clickHandler = () => {
    setOpen(!open);
};

if (open === true) {
    mobileOverlayClass = "mobile-overlay active"
    menuIcon = close;
    mobileBurgerClass = "mobile-burger-menu active"
}
else
{mobileOverlayClass = "mobile-overlay"}

    return(
<div>
    <header className="main-header">
        <a href="/Home"> <img src={logo} alt="website logo"></img></a>
            <nav>
                <ul className="items-list">
                    <li><a href="/Home">Home</a></li>
                    <li><a href="/New">New</a></li>
                    <li><a href="/Popular">Popular</a></li>
                    <li><a href="/Trending">Trending</a></li>
                    <li><a href="/Categories">Categories</a></li>
                </ul>
            </nav> 
            
            <div className={`${mobileBurgerClass}`}><img src={menuIcon} alt="burger menu" onClick={clickHandler}></img>
            </div>

            <div className={`${mobileOverlayClass}`}>
                <ul className="items-list-mobile">
                    <li><a href="/Home">Home</a></li>
                    <li><a href="/New">New</a></li>
                    <li><a href="/Popular">Popular</a></li>
                    <li><a href="/Trending">Trending</a></li>
                    <li><a href="/Categories">Categories</a></li>
                </ul>
            </div>
  </header>
</div>
    )
}

export default Header