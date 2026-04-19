const Commande = require('../models/Commande');

// GET /api/commandes - Récupérer toutes les commandes
const getAllCommandes = async (req, res) => {
  try {
    const commandes = await Commande.find()
      .populate('client', 'nom email ville')
      .populate('produits.produit', 'nom prix');
    res.status(200).json({ success: true, count: commandes.length, data: commandes });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET /api/commandes/:id - Récupérer une commande par ID
const getCommandeById = async (req, res) => {
  try {
    const commande = await Commande.findById(req.params.id)
      .populate('client', 'nom email telephone ville')
      .populate('produits.produit', 'nom categorie prix');
    if (!commande) {
      return res.status(404).json({ success: false, message: 'Commande non trouvée' });
    }
    res.status(200).json({ success: true, data: commande });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// POST /api/commandes - Créer une commande
const createCommande = async (req, res) => {
  try {
    const commande = await Commande.create(req.body);
    await commande.populate('client', 'nom email');
    await commande.populate('produits.produit', 'nom prix');
    res.status(201).json({ success: true, data: commande });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// PUT /api/commandes/:id - Modifier une commande
const updateCommande = async (req, res) => {
  try {
    const commande = await Commande.findById(req.params.id);
    if (!commande) {
      return res.status(404).json({ success: false, message: 'Commande non trouvée' });
    }
    Object.assign(commande, req.body);
    await commande.save(); // Déclenche le pre-save hook pour recalculer montantTotal
    res.status(200).json({ success: true, data: commande });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// DELETE /api/commandes/:id - Supprimer une commande
const deleteCommande = async (req, res) => {
  try {
    const commande = await Commande.findByIdAndDelete(req.params.id);
    if (!commande) {
      return res.status(404).json({ success: false, message: 'Commande non trouvée' });
    }
    res.status(200).json({ success: true, message: 'Commande supprimée avec succès' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getAllCommandes, getCommandeById, createCommande, updateCommande, deleteCommande };
