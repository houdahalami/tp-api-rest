const Produit = require('../models/Produit');

// GET /api/produits - Récupérer tous les produits
const getAllProduits = async (req, res) => {
  try {
    const produits = await Produit.find();
    res.status(200).json({ success: true, count: produits.length, data: produits });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET /api/produits/:id - Récupérer un produit par ID
const getProduitById = async (req, res) => {
  try {
    const produit = await Produit.findById(req.params.id);
    if (!produit) {
      return res.status(404).json({ success: false, message: 'Produit non trouvé' });
    }
    res.status(200).json({ success: true, data: produit });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// POST /api/produits - Créer un produit
const createProduit = async (req, res) => {
  try {
    const produit = await Produit.create(req.body);
    res.status(201).json({ success: true, data: produit });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// PUT /api/produits/:id - Modifier un produit
const updateProduit = async (req, res) => {
  try {
    const produit = await Produit.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!produit) {
      return res.status(404).json({ success: false, message: 'Produit non trouvé' });
    }
    res.status(200).json({ success: true, data: produit });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// DELETE /api/produits/:id - Supprimer un produit
const deleteProduit = async (req, res) => {
  try {
    const produit = await Produit.findByIdAndDelete(req.params.id);
    if (!produit) {
      return res.status(404).json({ success: false, message: 'Produit non trouvé' });
    }
    res.status(200).json({ success: true, message: 'Produit supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getAllProduits, getProduitById, createProduit, updateProduit, deleteProduit };
