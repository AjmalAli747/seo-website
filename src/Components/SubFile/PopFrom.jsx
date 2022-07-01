import React, { useState } from "react";
import "../Css/Home.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PopFrom = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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

  return (
    <>
      <div className="formPopBg">
        <form action="" onSubmit={submitForm} className="formPop">
        <i className="fa-solid fa-xmark timeCloseIcon"></i>
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

export default PopFrom;
