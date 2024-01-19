const generatePassword = require('generate-password');

// Fonction pour générer un mot de passe aléatoire
function genererMotDePasse() {
  // Configuration du mot de passe
  const config = {
    length: 12, // Longueur du mot de passe
    numbers: true, // Inclure des chiffres
    symbols: true, // Inclure des symboles
    uppercase: true, // Inclure des majuscules
    excludeSimilarCharacters: true, // Exclure les caractères similaires (ex: 'i' et 'l')
  };

  // Générer le mot de passe
  const motDePasse = generatePassword.generate(config);

  // Afficher le mot de passe
  console.log('Mot de passe généré :', motDePasse);
}

// Appeler la fonction pour générer un mot de passe
genererMotDePasse();
