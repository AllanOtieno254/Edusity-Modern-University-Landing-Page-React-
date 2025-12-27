import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <p>© 2024 Edusity. All rights reserved.</p>

      <ul>
        <li>Terms of service</li>
        <li>Privacy Policy</li>
        <li>Contact Us</li>
      </ul>
      
    </div>
  )
}

export default Footer

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
