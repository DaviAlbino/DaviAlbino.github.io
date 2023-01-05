import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';


function About() {
  return (
    <div className="About">
      <Header />
      <div className="about-container">
        <img src={require('../images/DaviOffice.jpeg')} alt="My Office" className='my-office' /> 
        <div className="hello-presentation">
            <div className="presentation">
                <text className="welcome">
                  <p className="part-one">After living experiences in the manufacturing industry, I've decided to accept the great challenge of changing my career path and joining the Web Development area.<br /></p>
                  <p className="part-one">Once I got in touch with this area, I fell in love with coding, which is constantly stimulating my creativity and logical thinking, skills that I've always liked to work on and to improve.<br /></p>
                  <p className="part-one">And it is in the programming area where I seek to collaborate with a company that has clear and defined values, where I can contribute to its growth, and thus also contribute to mine.<br /></p>
                  <p className="part-one">I am currently studying for Full-stack Web Development at Trybe. <br /></p>
                  <p className="part-one">The technologies I am currently learning and developing are JavaScript, React, CSS3, HTML5, Git, and Docker. <br /></p>
                </text>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;