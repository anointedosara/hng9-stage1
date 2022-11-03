import React, { useEffect, useState } from 'react'

function Contact() {
  const [data, setData] = useState({
    fName: '',
    lName: '',
    email: '',
    message: '',
    agree: false
})

const handleSubmit = (e) => {
  e.preventDefault();
}

useEffect(() => {
  window.scroll(0, 0)
}, [])
  return (
    <div className='contact'>
      <h1>Contact Me</h1>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
      <form className='contact-form' onSubmit={handleSubmit}>
        <div className='contact-names'>
          <label htmlFor="fname">First name<br />
            <input type="text" id="first_name" name="fname" value={data?.fName} onChange={(e) => setData({
                        ...data,
                        fName: e.target.value
                    })} placeholder='Enter your first name' required />
          </label>
          <label htmlFor="lname" className='lname'>Last name<br />
            <input type="text" id="last_name" name="lname" value={data?.lName} onChange={(e) => setData({
                        ...data,
                        lName: e.target.value
                    })} placeholder='Enter your last name' required />
          </label>
        </div>

        <label htmlFor="email">Email<br />
          <input type="email" id="email" name="email" value={data?.email} onChange={(e) => setData({
                        ...data,
                        email: e.target.value
                    })} placeholder='yourname@email.com' required /><br />
        </label>
        <label htmlFor="message">Message<br />
          <textarea name="message" id="message" value={data?.message} onChange={(e) => setData({
                        ...data,
                        message: e.target.value
                    })} placeholder="Send me a message and I'll reply you as soon as possible..." required></textarea>
        </label>
        <label htmlFor="checkbox" className='container'>
          <input type="checkbox" id="checkbox" checked={data?.agree} onChange={(e) => setData({
                        ...data,
                        agree: !data?.agree
                    })} required />You agree to providing your data to OsaraAnointed who may contact you.
          <span className="checkmark"></span>
        </label><br />
        <button id='btn__submit'>Send message</button>
      </form>
    </div>
  )
}

export default Contact
