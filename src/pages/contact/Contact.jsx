import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_165gyle', 'template_eq6t1kt', form.current, 'yxOjDlL4Sl8IE0m54')
    e.target.reset()
  };
  return (
    <section id='contact'>
      <div className='contact-header'>
        <h2>CONTACT ME</h2>
      </div>
      <div className='contact-container'>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='subject' placeholder='Subject' required></input>
          <input type='text' name='name' placeholder='Your Full Name' required></input>
          <input type='email' name='from_name' placeholder='Your Email' required></input>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn'>SUBMIT</button>
        </form>
      </div>
    </section>
  )
}
export default Contact 