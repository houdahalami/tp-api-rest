const jwt  = require('jsonwebtoken');
const User = require('../models/User');

// ── Middleware 1 : vérifier le token JWT ──────────────────────────────────
const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({ success: false, message: 'Non authentifié. Token manquant.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // On charge l'utilisateur ET son rôle avec populate
    req.user = await User.findById(decoded.id).populate('role');
    if (!req.user) {
      return res.status(401).json({ success: false, message: 'Utilisateur non trouvé.' });
    }
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Token invalide ou expiré.' });
  }
};

// ── Middleware 2 : vérifier les permissions ───────────────────────────────
// Usage : authorize('clients', 'create')
const authorize = (module, action) => {
  return (req, res, next) => {
    const role = req.user.role;

    if (!role || !role.permissions || !role.permissions[module]) {
      return res.status(403).json({
        success: false,
        message: `Accès refusé. Aucune permission définie pour le module "${module}".`,
      });
    }

    if (!role.permissions[module][action]) {
      return res.status(403).json({
        success: false,
        message: `Accès refusé. Votre rôle "${role.name}" ne peut pas effectuer l'action "${action}" sur "${module}".`,
      });
    }

    next();
  };
};

module.exports = { protect, authorize };
