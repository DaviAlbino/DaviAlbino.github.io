import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
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
                <p className="enjoy">I am a brazilian Full-Stack developer</p>
                <p className="enjoy">based in São Paulo.</p>
            </div>
        </div>
        <div className="my-photo-background">
            <img src={require('../images/sentadoCodando-removebg.png')} alt="Me Coding" />            
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;