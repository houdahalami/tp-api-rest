# API REST - Système Commercial

Mini API REST avec Node.js, Express.js et MongoDB (architecture MVC).

## Modules

| Module | Description |
|--------|-------------|
| Clients | Gestion des informations clients |
| Produits | Gestion des articles disponibles à la vente |
| Commandes | Enregistrement des achats effectués |

## Prérequis

- Node.js v18+
- MongoDB 

## Installation

```bash
npm install
```

Créer un fichier `.env` à la racine :

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/tp_commercial
```

## Démarrage

```bash
# Production
npm start

# Développement (nodemon)
npm run dev
```



## Structure du projet

```
tp-api-rest/
├── config/
│   └── db.js               # Connexion MongoDB
├── controllers/
│   ├── clientController.js
│   ├── produitController.js
│   └── commandeController.js
├── models/
│   ├── Client.js
│   ├── Produit.js
│   └── Commande.js
├── routes/
│   ├── clientRoutes.js
│   ├── produitRoutes.js
│   └── commandeRoutes.js
├── .env
├── .gitignore
├── package.json
└── server.js
```
