// // index.js
// require('dotenv').config();
// import { Button } from '@mui/material'
// import React, { useState } from 'react'
// import axios from 'axios'



// export default function EmailForm() {

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     //EmailJS service ID, template ID, and Public Key
//     const serviceId = process.env.SERVICE_ID;
//     const templateId =  process.env.TEMPLATE_ID;
//     const publicKey =  process.env.PUBLIC_KEY;

//     //Create a new object with EmailJS service ID, template ID, Public Key, and Template Params  
//     const data = {
//       service_id: serviceId,
//       template_id: templateId,
//       user_id: publicKey,
//       template_params: {
//         from_name: name,
//         from_email: email,
//         to_name: 'Heng Yang',
//         message: message,
//       }
//     }

//     //Send the email using EmailJS
//     try {
//       const res = await axios.post(process.env.ENDPOINT_URL, data);
//       console.log(res.data);
//       setName('');
//       setEmail('');
//       setMessage('');
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type='text'
//         placeholder='Your Name'
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type='email'
//         placeholder='Your Email'
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type='text'
//         placeholder='Message'
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       />
//       {/* <textarea /> */}
//       <Button type='submit'>Send Email</Button>
//     </form>
//   )
// }
