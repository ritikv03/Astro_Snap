const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;

const NASA_APOD_URL = 'https://api.nasa.gov/planetary/apod';
const NASA_API_KEY = 'lNCDRerRdbsK0NUrY7ggh4HQkP6pRamxZeaVCLYm';

app.use(cors())

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
