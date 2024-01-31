import { Button } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'



export default function EmailForm() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Heng Yang',
      message: message,
    }

    try {
      const response = await axios.post('/sendEmail', templateParams);
      console.log(response.data);
    } catch (error) {
      console.error('Error sending email:', error);
    }

    //Reset useStates
    setName('');
    setEmail('');
    setMessage('');
  }


  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Your Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='email'
        placeholder='Your Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='text'
        placeholder='Message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      {/* <textarea /> */}
      <Button type='submit'>Send Email</Button>
    </form>
  )
}
