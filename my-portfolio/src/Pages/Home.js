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
                <p className="enjoy">I am a brazilian Full-Stack developer</p>
                <p className="enjoy">based in Pindamonhangaba-SP.</p>
            </div>
        </div>
        <div className="my-photo-background">
            <img src={require('../images/sentadoCodando-removebg.png')} alt="Me Coding" />            
        </div>
      </main>
    </div>
  );
}

export default Home;