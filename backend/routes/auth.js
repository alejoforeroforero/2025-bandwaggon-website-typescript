const express = require('express');
const { oauth2Client } = require('../config/gmail');

const router = express.Router();

router.get('/auth/gmail', (req, res) => {
    const url = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: ['https://www.googleapis.com/auth/gmail.send'],
        prompt: 'consent'  // Esto fuerza un nuevo prompt de consentimiento
    });
    res.redirect(url);
});

router.get('/oauth2callback', async (req, res) => {
    const { code } = req.query;
    
    if (!code) {
        return res.status(400).send('Código de autorización no recibido');
    }

    try {
        console.log('Código recibido:', code); // Debug del código
        const { tokens } = await oauth2Client.getToken(code);
        
        // Debug detallado de los tokens
        console.log('==== TOKENS RECIBIDOS ====');
        console.log(JSON.stringify(tokens, null, 2));
        console.log('========================');
        
        if (tokens.refresh_token) {
            console.log('¡REFRESH TOKEN ENCONTRADO!:', tokens.refresh_token);
        } else {
            console.log('⚠️ No se recibió refresh_token. Intenta revocar el acceso y volver a autorizar.');
        }

        res.send(`
            <html>
                <body>
                    <h2>Autorización exitosa!</h2>
                    <pre style="background: #f0f0f0; padding: 10px;">
                    ${JSON.stringify(tokens, null, 2)}
                    </pre>
                    <p>Revisa la consola del servidor para ver el refresh token.</p>
                    <script>
                        console.log('Tokens:', ${JSON.stringify(tokens)});
                    </script>
                </body>
            </html>
        `);
    } catch (error) {
        console.error('Error detallado:', error);
        res.status(500).send(`Error en la autorización: ${error.message}`);
    }
});

module.exports = router;