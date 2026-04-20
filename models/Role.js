const mongoose = require('mongoose');

const permissionSchema = new mongoose.Schema(
  {
    create: { type: Boolean, default: false },
    read:   { type: Boolean, default: false },
    update: { type: Boolean, default: false },
    delete: { type: Boolean, default: false },
  },
  { _id: false }
);

const roleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Le nom du rôle est obligatoire'],
      unique: true,
      trim: true,
      lowercase: true,
    },
    description: {
      type: String,
      trim: true,
    },
    permissions: {
      clients:   { type: permissionSchema, default: {} },
      produits:  { type: permissionSchema, default: {} },
      commandes: { type: permissionSchema, default: {} },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Role', roleSchema);
