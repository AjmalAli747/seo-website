import React, { useState } from "react";
import "../Css/Header.css";
import SeoImg from "../Images/seo-image.png";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [scrollButton, setScrollButton] = useState(false);
  const [buyNow, setBuyNow] = useState(false);
  // Form 
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [popFormBox, setPopFormBox] = useState(false);

  window.addEventListener("scroll", () => {
    if(window.pageYOffset < 80){
      setScroll(false);
    }else{
      setScroll(true);
    }

    if(window.pageYOffset < 150){
      setScrollButton(false);
    }else{
      setScrollButton(true);
    }
  })
  

  const handleClick = () => {
    setClick(!click)
  }

  // Form Section 
  const submitForm = (e) => {
    e.preventDefault();

    if (name === "") {
      toast("Enter Your Name");
    } else if (number === "") {
      toast("Enter Your Number");
    } else if (email === "") {
      toast("Enter Your Email");
    } else if (message === "") {
      toast("Enter Your Message");
    } else {
      toast("Congratulations Your Form Submited");
      console.log(name, email, number, message);
    }
  };

  const formPopOpen = () => {
    setPopFormBox(!popFormBox)
  }


  return (
    <>
      <header className={scroll ? "headerDiv scrollNav" : "headerDiv" }>
        <div className="logo">
          <Link to="/"><img src={SeoImg} alt="seo logo" /></Link>
        </div>
        <nav className="nav-menu">
          <ul className={click ? "menu-bar active" : "menu-bar"}>
            <li>
              <Link to="/" onClick={handleClick}>Home</Link>
            </li>
            <li>
              <Link to="/service" onClick={handleClick}>Service</Link>
            </li>
            <li>
              <Link to="/page" onClick={handleClick}>Page</Link>
            </li>
            <li>
              <Link to="/portfolio" onClick={handleClick}>Portfolio</Link>
            </li>
            <li>
              <Link to="/blog" onClick={handleClick}>Blog</Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleClick}>Contact</Link>
            </li>
            <li>
              <button className='button_style' onClick={formPopOpen}>BUY NOW</button>
            </li>
          </ul>
        </nav>
        <div className="bars">
          <div className="bars_line" onClick={handleClick}>
            <div className="barsLine"></div>
            <div className="barsLine widthBottom"></div>
            <div className="barsLine widthTop"></div>
          </div>
        </div>
      </header>

      <a href="#" className="scrollButton"><i className={scrollButton ? "fa-solid fa-angle-up activeScroll" : "fa-solid fa-angle-up"}></i></a>

      {/* Form Pop Section  */}
      <div className={popFormBox ? "formPopBg popShowActive" : "formPopBg"}>
        <form action="" onSubmit={submitForm} className={popFormBox ? "formPop formPopActive" : "formPop"}>
        <i className="fa-solid fa-xmark timeCloseIcon" onClick={formPopOpen}></i>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            name=""
            id=""
            placeholder="Enter Your Number"
            onChange={(e) => setNumber(e.target.value)}
          />
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter Your Eamil"
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Enter Your Message"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <input type="submit" value="Submit" />
        </form>
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </>
  );
};

export default Navbar;
