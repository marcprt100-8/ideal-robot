// Importez le module http
const http = require('http');

// Créez un serveur HTTP qui écoute sur le port 3000
const server = http.createServer((req, res) => {
  // Définissez l'en-tête de la réponse avec le type de contenu
  res.setHeader('Content-Type', 'text/html');

  // Écrivez la réponse HTML
  res.write('<h1>Hello Node!!!!</h1>\n');

  // Terminez la réponse
  res.end();
});

// Écoutez le serveur sur le port 3000
server.listen(3000, () => {
  console.log('Serveur en cours d\'exécution sur http://localhost:3000/');
});
