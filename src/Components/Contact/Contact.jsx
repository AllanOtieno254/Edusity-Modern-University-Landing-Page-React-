import React, { useState } from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import.meta.env.VITE_WEB3FORMS_ACCESS_KEY


const Contact = () => {
  const [result, setResult] = useState("")

  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   setResult("Sending....");
  //   const formData = new FormData(event.target);

  //   formData.append("access_key", "fed806c4-1c51-4259-8d0b-eceeb1a51bae");

  //   const response = await fetch("https://api.web3forms.com/submit", {
  //     method: "POST",
  //     body: formData
  //   });

  //   const data = await response.json();

  //   if (data.success) {
  //     setResult("Form Submitted Successfully");
  //     event.target.reset();
  //   } else {
  //     console.log("Error", data);
  //     setResult(data.message);
  //   }
  // };


  const onSubmit = async (event) => {
    event.preventDefault()
    setResult("Sending...")

    // ✅ SAFETY CHECK (prevents white screen)
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

    if (!accessKey) {
      console.error("Web3Forms access key is missing")
      setResult("Configuration error. Please try again later.")
      return
    }

    const formData = new FormData(event.target)
    formData.append("access_key", accessKey)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setResult("Form Submitted Successfully ✅")
        event.target.reset()
      } else {
        console.error("Web3Forms Error:", data)
        setResult(data.message || "Submission failed")
      }
    } catch (error) {
      console.error("Network Error:", error)
      setResult("Network error. Please try again.")
    }
  }

  return (
    <div className="contact" id="contact">
      <div className="contact-col">
        <h3>
          Send Us a Message <img src={msg_icon} alt="message icon" />
        </h3>
        <p>
          We would love to hear from you.
          Please fill out the form and we will get in touch with you shortly.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="mail icon" />
            allanotieno2001@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="phone icon" />
            +254 740782619
          </li>
          <li>
            <img src={location_icon} alt="location icon" />
            Edusity 254 California <br /> MA 01234, USA
          </li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" required />

          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter your phone number" required />

          <label>Write Your Message</label>
          <textarea name="message" placeholder="Enter your message" rows="6" required />

          <button type="submit" className="btn dark-btn">
            Send Message <img src={white_arrow} alt="arrow icon" />
          </button>
        </form>

        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
