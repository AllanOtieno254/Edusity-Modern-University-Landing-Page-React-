# 🎓 Edusity – Modern University Landing Page (React)

Edusity is a modern, responsive university landing page built with **React**.  
It demonstrates smooth scrolling navigation, dynamic UI sections, and a fully functional contact form using third-party integrations.

![Uploading home.png…]()

<img width="1920" height="1080" alt="test and cont" src="https://github.com/user-attachments/assets/97e522ab-952a-4ba1-aae8-bdba4a436020" />

---

## React commands
1. npm create vite@latest
2. npm run dev for running application
3. npm run build for hosting
4. npm i react-scroll for installing scrolling dependencies

## 🚀 Live Features Overview

- Smooth scrolling navigation (single-page experience)
- Sticky navbar with mobile menu
- Animated testimonials slider
- Fully functional contact form (no backend required)
- Responsive design for all screen sizes

---

## 🔗 Important Integrations (Core to This Project)

This project relies on **two critical external services**:

1. **React Scroll** – for smooth navigation between sections: https://www.npmjs.com/package/react-scroll
   <li><Link to="programs" smooth={true} offset={-260} duration={500}>Program</Link></li>
   
3. **Web3Forms** – for handling contact form submissions securely : https://docs.web3forms.com/how-to-guides/js-frameworks/react-js/simple-react-contact-form   and https://app.web3forms.com/forms
   const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

These are explained in detail below.

---

## 🔹 1. React Scroll (Smooth Section Navigation)

### 📦 Package
- **NPM:** https://www.npmjs.com/package/react-scroll

### ✅ Why it is used
`react-scroll` enables **smooth scrolling navigation** between page sections **without page reloads**, making the site feel like a true single-page application.

---

### 🔧 Installation

```bash
npm install react-scroll
