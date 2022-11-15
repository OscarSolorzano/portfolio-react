import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        () => {
          toast.success(
            `Thanks for your message, ${"I'll be in touch soon."}`,
            {
              position: 'top-center',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'dark',
            }
          );
          e.target.reset();
        },
        (error) => {
          toast.error('Something went wrong please try again', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
          console.log(error.text);
        }
      );
  };

  return (
    <div className="blank-scpace" ref={ref} id='contact-me'>
      <section className={`contact-me ${inView && 'show'}`}>
        <div className="contact-container">
          <div className="contact-info">
            <div>
              <h2>Contac Info</h2>
              <ul className="info">
                <li>
                  <span>
                    <img src="/assets/icons/location.png" />
                  </span>
                  <span>
                  <a href="https://www.google.com/maps/place/Ecuador/@-1.3603287,-83.8954733,6z/data=!3m1!4b1!4m5!3m4!1s0x902387dda89a4bd5:0x9d76af04119c3702!8m2!3d-1.831239!4d-78.183406">Ecuador</a>
                  </span>
                </li>
                <li>
                  <span>
                    <img src="/assets/icons/mail.png" />
                  </span>
                  <span>
                  <a href="mailto:oscar.solorzan98@gmail.com">oscar.solorzan98@gmail.com</a>
                  </span>
                </li>
                <li>
                  <span>
                    <img src="/assets/icons/call.png" />
                  </span>
                  <span>
                    <a href="tel:+593982259813">+593 98 225 9813</a>
                  </span>
                </li>
                <li>
                  <span>
                    <img src="/assets/icons/resume.png" />
                  </span>
                  <span>
                    <a href='/files/OscarSolorzanoResumeEn.pdf' download>Dowload Resume</a>
                  </span>
                </li>
              </ul>
            </div>
            <ul className="sci">
              <li>
                <a href='https://github.com/OscarSolorzano' target="_blank">
                  <img src="/assets/icons/4.png" />
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/oscar-solorzano/' target="_blank">
                  <img src="/assets/icons/5.png" />
                </a>
              </li>
            </ul>
          </div>
          <div className="contact-form">
            <h2>Send a Message</h2>
            <form className="form-box" onSubmit={sendEmail} ref={form}>
              <div className="input-box w50">
                <input type={'text'} required name="from_name" />
                <span>Name</span>
              </div>
              <div className="input-box w50">
                <input type={'text'} required name="from_last_name" />
                <span>Last Name</span>
              </div>
              <div className="input-box w50">
                <input type={'email'} required name="user_email" />
                <span>Email</span>
              </div>
              <div className="input-box w50">
                <input type={'text'} required name="user_phone" />
                <span>Phone</span>
              </div>
              <div className="input-box w100">
                <textarea required name="message"></textarea>
                <span>Write your message here...</span>
              </div>
              <div className="input-box w100">
                <input type="submit" value="send" />
              </div>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default ContactMe;
