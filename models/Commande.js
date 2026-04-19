const mongoose = require('mongoose');

const ligneCommandeSchema = new mongoose.Schema(
  {
    produit: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Produit',
      required: true,
    },
    quantite: {
      type: Number,
      required: true,
      min: [1, 'La quantité doit être au moins 1'],
    },
    prixUnitaire: {
      type: Number,
      required: true,
    },
  },
  { _id: false }
);

const commandeSchema = new mongoose.Schema(
  {
    dateCommande: {
      type: Date,
      default: Date.now,
    },
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Client',
      required: [true, 'Le client est obligatoire'],
    },
    produits: {
      type: [ligneCommandeSchema],
      validate: {
        validator: (v) => v.length > 0,
        message: 'La commande doit contenir au moins un produit',
      },
    },
    montantTotal: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// Calcul automatique du montant total avant sauvegarde
commandeSchema.pre('save', function (next) {
  this.montantTotal = this.produits.reduce(
    (acc, ligne) => acc + ligne.quantite * ligne.prixUnitaire,
    0
  );
  next();
});

module.exports = mongoose.model('Commande', commandeSchema);
