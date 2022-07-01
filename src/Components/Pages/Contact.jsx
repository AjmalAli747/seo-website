import React from "react";
import "../Css/Home.css"
import HeroHader from "../SubFile/HeroHader";
import Form from "../SubFile/Form";
import Footer from "../SubFile/Footer";

const Contact = () => {
  return (
    <>
      <HeroHader text="Contact"/>
      <div className="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27997.929657976933!2d77.04727383797358!3d28.697387087892945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d042902039731%3A0x119641454d4c2fd9!2sKirari%20Suleman%20Nagar%20Village%2C%20Sultanpuri%2C%20Delhi%2C%20110086!5e0!3m2!1sen!2sin!4v1656665216832!5m2!1sen!2sin" style={{border: "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <Form />
      <Footer />
    </>
  )
}

export default Contact