const fs = require('fs');

// Chemin du fichier à lire
const filePath = 'welcome.txt';

// Lire le fichier de manière asynchrone
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Erreur lors de la lecture du fichier :', err);
    return;
  }

  // Afficher les données lues
  console.log('Contenu du fichier :', data);
});
