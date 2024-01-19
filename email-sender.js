const nodemailer = require('nodemailer');

// Configurer le transporteur SMTP (remplacez les détails par vos propres informations)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'eugenieobanga@gmail.com', // Remplacez par votre adresse e-mail Gmail
    pass: 'Eugenie.65.queen..', // Remplacez par votre mot de passe Gmail
  },
});

// Définir les options du courriel
const mailOptions = {
  from: 'eugenieobanga@gmail.com', // Remplacez par votre adresse e-mail Gmail
  to: 'ishamfall1@gmail.com', // Remplacez par l'adresse e-mail du destinataire
  subject: 'Test d\'envoi d\'e-mail avec Nodemailer',
  text: 'Ceci est un e-mail de test envoyé avec Nodemailer.',
};

// Envoyer l'e-mail
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
  } else {
    console.log('E-mail envoyé avec succès !');
    console.log('ID du message :', info.messageId);
  }
});
