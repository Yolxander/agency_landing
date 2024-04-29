// src/brevoApi.js
import axios from 'axios';

const brevoApi = axios.create({
    baseURL: 'https://api.sendinblue.com/v3/smtp', // Corrected to the proper base URL
    headers: {
        'content-type': 'application/json',
        'api-key': `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`, // Changed from 'Authorization' to 'api-key'
        'accept': 'application/json',
    }
});

export default brevoApi;
