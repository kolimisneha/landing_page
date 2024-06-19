import React, { useState } from 'react';


const testimonials = [
  { quote: "This Service is amazing!", user: "sneha" },
  { quote: "I love it!", user: "sravya" },
  { quote: "Highly recommend it.", user: "priya" },
  { quote: "very nice!", user: "chandra sekhar" },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((index + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="testimonials">
      <h2>What Our Users Say</h2>
      <blockquote>"{testimonials[index].quote}" - {testimonials[index].user}</blockquote>
      <button className= ' btns' onClick={prevTestimonial}>Previous</button>
      <button  className= ' btns' onClick={nextTestimonial}>Next</button>
    </section>
  );
};

export default Testimonials;
