import React, {useState} from 'react';
import completeIcon from "../images/icon-complete.svg"


export default function CardForm() {

    // getting input value
    const [detail, setDetails] = useState({
      name: "",
      cardNumber: "",
      MM: "",
      YY: "",
      CVC: "",
    })

    function handleChange(e) {
      const {value, name} = e.target;
      setDetails(prev => {
        return {
          ...prev,
          [name]: value
        };
      });
    };
    // getting input value

    // Check for input detail errors
    let error = false;
    function handleClick() {
      if (detail.name === "") {
        document.getElementById("name").classList.add("errorInput")
        document.getElementById("errorName").style.display = "block"
        error = true;
      };
      let cardNumber = detail.cardNumber.replace(' ', '')
      if (cardNumber.length !== 16) {
        document.getElementById("cardNumber").classList.add("errorInput");
        document.getElementById("errorNumber").style.display = "block";
        error = true;
      };
      if (detail.MM === "" || detail.YY === "") {
        document.getElementById("MM").classList.add("errorInput");
        document.getElementById("YY").classList.add("errorInput");
        document.getElementById("errorDate").style.opacity = 100;
        error = true;
      };
      if (detail.CVC === "" && detail.CVC.length !== 3) {
        document.getElementById("CVC").classList.add("errorInput");
        document.getElementById("errorCVC").style.opacity = 100;
        error = true;
      };
      if (!error) {
        document.querySelector(".form-input").style.display ="none"
        document.querySelector(".form-thank-you").style.display ="flex"
      } 
    }
    // Check for input detail errors

    // HTML rendering
    return (
    <div className="cardForm">
    <div className="form-input">
      <form >
      <label htmlFor="name">CARDHOLDER NAME</label>
      <input onChange={handleChange} type="text" id="name" name="name" placeholder="e.g Jane Appleseed" />
      <p id="errorName" className="errorText">Can't be blank</p>
      <label htmlFor="cardNumber">CARD NUMBER</label>
      <input onChange={handleChange} type="number" id="cardNumber" name="cardNumber" placeholder="e.g 1234 5678 9123 0000" />
      <p id="errorNumber" className="errorText">Wrong format, 16 digit numbers only</p>
      <label htmlFor="date">EXP. DATE (MM/YY) CVC</label>
      <div className="date">
        <input onChange={handleChange} type="number" min="1" max="12" step="1" id="MM" name="MM" placeholder="MM" />
        <input onChange={handleChange} type="number" min="10" max="99" step="1" id="YY" name="YY" placeholder="YY" />
        <input onChange={handleChange} type="number" id="CVC" name="CVC" placeholder="CVC" />
      </div>
      <div className="errorDiv">
      <p id="errorDate" className="errorTextDate">Can't be blank</p>
      <p id="errorCVC" className="errorTextDate">Can't be blank</p>
      </div>
      <input onClick={handleClick} className="btn" type="button" value="Confirm" />
      </form>
    </div>
    <div className="form-thank-you">
      <img src={completeIcon} alt="correct sign"></img>
      <h1>THANK YOU!</h1>
      <p>We've added your card details</p>
    <button className="btn">Continue</button>
    </div>
  </div> 
    )
}