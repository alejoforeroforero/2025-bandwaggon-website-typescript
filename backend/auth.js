const express = require('express');
const { oauth2Client } = require('./config/gmail');

const router = express.Router();

router.get('/auth/gmail', (req, res) => {
    const url = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: ['https://www.googleapis.com/auth/gmail.send']
    });
    res.redirect(url);
});

router.get('/oauth2callback', async (req, res) => {
    const { code } = req.query;
    try {
        const { tokens } = await oauth2Client.getToken(code);
        console.log('Refresh Token:', tokens.refresh_token);
        res.send('Autorización exitosa! Puedes cerrar esta ventana.');
    } catch (error) {
        console.error('Error al obtener tokens:', error);
        res.status(500).send('Error en la autorización');
    }
});

module.exports = router;