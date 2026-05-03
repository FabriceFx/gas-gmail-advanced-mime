# gas-gmail-advanced-mime
Envoi d'emails complexes avec Google Apps Script via Gmail API. Support complet du format MIME, des headers personnalisés (X-Headers) et gestion optimisée des pièces jointes.


Google Apps Script : Envoi d'Emails avec MIME Manuel via Gmail API
Ce projet démontre comment s'affranchir des limitations de la bibliothèque standard GmailApp pour envoyer des emails hautement personnalisés en utilisant le Service Gmail Avancé et la construction manuelle de messages au format MIME.

Pourquoi utiliser le Service Avancé plutôt que GmailApp ?
Bien que GmailApp.sendEmail() soit suffisant pour des besoins basiques, l'usage de Gmail.Users.Messages.send devient indispensable pour des applications professionnelles (CRM, outils de publipostage, suivi de campagnes) pour les raisons suivantes :

En-têtes personnalisés (X-Headers) : GmailApp ne permet pas d'ajouter des headers spécifiques. Le format MIME manuel permet d'injecter des données comme X-Script-ID ou X-Campaign-Mode, essentiels pour le tracking ou le filtrage côté destinataire/serveur.

Contrôle total de la structure MIME : Vous pouvez définir précisément l'imbrication des parties multipart/alternative et multipart/mixed, garantissant une meilleure compatibilité avec les différents clients mail (Outlook, Apple Mail, etc.).

Encodage granulaire : Gestion précise de l'UTF-8 pour les objets et les noms de fichiers joints via l'encodage Base64, évitant les problèmes de caractères spéciaux dans les headers.

Métadonnées techniques : Possibilité d'associer l'envoi à des index de lignes ou des IDs internes sans polluer le corps du message.

Architecture du message
Le script génère une enveloppe MIME structurée comme suit :

Root (multipart/mixed) : Conteneur principal.

Content (multipart/alternative) : Contient la version HTML.

Attachments : Chaque pièce jointe est ajoutée comme une section distincte avec son propre encodage Base64.
