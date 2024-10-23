import React from 'react';
import style from './contact.module.css';
import { PiGithubLogoThin } from "react-icons/pi";
import { PiLinkedinLogo } from "react-icons/pi";
import { PiVoicemail } from "react-icons/pi";

const Contacts = () => {


    return (
        <div className={style.container}>
            <div className={style.details}>
                <h2>About me</h2>
                <p>Email: abc@gmail.com</p>
                <p>Phone: +32128-239129</p>
                <p>Address: house#12, street#1, california, USA</p>
            </div>
            <div className={style.socials}>
                <div className={style.social}><a href="">Github</a><PiGithubLogoThin/></div>
                <div className={style.social}><a href="https://www.linkedin.com/in/adnan-zahid-570579272/">Linkedin</a><PiLinkedinLogo/></div>
                <div className={style.social}><a href="">Email</a><PiVoicemail/></div>

            </div>

        </div>
    );
};

export default Contacts;
