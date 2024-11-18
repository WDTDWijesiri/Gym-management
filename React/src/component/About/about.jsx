import React from 'react';
import './AboutPage.css'; // Import the CSS file

function AboutPage() {
  return (
    <div className="about-container">
      <h1>About Our Gym</h1>
      <p>Welcome to our gym! We are dedicated to helping you achieve your fitness goals and lead a healthy lifestyle. Here's what sets us apart:</p>
      <ul>
        <li>State-of-the-art equipment: We offer a wide range of equipment to cater to all fitness levels and workout preferences.</li>
        <li>Expert trainers: Our certified trainers are here to guide and support you on your fitness journey, whether you're a beginner or a seasoned athlete.</li>
        <li>Group classes: Join one of our group fitness classes for a fun and motivating workout experience.</li>
        <li>Personalized programs: We understand that everyone's fitness journey is unique, which is why we offer personalized training programs tailored to your specific goals and needs.</li>
        <li>Clean and spacious facilities: Your health and safety are our top priorities. Our gym is kept clean and sanitized, and we provide ample space for you to work out comfortably.</li>
        <li>Community atmosphere: Join our supportive community of fitness enthusiasts who will inspire and encourage you every step of the way.</li>
      </ul>
      <p>Whether you're looking to lose weight, build muscle, improve your endurance, or simply lead a healthier lifestyle, we're here to help you reach your full potential. Come visit us today and take the first step towards a fitter, healthier you!</p>
    </div>
  );
}

export default AboutPage;
