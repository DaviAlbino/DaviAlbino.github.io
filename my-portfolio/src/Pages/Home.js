import React from 'react';
import Header from '../Components/Header';
import '../images/WhatsApp Image 2022-11-24 at 19.02.35.jpeg';

function Home() {
  return (
    <div className="App">
      <Header />
      <main className="container">
        <div className="hello-presentation">
            <div className="hello">
                <p>Hey, I'm Davi Albino!</p>
            </div>
            <div className="presentation">
                <p className="welcome">Welcome to my portfolio!</p>
                <p className="enjoy">I enjoy coding front-end </p>
                <p className="enjoy">and back-end services.</p>
            </div>
        </div>
        <div className="my-photo-background">
            <img src={require('../images/WhatsApp Image 2022-11-24 at 19.02.35.jpeg')} alt="My Photo" />            
        </div>
      </main>
    </div>
  );
}

export default Home;