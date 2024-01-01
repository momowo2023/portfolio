/*JS NEEDS TO BE UPDATED WHEN OFFICIALLY LAUNCHED*/ 

import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();


    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form id="contactForm" className="contact__form" onSubmit={handleSubmit}>
      <div className="contact__control">
        <label htmlFor="name" className="visually-hidden">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="contact__control">
        <label htmlFor="email" className="visually-hidden">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="contact__control">
        <label htmlFor="message" className="visually-hidden">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="3"
          placeholder="Message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <div className="contact__control align-right">
        <button type="submit">Send Message</button>
      </div>
    </form>
  );
}

export default ContactForm;
