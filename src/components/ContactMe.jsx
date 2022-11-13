import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';

import '../styles/contact-me.css';

const ContactMe = () => {
  const { ref, inView } = useInView();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_mvm6oyr',
        'template_s9tcrqh',
        form.current,
        'fyiy506kMOozlSSNj'
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="blank-scpace" ref={ref}>
      <section className={`contact-me ${inView && 'show'}`}>
        {/* <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form> */}
        <div className="contact-container">
          <div className="contact-info">
            <div>
              <h2>Contac Info</h2>
              <ul className="info">
                <li>
                  <span>
                    <img src="/assets/icons/location.png" />
                  </span>
                  <span>Ecuador</span>
                </li>
                <li>
                  <span>
                    <img src="/assets/icons/mail.png" />
                  </span>
                  <span>oscar.solorzan98@gmail.com</span>
                </li>
                <li>
                  <span>
                    <img src="/assets/icons/call.png" />
                  </span>
                  <span>+593 98 225 9813</span>
                </li>
              </ul>
            </div>
            <ul className="sci">
              <li>
                <a href="#">
                  <img src="/assets/icons/1.png" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/assets/icons/3.png" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/assets/icons/4.png" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/assets/icons/5.png" />
                </a>
              </li>
            </ul>
          </div>
          <div className="contact-form">
            <h2>Send a Message</h2>
            <div className="form-box">
              <div className="input-box w50">
                <input type={'text'} required />
                <span>First Name</span>
              </div>
              <div className="input-box w50">
                <input type={'text'} required />
                <span>Last Name</span>
              </div>
              <div className="input-box w50">
                <input type={'email'} required />
                <span>Email</span>
              </div>
              <div className="input-box w50">
                <input type={'text'} required />
                <span>Phone</span>
              </div>
              <div className="input-box w100">
                <textarea required></textarea>
                <span>Write your message here...</span>
              </div>
              <div className="input-box w100">
                <input type="submit" value="send" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactMe;
