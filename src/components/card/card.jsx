import React, { Children } from 'react';
import style from "./card.module.css"

const Card = ({ children }) => {

    return (
        <div className={style.container}>
            {children}
        </div>
    )

}

export default Card;