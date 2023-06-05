import React from "react";
import './Footer.css';
import youtubeIcon from '../assets/youtubeIcon.svg'
import facebookIcon from '../assets/facebookIcon.svg'
import twitterIcon from '../assets/twitterIcon.svg'
import instaIcon from '../assets/instagramIcon.svg'

const Footer = () => {
    return (
        <div className="myFooter">
            <div className="about-details">
                <div className="address">
                    <h4>Our Headquarters</h4>
                    <p>1234 Main Street</p>
                    <p>Cityville, Stateville 56789</p>
                    <p>United Buckets</p>
                </div>

                <div className="socials">
                    <h4>Follow us on our socials</h4>
                    <img src={youtubeIcon} alt="Youtube"/>
                    <img src={facebookIcon} alt="Facebook"/>
                    <img src={twitterIcon} alt="Twitter"/>
                    <img src={instaIcon} alt="Instagram"/>
                </div>
            </div>    
                    
            <div>Copyright &copy; 2023 <a href="https://www.github.com/MickFrog" rel="noreferrer" target="_blank">&nbsp;MickFrog</a></div>
        </div>
    )

}

export default Footer;