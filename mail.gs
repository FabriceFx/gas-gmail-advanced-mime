// ==========================================
// SCRIPT DE TEST — envoi MIME manuel
// À exécuter directement via l'éditeur GAS
// Prérequis : activer "Gmail API" dans Services
// ==========================================

// ⚠️ NE PAS COMMITTER avec une vraie adresse — utiliser une adresse de test
function testerEnvoiMIME() {

  const DESTINATAIRE = "votremail@votredomaine.com"; // ← À modifier avant test
  const CC           = "";                           // ← Optionnel
  const OBJET        = "Test MIME manuel — Publipostage GAS";

  const CORPS_HTML = `
    <p>Bonjour <b>Thomas</b>,</p>
    <p>Ceci est un email de test envoyé via <i>MIME manuel</i> avec Gmail Advanced Service.</p>
    <p><a href="https://google.com" style="color:#1a73e8;">Un lien de test</a></p>
  `;

  // Fallback texte brut (utilisé par les clients mail stricts et les filtres antispam)
  const CORPS_TEXTE = "Bonjour Thomas,\n\nCeci est un email de test envoyé via MIME manuel avec Gmail Advanced Service.\n\nUn lien de test : https://google.com";

  // PJ de test : un ou plusieurs IDs Drive séparés par virgule (laisser vide si aucun)
  const IDS_DRIVE = ""; // ← Ex : "1abc...,1def..."

  // ── Récupération des blobs ──────────────────────────────────
  const pj = [];
  const alertesPJ = [];

  if (IDS_DRIVE) {
    IDS_DRIVE.split(',').forEach(id => {
      try {
        pj.push(DriveApp.getFileById(id.trim()).getBlob());
      } catch (e) {
        alertesPJ.push("ID introuvable : " + id.trim());
      }
    });
  }

  // ── Envoi ───────────────────────────────────────────────────
  try {
    const resultat = envoyerAvecHeadersPropres(
      DESTINATAIRE,
      OBJET,
      CORPS_HTML,
      CORPS_TEXTE,
      {
        scriptId : ScriptApp.getScriptId(),
        mode     : "TEST",
        rowIndex : 1
      },
      pj,
      CC || null
    );

    Logger.log("✅ Envoi réussi — Message ID : " + resultat.id);
    if (alertesPJ.length > 0) Logger.log("⚠️ Alertes PJ : " + alertesPJ.join(", "));

  } catch (e) {
    Logger.log("❌ Erreur envoi vers " + DESTINATAIRE + " (row 1) : " + e.message);
  }
}


// ==========================================
// FONCTION MIME PRINCIPALE
//
// @param {string}   destinataire   Adresse email du destinataire
// @param {string}   objet          Sujet de l'email
// @param {string}   corpsHTML      Corps au format HTML
// @param {string}   corpsTexte     Corps en texte brut (fallback antispam)
// @param {Object}   headersPerso   X-Headers personnalisés { scriptId, mode, rowIndex }
// @param {Blob[]}   pj             Tableau de blobs Drive (peut être vide)
// @param {string}   cc             Adresse CC (null si aucune)
// @returns {Object}                Objet réponse Gmail API { id, threadId }
// ==========================================
function envoyerAvecHeadersPropres(destinataire, objet, corpsHTML, corpsTexte, headersPerso, pj, cc) {

  const frontiereRacine  = "boundary_root_"    + Utilities.getUuid().replace(/-/g, "");
  const frontiereContenu = "boundary_content_" + Utilities.getUuid().replace(/-/g, "");

  const objetEncode = `=?UTF-8?B?${Utilities.base64Encode(objet, Utilities.Charset.UTF_8)}?=`;

  // ── En-têtes + ouverture enveloppe racine ───────────────────
  const lignes = [
    `From: ${Session.getActiveUser().getEmail()}`,
    `To: ${destinataire}`,
    ...(cc ? [`Cc: ${cc}`] : []),
    `Subject: ${objetEncode}`,
    `X-Script-ID: ${headersPerso.scriptId}`,
    `X-Campaign-Mode: ${headersPerso.mode}`,
    `X-Row-Index: ${headersPerso.rowIndex}`,
    `MIME-Version: 1.0`,
    `Content-Type: multipart/mixed; boundary="${frontiereRacine}"`,
    "",

    // ── Corps (HTML + fallback texte brut) ─────────────────────
    `--${frontiereRacine}`,
    `Content-Type: multipart/alternative; boundary="${frontiereContenu}"`,
    "",

    // Partie texte brut (fallback — doit venir EN PREMIER dans multipart/alternative)
    `--${frontiereContenu}`,
    `Content-Type: text/plain; charset=UTF-8`,
    `Content-Transfer-Encoding: base64`,
    "",
    Utilities.base64Encode(corpsTexte, Utilities.Charset.UTF_8),
    "",

    // Partie HTML (prioritaire — doit venir EN DERNIER dans multipart/alternative)
    `--${frontiereContenu}`,
    `Content-Type: text/html; charset=UTF-8`,
    `Content-Transfer-Encoding: base64`,
    "",
    Utilities.base64Encode(corpsHTML, Utilities.Charset.UTF_8),
    "",

    `--${frontiereContenu}--`,
  ];

  // ── Pièces jointes ──────────────────────────────────────────
  (pj || []).forEach(blob => {
    const nomEncode = `=?UTF-8?B?${Utilities.base64Encode(blob.getName(), Utilities.Charset.UTF_8)}?=`;
    lignes.push(
      `--${frontiereRacine}`,
      `Content-Type: ${blob.getContentType()}; name="${nomEncode}"`,
      `Content-Disposition: attachment; filename="${nomEncode}"`,
      `Content-Transfer-Encoding: base64`,
      "",
      Utilities.base64Encode(blob.getBytes()),
      ""
    );
  });

  // ── Fermeture ───────────────────────────────────────────────
  lignes.push(`--${frontiereRacine}--`);

  const raw = Utilities.base64EncodeWebSafe(lignes.join("\r\n"));

  try {
    return Gmail.Users.Messages.send({ raw: raw }, "me");
  } catch (e) {
    throw new Error(
      `Échec Gmail API — destinataire: ${destinataire}, row: ${headersPerso.rowIndex} — ${e.message}`
    );
  }
}
