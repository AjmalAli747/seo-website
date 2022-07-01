import React from 'react';
import "../Css/Home.css";
import SeoImg from "../Images/seo-image.png";

const Footer = () => {
  return (
    <footer >
        <div className="footer_section">
            <div className="footer_column">
                <ul>
                    <li><a href=""><img src={SeoImg} alt="" /></a></li>
                    <li><p style={{color: "#FFFFFF"}}>The online specialist can develop a digital plan to help you grow marketing.</p></li>
                    <ul>
                        <li><a href=""><i className="fa-brands fa-facebook"></i></a></li>
                        <li><a href=""><i className="fa-brands fa-twitter"></i></a></li>
                        <li><a href=""><i className="fa-brands fa-instagram"></i></a></li>
                        <li><a href=""><i className="fa-brands fa-youtube"></i></a></li>
                        <li><a href=""><i className="fa-brands fa-linkedin"></i></a></li>
                    </ul>
                </ul>
            </div>
            <div className="footer_column">
                <ul className='footer_ul'>
                    <li><a href=""><h1>Service Link</h1></a></li>
                    <li><a href="">SEO for Small Business</a></li>
                    <li><a href="">Enterprise SEO</a></li>
                    <li><a href="">SEO for Local Services</a></li>
                    <li><a href="">National SEO</a></li>
                    <li><a href="">International SEO</a></li>
                </ul>
            </div>
            <div className="footer_column">
                <ul className='footer_ul'>
                    <li><a href=""><h1>Address</h1></a></li>
                    <li><a href="" style={{lineHeight: "33px"}}><i className="fa-solid fa-location-dot"></i> 8565 Manina Avenue <br /> Street NY 91335, <br /> United States</a></li>
                    <li><a href=""><i className="fa-solid fa-phone"></i>Phone: 12345678910</a></li>
                    <li><a href=""><i className="fa-solid fa-earth-europe"></i>exmaple@gmail.com</a></li>
                </ul>
            </div>
            <div className="footer_column">
                <ul className='footer_ul'>
                    <li><a href=""><h1>Quick Links</h1></a></li>
                    <li><a href="">Our Product</a></li>
                    <li><a href="">Documentation</a></li>
                    <li><a href="">Our Services</a></li>
                    <li><a href="">Company</a></li>
                    <li><a href="">What We Do?</a></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer   