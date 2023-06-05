import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <div className="myFooter">
            <div className="about-details">
                <div className="address">
                    <h4>Our Headquarters</h4>
                    <p>1234 Main Street</p>
                    <p>Cityville, Stateville 56789</p>
                    <p>United States</p>
                </div>

                <div>
                    <h4>Follow us on our socials</h4>
                </div>
            </div>    
                    
            <div>Copyright &copy; 2023 <a href="https://www.github.com/MickFrog" rel="noreferrer" target="_blank">&nbsp;MickFrog</a></div>
        </div>
    )

}

export default Footer;