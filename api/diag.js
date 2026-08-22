// /api/diag.js
// Endpoint TEMPORAL de diagnóstico. No revela ningún valor secreto —
// solo confirma si las variables de entorno están llegando a esta
// función en este deployment específico. Borrar cuando ya no se necesite.
module.exports = function handler(req, res) {
  return res.status(200).json({
    hasWebhookUrl: Boolean(process.env.MAKE_WEBHOOK_URL),
    hasApiKey: Boolean(process.env.MAKE_API_KEY),
    vercelEnv: process.env.VERCEL_ENV || null,
    deploymentUrl: process.env.VERCEL_URL || null
  });
};
