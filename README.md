# API REST — Rôles & Autorisations avec JWT

Node.js · Express · MongoDB · Mongoose · JWT

## Installation

```bash
npm install
```

## Démarrage

```bash
npm run dev
```

## Variables d'environnement (.env)

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/tp_commercial
JWT_SECRET=monSecretJWT2024
JWT_EXPIRE=7d
```

## Routes

### Authentification (publique)
```
POST   /api/auth/register
POST   /api/auth/login
GET    /api/auth/me
```

### Rôles
```
GET    /api/roles
POST   /api/roles
GET    /api/roles/:id
PUT    /api/roles/:id
DELETE /api/roles/:id
```

### Utilisateurs
```
GET    /api/users
GET    /api/users/:id
PUT    /api/users/:id/role
```

### Clients · Produits · Commandes
```
GET    /api/clients
POST   /api/clients
GET    /api/clients/:id
PUT    /api/clients/:id
DELETE /api/clients/:id

GET    /api/produits
POST   /api/produits
...

GET    /api/commandes
POST   /api/commandes
...
```

## Structure du projet

```
tp-api-rest/
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   ├── roleController.js
│   ├── userController.js
│   ├── clientController.js
│   ├── produitController.js
│   └── commandeController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── Role.js
│   ├── User.js
│   ├── Client.js
│   ├── Produit.js
│   └── Commande.js
├── routes/
│   ├── authRoutes.js
│   ├── roleRoutes.js
│   ├── userRoutes.js
│   ├── clientRoutes.js
│   ├── produitRoutes.js
│   └── commandeRoutes.js
├── .env
├── .gitignore
├── package.json
└── server.js
```