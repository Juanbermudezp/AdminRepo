import express from 'express';

const router = express.Router();
let users = []; // Simulación de base de datos

// Obtener todos los usuarios
router.get('/', (req, res) => {
  res.json(users);
});

// Obtener un usuario por ID
router.get('/:id', (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }
  res.json(user);
});

// Crear un nuevo usuario
router.post('/', (req, res) => {
  const { name, role, sport, team, location, email, description } = req.body;

  if (!name || !role || !email) {
    return res.status(400).json({ error: 'Faltan datos obligatorios' });
  }

  const newUser = {
    id: users.length + 1,
    name,
    role,
    sport: sport || '',
    team: team || '',
    location: location || '',
    email,
    description: description || '',
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

// Actualizar un usuario por ID
router.put('/:id', (req, res) => {
  const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (userIndex === -1) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  const { role, sport, team, location, description } = req.body;

  // Solo se actualizan los campos editables
  users[userIndex] = {
    ...users[userIndex],
    role: role || users[userIndex].role,
    sport: sport || users[userIndex].sport,
    team: team || users[userIndex].team,
    location: location || users[userIndex].location,
    description: description || users[userIndex].description,
  };

  res.status(200).json(users[userIndex]);
});

// Eliminar un usuario por ID
router.delete('/:id', (req, res) => {
  const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (userIndex === -1) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  users.splice(userIndex, 1);
  res.status(200).json({ message: 'Usuario eliminado con éxito' });
});

export default router;
