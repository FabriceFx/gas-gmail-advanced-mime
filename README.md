# 🇫🇷 Version Française

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/FabriceFx/gas-gmail-advanced-mime)
[![Licence](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/FabriceFx/gas-gmail-advanced-mime/blob/main/LICENSE)
[![Stack](https://img.shields.io/badge/stack-Google%20Apps%20Script-orange.svg)](https://developers.google.com/apps-script)

# GAS Gmail Advanced MIME

Une solution technique avancée pour Google Apps Script (GAS) permettant de s'affranchir des limitations des services standards (MailApp/GmailApp) en exploitant directement l'API Gmail pour l'envoi de messages au format MIME complexe.

### 🚀 Fonctionnalités clés

- **Format MIME Avancé** : Permet de construire et d'envoyer des e-mails avec une structure MIME totalement personnalisée.
- **Contournement des limites** : Outrepasser les restrictions de mise en forme des méthodes natives de Google Apps Script.
- **Gestion des Pièces Jointes** : Support optimisé pour l'inclusion de fichiers joints multiples.
- **Images Inline** : Intégration facilitée d'images directement dans le corps HTML du message.

### 📋 Prérequis & Installation

Pour utiliser ce script, vous devez impérativement activer l'API Gmail dans votre projet Google Apps Script.

1. **Activer l'API** : Dans l'éditeur GAS, allez dans "Services" (+), cherchez "Gmail API" et ajoutez-la.
2. **Configuration** : Assurez-vous que votre fichier `appsscript.json` inclut les portées (scopes) nécessaires à l'envoi d'e-mails.

```bash
# Clonez le dépôt
git clone https://github.com/FabriceFx/gas-gmail-advanced-mime.git
```

### 💻 Exemples d'utilisation

Le fichier principal `mail.gs` contient la logique nécessaire pour transformer un objet de données en un message brut (raw) compatible avec l'API Gmail.

```javascript
/**
 * Exemple simplifié d'utilisation
 */
function exampleSend() {
  const messageData = {
    to: "destinataire@example.com",
    subject: "Sujet Complexe",
    body: "<h1>Bonjour</h1><p>Message généré via MIME avancé.</p>"
  };

  // Appel de la fonction de construction et d'envoi
  // (Voir mail.gs pour l'implémentation complète)
  sendAdvancedMime(messageData);
}
```

### 🛠 Technologies utilisées

- **Google Apps Script** : Environnement d'exécution cloud.
- **Gmail API** : Pour l'envoi de messages bruts encodés en base64.
- **JavaScript (ES6+)** : Langage de programmation du projet.

### 🤝 Contribution & Licence

Les contributions sont les bienvenues pour améliorer la gestion des en-têtes ou des types de médias. Ce projet est distribué sous licence MIT.

### 👤 Auteur

- **Fabrice FAUCHEUX** — [Profil GitHub](https://github.com/FabriceFx)

---

# 🇬🇧 English Version

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/FabriceFx/gas-gmail-advanced-mime)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/FabriceFx/gas-gmail-advanced-mime/blob/main/LICENSE)
[![Stack](https://img.shields.io/badge/stack-Google%20Apps%20Script-orange.svg)](https://developers.google.com/apps-script)

# GAS Gmail Advanced MIME

An advanced technical solution for Google Apps Script (GAS) that bypasses the limitations of standard services (MailApp/GmailApp) by directly leveraging the Gmail API to send complex MIME-formatted messages.

### 🚀 Key Features

- **Advanced MIME Format**: Allows constructing and sending emails with a fully customized MIME structure.
- **Limit Bypass**: Overcomes formatting restrictions found in native Google Apps Script methods.
- **Attachment Management**: Optimized support for including multiple file attachments.
- **Inline Images**: Easier integration of images directly within the HTML message body.

### 📋 Prerequisites & Installation

To use this script, you must enable the Gmail API in your Google Apps Script project.

1. **Enable the API**: In the GAS editor, go to "Services" (+), search for "Gmail API," and add it.
2. **Configuration**: Ensure your `appsscript.json` file includes the necessary scopes for sending emails.

```bash
# Clone the repository
git clone https://github.com/FabriceFx/gas-gmail-advanced-mime.git
```

### 💻 Usage Examples

The main file `mail.gs` contains the logic required to transform a data object into a raw message compatible with the Gmail API.

```javascript
/**
 * Simplified usage example
 */
function exampleSend() {
  const messageData = {
    to: "recipient@example.com",
    subject: "Complex Subject",
    body: "<h1>Hello</h1><p>Message generated via advanced MIME.</p>"
  };

  // Call the construction and sending function
  // (See mail.gs for full implementation)
  sendAdvancedMime(messageData);
}
```

### 🛠 Technologies Used

- **Google Apps Script**: Cloud execution environment.
- **Gmail API**: For sending base64-encoded raw messages.
- **JavaScript (ES6+)**: Project programming language.

### 🤝 Contribution & License

Contributions are welcome to improve header management or media type support. This project is distributed under the MIT License.

### 👤 Author

- **Fabrice FAUCHEUX** — [GitHub Profile](https://github.com/FabriceFx)
