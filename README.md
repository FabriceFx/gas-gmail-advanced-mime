# 🇫🇷 Version Française[cite: 1]

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/FabriceFx/gas-gmail-advanced-mime)[cite: 1]
[![Licence](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/FabriceFx/gas-gmail-advanced-mime/blob/main/LICENSE)[cite: 1, 2]
[![Stack](https://img.shields.io/badge/stack-Google%20Apps%20Script-orange.svg)](https://developers.google.com/apps-script)[cite: 1, 2]

# GAS Gmail Advanced MIME[cite: 1]

Une solution technique avancée pour Google Apps Script (GAS) permettant de s'affranchir des limitations des services standards (MailApp/GmailApp) en exploitant directement l'API Gmail pour l'envoi de messages au format MIME complexe[cite: 1].

### 🚀 Fonctionnalités clés[cite: 1]

*   **Format MIME Avancé** : Permet de construire et d'envoyer des e-mails avec une structure MIME totalement personnalisée[cite: 1].
*   **Contournement des limites** : Outrepasser les restrictions de mise en forme des méthodes natives de Google Apps Script[cite: 1].
*   **Gestion des Pièces Jointes** : Support optimisé pour l'inclusion de fichiers joints multiples[cite: 1, 2].
*   **Images Inline** : Intégration facilitée d'images directement dans le corps HTML du message[cite: 1].

### 📋 Prérequis & Installation[cite: 1]

Pour utiliser ce script, vous devez impérativement activer l'API Gmail dans votre projet Google Apps Script[cite: 1].

1.  **Activer l'API** : Dans l'éditeur GAS, allez dans "Services" (+), cherchez "Gmail API" et ajoutez-la[cite: 1].
2.  **Configuration** : Assurez-vous que votre fichier `appsscript.json` inclut les portées (scopes) nécessaires à l'envoi d'e-mails[cite: 1, 2].
```bash
# Clonez le dépôt
git clone [https://github.com/FabriceFx/gas-gmail-advanced-mime.git](https://github.com/FabriceFx/gas-gmail-advanced-mime.git)
```[cite: 1]

### 💻 Exemples d'utilisation[cite: 1]

Le fichier principal `mail.gs` contient la logique nécessaire pour transformer un objet de données en un message brut (raw) compatible avec l'API Gmail[cite: 1, 2].
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
```[cite: 1, 2]

### 🛠 Technologies utilisées[cite: 1]

*   **Google Apps Script** : Environnement d'exécution cloud[cite: 1, 2].
*   **Gmail API** : Pour l'envoi de messages bruts encodés en base64[cite: 1].
*   **JavaScript (ES6+)** : Langage de programmation du projet[cite: 1, 2].

### 🤝 Contribution & Licence[cite: 1]

Les contributions sont les bienvenues pour améliorer la gestion des en-têtes ou des types de médias[cite: 1]. Ce projet est distribué sous licence MIT[cite: 1, 2].

### 👤 Auteur[cite: 1]

*   **Fabrice FAUCHEUX** - [Profil GitHub](https://github.com/FabriceFx)[cite: 1]

---

# 🇬🇧 English Version[cite: 1]

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/FabriceFx/gas-gmail-advanced-mime)[cite: 1]
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/FabriceFx/gas-gmail-advanced-mime/blob/main/LICENSE)[cite: 1, 2]
[![Stack](https://img.shields.io/badge/stack-Google%20Apps%20Script-orange.svg)](https://developers.google.com/apps-script)[cite: 1, 2]

# GAS Gmail Advanced MIME[cite: 1]

An advanced technical solution for Google Apps Script (GAS) that bypasses the limitations of standard services (MailApp/GmailApp) by directly leveraging the Gmail API to send complex MIME-formatted messages[cite: 1].

### 🚀 Key Features[cite: 1]

*   **Advanced MIME Format**: Allows constructing and sending emails with a fully customized MIME structure[cite: 1].
*   **Limit Bypass**: Overcomes formatting restrictions found in native Google Apps Script methods[cite: 1].
*   **Attachment Management**: Optimized support for including multiple file attachments[cite: 1, 2].
*   **Inline Images**: Easier integration of images directly within the HTML message body[cite: 1].

### 📋 Prerequisites & Installation[cite: 1]

To use this script, you must enable the Gmail API in your Google Apps Script project[cite: 1].

1.  **Enable the API**: In the GAS editor, go to "Services" (+), search for "Gmail API," and add it[cite: 1].
2.  **Configuration**: Ensure your `appsscript.json` file includes the necessary scopes for sending emails[cite: 1, 2].
```bash
# Clone the repository
git clone [https://github.com/FabriceFx/gas-gmail-advanced-mime.git](https://github.com/FabriceFx/gas-gmail-advanced-mime.git)
```[cite: 1]

### 💻 Usage Examples[cite: 1]

The main file `mail.gs` contains the logic required to transform a data object into a raw message compatible with the Gmail API[cite: 1, 2].
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
```[cite: 1, 2]

### 🛠 Technologies Used[cite: 1]

*   **Google Apps Script**: Cloud execution environment[cite: 1, 2].
*   **Gmail API**: For sending base64-encoded raw messages[cite: 1].
*   **JavaScript (ES6+)**: Project programming language[cite: 1, 2].

### 🤝 Contribution & License[cite: 1]

Contributions are welcome to improve header management or media type support[cite: 1]. This project is distributed under the MIT License[cite: 1, 2].

### 👤 Author[cite: 1]

*   **Fabrice FAUCHEUX** - [GitHub Profile](https://github.com/FabriceFx)[cite: 1]
