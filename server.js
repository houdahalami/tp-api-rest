const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const clientRoutes   = require('./routes/clientRoutes');
const produitRoutes  = require('./routes/produitRoutes');
const commandeRoutes = require('./routes/commandeRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use('/api/clients',   clientRoutes);
app.use('/api/produits',  produitRoutes);
app.use('/api/commandes', commandeRoutes);

// Route par défaut
app.get('/', (req, res) => {
  res.json({ message: 'API REST - Système Commercial' });
});

// Gestion des routes non trouvées
app.use((req, res) => {
  res.status(404).json({ message: 'Route non trouvée' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
