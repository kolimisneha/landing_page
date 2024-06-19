import React from 'react';

const About = () => {
  return (
    <div>
      <section id='about'>
        <header>
          <h1>About Our Luxury Watch</h1>
        </header>
        <main className="about-main">
        <div className="info-list">
        <ul>
          <li><strong>Details:</strong></li>
          <li>Warranty: 5-year international warranty</li>
          <li>Packaging: Luxury box</li>
          <li>Country of Origin: India</li>
          <li>Limited Edition: No</li>
          <li>Price:8,500</li>
        </ul>
      </div>
          <div className="about-images">
            <img height="250" src="https://tse1.mm.bing.net/th?id=OIP.Ah_TUnUYmz_CK_q2rvhzRAEsC1&pid=Api&P=0&h=180" alt="Image 1" />
            <img height='250' src="https://wp-aws-media.s3-accelerate.amazonaws.com/2016/08/Apple-Watch.jpg" alt="Image 2" />
          </div>
        </main>
      </section>
    </div>
  );
}

export default About;
