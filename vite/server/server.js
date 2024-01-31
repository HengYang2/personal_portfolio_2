// index.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const emailjs = require('emailjs'); // Install EmailJS library

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

app.post('/sendEmail', (req, res) => {
    // Extract data from the request
    const templateParams= req.body;

    //EmailJS service ID, template ID, and Public Key
    const serviceId = process.env.SERVICE_ID;
    const templateId = process.env.TEMPLATE_ID;
    const publicKey = process.env.PUBLIC_KEY;

    // Use EmailJS or other email service here
    //Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
            console.log('Email sent successfully!', response);
        })
        .catch((error) => {
            console.log('Error in sending email:', error)
        })


    res.send('Email sent successfully');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
