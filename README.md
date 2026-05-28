# 🇫🇷 Version Française

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/FabriceFx/gas-gmail-advanced-mime)
[![Licence](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/FabriceFx/gas-gmail-advanced-mime/blob/main/LICENSE)
[![Stack](https://img.shields.io/badge/stack-Google%20Apps%20Script-orange.svg)](https://developers.google.com/apps-script)

# GAS Gmail Advanced MIME

Une solution technique avancée pour Google Apps Script (GAS) permettant de s'affranchir des limitations des services standards (MailApp/GmailApp) en exploitant directement l'API Gmail pour l'envoi de messages au format MIME complexe.

### 🚀 Fonctionnalités clés

- **Format MIME Avancé** : Construit et envoie des e-mails avec une structure MIME totalement personnalisée.
- **Fallback texte brut** : Partie `text/plain` incluse pour la compatibilité antispam et les clients mail stricts.
- **Contournement des limites** : Outrepasse les restrictions de mise en forme des méthodes natives GAS.
- **Gestion des pièces jointes** : Support optimisé pour l'inclusion de fichiers Drive multiples.
- **Images Inline** : Intégration facilitée d'images directement dans le corps HTML.
- **X-Headers personnalisés** : Traçabilité des envois via `X-Script-ID`, `X-Campaign-Mode`, `X-Row-Index`.

### 📋 Prérequis & Installation

#### 1. Activer l'API Gmail (obligatoire)

Dans l'éditeur Google Apps Script :
1. Ouvrez le menu **Services** (+) dans le panneau gauche.
2. Cherchez **Gmail API** et cliquez sur **Ajouter**.
3. Laissez le symbole `Gmail` (utilisé dans le code : `Gmail.Users.Messages.send`).

#### 2. Configurer `appsscript.json`

> ⚠️ Ce fichier est masqué par défaut. Pour l'afficher : **Paramètres du projet** → cochez **Afficher le fichier manifeste**.

Votre `appsscript.json` doit contenir ces scopes OAuth :

```json
{
  "timeZone": "Europe/Paris",
  "dependencies": {
    "enabledAdvancedServices": [
      {
        "userSymbol": "Gmail",
        "version": "v1",
        "serviceId": "gmail"
      }
    ]
  },
  "oauthScopes": [
    "https://www.googleapis.com/auth/gmail.send",
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/drive.readonly",
    "https://www.googleapis.com/auth/spreadsheets"
  ],
  "exceptionLogging": "STACKDRIVER",
  "runtimeVersion": "V8"
}
```

| Scope | Utilité |
|---|---|
| `gmail.send` | Envoi des messages via Gmail API |
| `userinfo.email` | Récupère l'adresse de l'expéditeur (`Session.getActiveUser()`) |
| `drive.readonly` | Lecture des pièces jointes depuis Drive |
| `spreadsheets` | Lecture des données de publipostage depuis Sheets |

#### 3. Cloner le dépôt

```bash
git clone https://github.com/FabriceFx/gas-gmail-advanced-mime.git
```

Copiez ensuite `mail.gs` et `appsscript.json` dans votre projet GAS via [clasp](https://github.com/google/clasp) ou l'éditeur en ligne.

### 💻 Exemples d'utilisation

`mail.gs` expose deux fonctions :

**`testerEnvoiMIME()`** — Fonction de test à exécuter directement depuis l'éditeur GAS.

**`envoyerAvecHeadersPropres()`** — Fonction principale à intégrer dans votre script de publipostage.

```javascript
// Intégration dans un script de publipostage
function envoyerCampagne() {
  const feuille = SpreadsheetApp.getActiveSheet();
  const lignes  = feuille.getDataRange().getValues();

  lignes.forEach((ligne, index) => {
    const [email, prenom] = ligne;

    const html  = `<p>Bonjour <b>${prenom}</b>,</p><p>Votre message personnalisé.</p>`;
    const texte = `Bonjour ${prenom},\n\nVotre message personnalisé.`;

    try {
      envoyerAvecHeadersPropres(
        email, "Votre sujet", html, texte,
        { scriptId: ScriptApp.getScriptId(), mode: "PROD", rowIndex: index + 1 },
        [], null
      );
    } catch (e) {
      Logger.log(e.message); // Contient destinataire + numéro de ligne pour debug
    }
  });
}
```

### 🛠 Technologies utilisées

- **Google Apps Script** : Environnement d'exécution cloud (runtime V8).
- **Gmail API v1** : Envoi de messages bruts encodés en base64 WebSafe.
- **JavaScript (ES6+)** : Template literals, spread operator, arrow functions.

### 🤝 Contribution & Licence

Les contributions sont les bienvenues. Pistes d'amélioration :
- Support des images inline via `Content-ID` (CID)
- Gestion du rate limiting Gmail (quota quotidien)
- Mode `Bcc` pour les campagnes

Ce projet est distribué sous licence **MIT**.

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

- **Advanced MIME Format**: Builds and sends emails with a fully customized MIME structure.
- **Plain-text fallback**: Includes a `text/plain` part for spam filter compatibility and strict mail clients.
- **Limit Bypass**: Overcomes formatting restrictions in native GAS methods.
- **Attachment Management**: Optimized support for multiple Drive file attachments.
- **Inline Images**: Easier integration of images directly within the HTML body.
- **Custom X-Headers**: Send traceability via `X-Script-ID`, `X-Campaign-Mode`, `X-Row-Index`.

### 📋 Prerequisites & Installation

#### 1. Enable the Gmail API (required)

In the Google Apps Script editor:
1. Open the **Services** (+) menu in the left panel.
2. Search for **Gmail API** and click **Add**.
3. Keep the symbol `Gmail` (used in code as `Gmail.Users.Messages.send`).

#### 2. Configure `appsscript.json`

> ⚠️ This file is hidden by default. To show it: **Project Settings** → check **Show "appsscript.json" manifest file**.

Your `appsscript.json` must include these OAuth scopes:

```json
{
  "timeZone": "Europe/Paris",
  "dependencies": {
    "enabledAdvancedServices": [
      {
        "userSymbol": "Gmail",
        "version": "v1",
        "serviceId": "gmail"
      }
    ]
  },
  "oauthScopes": [
    "https://www.googleapis.com/auth/gmail.send",
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/drive.readonly",
    "https://www.googleapis.com/auth/spreadsheets"
  ],
  "exceptionLogging": "STACKDRIVER",
  "runtimeVersion": "V8"
}
```

| Scope | Purpose |
|---|---|
| `gmail.send` | Send messages via Gmail API |
| `userinfo.email` | Retrieve sender address (`Session.getActiveUser()`) |
| `drive.readonly` | Read attachments from Drive |
| `spreadsheets` | Read mail merge data from Sheets |

#### 3. Clone the repository

```bash
git clone https://github.com/FabriceFx/gas-gmail-advanced-mime.git
```

Then copy `mail.gs` and `appsscript.json` into your GAS project via [clasp](https://github.com/google/clasp) or the online editor.

### 💻 Usage Examples

`mail.gs` exposes two functions:

**`testerEnvoiMIME()`** — Test function to run directly from the GAS editor.

**`envoyerAvecHeadersPropres()`** — Main function to integrate in your mail merge script.

```javascript
// Integration in a mail merge script
function sendCampaign() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const rows  = sheet.getDataRange().getValues();

  rows.forEach((row, index) => {
    const [email, firstName] = row;

    const html  = `<p>Hello <b>${firstName}</b>,</p><p>Your personalized message.</p>`;
    const plain = `Hello ${firstName},\n\nYour personalized message.`;

    try {
      envoyerAvecHeadersPropres(
        email, "Your subject", html, plain,
        { scriptId: ScriptApp.getScriptId(), mode: "PROD", rowIndex: index + 1 },
        [], null
      );
    } catch (e) {
      Logger.log(e.message); // Includes recipient + row number for debugging
    }
  });
}
```

### 🛠 Technologies Used

- **Google Apps Script**: Cloud execution environment (V8 runtime).
- **Gmail API v1**: Sends base64 WebSafe-encoded raw messages.
- **JavaScript (ES6+)**: Template literals, spread operator, arrow functions.

### 🤝 Contribution & License

Contributions are welcome. Improvement ideas:
- Inline image support via `Content-ID` (CID)
- Gmail rate limiting / daily quota management
- `Bcc` mode for bulk campaigns

This project is distributed under the **MIT License**.

### 👤 Author

- **Fabrice FAUCHEUX** — [GitHub Profile](https://github.com/FabriceFx)

---
<p align="center"><a href="https://faucheux.bzh" target="_blank" style="color: inherit; text-decoration: none;">&lt;&gt; par Fabrice Faucheux</a></p>