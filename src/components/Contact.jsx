import React from 'react'

function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
      <form>
        <div>
          <div>
            <label for="fname">First name</label><br />
            <input type="text" id="fname" name="fname" value="" placeholder='Enter your first name' />
          </div>
          <div>
            <label for="lname">Last name</label><br />
            <input type="text" id="lname" name="lname" value="" placeholder='Enter your last name' />
          </div>
        </div>

        <label for="email">Email</label><br />
        <input type="email" id="email" name="email" value="" placeholder='yourname@email.com' /><br />
        <label for="message">Message</label><br />
        <textarea name="message" id="message" value="" placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
        <input type="checkbox" id="checkbox" /><label for="checkbox">You agree to providing your data to Anointed Osara who may contact you.</label>
        <button id='btn__submit'>Send message</button>
      </form>
    </div>
  )
}

export default Contact
