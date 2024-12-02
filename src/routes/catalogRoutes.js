import express from 'express';

const router = express.Router();

let categories = [];
let sports = [];
let roles = [];

// Rutas para categorías
router.get('/categories', (req, res) => res.json(categories));
router.post('/categories', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'El nombre es obligatorio' });
  }
  const newCategory = { id: categories.length + 1, name };
  categories.push(newCategory);
  res.status(201).json(newCategory);
});

// Rutas para deportes
router.get('/sports', (req, res) => res.json(sports));
router.post('/sports', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'El nombre es obligatorio' });
  }
  const newSport = { id: sports.length + 1, name };
  sports.push(newSport);
  res.status(201).json(newSport);
});

// Rutas para roles
router.get('/roles', (req, res) => res.json(roles));
router.post('/roles', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'El nombre es obligatorio' });
  }
  const newRole = { id: roles.length + 1, name };
  roles.push(newRole);
  res.status(201).json(newRole);
});

export default router;
