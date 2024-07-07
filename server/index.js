const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;

//Nasa API
const NASA_APOD_URL = 'https://api.nasa.gov/planetary/apod';
const NASA_API_KEY = 'lNCDRerRdbsK0NUrY7ggh4HQkP6pRamxZeaVCLYm';

//Twilio API
const accountSid = 'AC0e79929f2f32fc6e3ceda2d7f85371c1';
const authToken = '745d64d9fa8b1d3d112027938c751a23';
const client = require('twilio')(accountSid, authToken);

app.use(cors())
app.use(cookieParser());

app.get('/fetch', async (req, res) => {
    try {
        const response = await axios.get(NASA_APOD_URL, {
            params: {
                api_key: NASA_API_KEY
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

app.get('/sendMessage' , async (req,res) => {
    try {

    } catch (error){
        console.error(error);
        res.status(501).sendStatus('Server Error');
    }
})

app.get('/sendMail' , async (req,res) => {
    try {

    } catch (error){
        console.error(error);
        res.status(501).sendStatus('Server Error');
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
