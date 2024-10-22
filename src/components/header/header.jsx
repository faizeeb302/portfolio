import React from 'react';
import style from "./header.module.css"

const Header = ()=>{

    return(
        <div className={style.container}>
            <div className={style.text}><a  href="#profile">{"Profile"}</a></div>
            <div className={style.text}><a  href="#projects">{"Projects"}</a></div>
            <div className={style.text}><a href="#contact">{"Contact"}</a></div>
        </div>
    )
   
}

export default Header;

