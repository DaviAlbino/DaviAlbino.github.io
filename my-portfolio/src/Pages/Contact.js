import React from 'react';
import ContactCard from '../Components/ContactCard';
import Footer from '../Components/Footer';
import Header from '../Components/Header';


function Contact() {
  return (
    <div className="Contact">
      <Header />
      <ContactCard />
      <Footer />
    </div>
  );
}

export default Contact;