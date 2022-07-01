import React, { useState } from "react";
import "../Css/Home.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    if (name === "") {
      toast("Enter Your Name");
    }else if(number === ""){
      toast("Enter Your Number");
    }else if(email === ""){
      toast("Enter Your Email");
    }else if(companyName === ""){
      toast("Enter Your Company");
    }else if(address === ""){
      toast("Enter Your Address");
    }else if(website === ""){
      toast("Enter Your Website");
    }else if(message === ""){
      toast("Enter Your Message");
    }else{
      toast("Congratulations Your Form Submited");
      console.log(name,email,number,companyName,address,website,message);
    }
  };

  return (
    <>
      <div className="form_container">
        <div className="form_row">
          <div className="form_col">
            <h1>Contact Us</h1>
            <h2>Get Free SEO Analysis?</h2>
            <p>
              The worlds class, flexible support via live chat, email and phone.
              I guarantee that you’ll be able to have any issue resolved within
              24/7 hours.
            </p>
            <div className="form_contact">
              <div className="form_contact_col">
                <i className="fa-solid fa-phone"></i>
                <div className="contact_number">
                  <span>
                    <a href="tel:91 12345678910">+ 91 12345678910</a>
                  </span>
                  <span>
                    <a href="mailto: exmale@gmail.com">exmale@gmail.com</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="form_contact">
              <div className="form_contact_col">
                <i className="fa-solid fa-address-card"></i>
                <div className="contact_number">
                  <span>B - 115 New Delhi 110001</span>
                </div>
              </div>
            </div>
          </div>

          <div className="form_col">
            <form action="" onSubmit={submitForm} className="formSetion">
              <div className="input_box">
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
              </div>
              <div className="input_box">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter Your Eamil"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Your Company Name"
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>
              <div className="input_box">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Your Addresss"
                  onChange={(e) => setAddress(e.target.value)}
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Your Website Name"
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>
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
          </div>
        </div>
      </div>
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
    </>
  );
};

export default Form;
