import React from 'react'
import { useState } from 'react'
import { sendContactMessage } from '../../api/contactReq'

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const sendMessage = async () => {
    if(name === '') window.alert("Please enter your name in the contact form");
    else if(email === '') window.alert("Please enter your email in the contact form");
    else if(message === '') window.alert("Please type your message before sending");
    else
    {
      setIsSending(true);
      const data = await sendContactMessage({ name, email, message });
      if(data.error) 
      {
        window.alert(data.error);
      }
      else 
      {
        window.alert("Thank you for your message. We will get back to you soon !");
      }
      setName('');
      setEmail('');
      setMessage('');
      setIsSending(false);
    }
  }

  return (
    <div id='contact'>
  <section className="text-gray-600 body-font relative ">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
        {
          isSending ?
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Sending your message now ... </p>
          :
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
        }
      </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        {
          !isSending &&
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                <input type="text" id="name" name="name" 
                  value={name}
                  onChange={(e) => { setName(e.target.value) }}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" name="email" 
                  value={email}
                  onChange={(e) => { setEmail(e.target.value) }}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                <textarea id="message" name="message" 
                  value={message}
                  onChange={(e) => { setMessage(e.target.value) }}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button 
                className="flex mx-auto text-white bg-orange-600 py-2 px-8 hover:bg-orange-500 rounded-xl text-lg"
                onClick={sendMessage}
              >
                Send
              </button>
            </div>
          </div>
        }
      </div>
    </div>
  </section>
    </div>
  )
}

export default Contact