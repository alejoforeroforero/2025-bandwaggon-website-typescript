
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { getGmailService } = require('./config/gmail');
const authRoutes = require('./routes/auth');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/', authRoutes);

// Email encoding helper
function encodeMessage(message) {
    return Buffer.from(message).toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}

// Email creation helper
async function createMail(options) {
    const mailComposer = require('nodemailer/lib/mail-composer');
    const mail = new mailComposer(options);
    const message = await mail.compile().build();
    return encodeMessage(message);
}

// Input validation middleware
const validateEmailInput = (req, res, next) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        return res.status(400).json({ error: 'Email inválido' });
    }
    next();
};

// Email sending endpoint
app.post('/send-email', validateEmailInput, async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const gmail = await getGmailService();
        
        // Primer correo - al destinatario original
        const originalEmailOptions = {
            to: process.env.TARGET_EMAIL,
            subject: `Nuevo mensaje de contacto de ${name}`,
            text: message,
            html: `
                <h3>Nuevo mensaje de contacto</h3>
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mensaje:</strong></p>
                <p>${message}</p>
            `,
            textEncoding: 'base64'
        };

        // Segundo correo - confirmación automática al remitente
        const autoReplyOptions = {
            to: email,
            subject: 'Hemos recibido tu mensaje - Bandwaggon',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2>¡Gracias por contactarnos, ${name}!</h2>
                    <p>Hemos recibido tu mensaje correctamente. Este es un correo automático para confirmar que:</p>
                    <ul>
                        <li>Tu mensaje ha sido recibido</li>
                        <li>Nuestro equipo lo revisará pronto</li>
                        <li>Te responderemos lo antes posible</li>
                    </ul>
                    <p>Para tu referencia, este fue tu mensaje:</p>
                    <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
                        <em>${message}</em>
                    </div>
                    <p>Saludos cordiales,<br>El equipo de Bandwaggon</p>
                </div>
            `,
            textEncoding: 'base64'
        };

        // Enviar ambos correos
        const originalMessage = await createMail(originalEmailOptions);
        const autoReplyMessage = await createMail(autoReplyOptions);
        
        await Promise.all([
            gmail.users.messages.send({
                userId: 'me',
                requestBody: { raw: originalMessage }
            }),
            gmail.users.messages.send({
                userId: 'me',
                requestBody: { raw: autoReplyMessage }
            })
        ]);

        res.status(200).json({ message: 'Emails enviados exitosamente' });
    } catch (error) {
        console.error('Error al enviar email:', error);
        res.status(500).json({ 
            error: 'Error al enviar el email',
            details: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        error: 'Error interno del servidor',
        details: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});