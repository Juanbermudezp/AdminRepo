import express from 'express';

const router = express.Router();
let teams = []; // Aquí se almacenan los datos en memoria

// Obtener todos los equipos
router.get('/', (req, res) => {
  res.json(teams);
});

// Obtener un equipo por ID
router.get('/:id', (req, res) => {
  const team = teams.find((t) => t.id === parseInt(req.params.id, 10));
  if (!team) {
    return res.status(404).json({ error: 'Equipo no encontrado' });
  }
  res.json(team);
});

// Crear un nuevo equipo
router.post('/', (req, res) => {
  const { name, director, category, sport, location, players } = req.body;

  if (!name || !category || !sport) {
    return res.status(400).json({ error: 'Faltan datos obligatorios' });
  }

  const newTeam = {
    id: teams.length + 1, // Generar un ID único
    name,
    director: director || 'Desconocido',
    category,
    sport,
    location: location || '',
    players: players || [],
  };

  teams.push(newTeam); // Agregar el nuevo equipo a la lista
  res.status(201).json(newTeam);
});

// Actualizar un equipo por ID
router.put('/:id', (req, res) => {
  const { category, sport, location, players } = req.body;

  const teamIndex = teams.findIndex((t) => t.id === parseInt(req.params.id, 10));
  if (teamIndex === -1) {
    return res.status(404).json({ error: 'Equipo no encontrado' });
  }

  teams[teamIndex] = {
    ...teams[teamIndex],
    category: category || teams[teamIndex].category,
    sport: sport || teams[teamIndex].sport,
    location: location || teams[teamIndex].location,
    players: players || teams[teamIndex].players,
  };

  res.json(teams[teamIndex]);
});

// Eliminar un equipo por ID
router.delete('/:id', (req, res) => {
  const teamIndex = teams.findIndex((t) => t.id === parseInt(req.params.id, 10));
  if (teamIndex === -1) {
    return res.status(404).json({ error: 'Equipo no encontrado' });
  }

  teams.splice(teamIndex, 1); // Eliminar el equipo
  res.json({ message: 'Equipo eliminado con éxito' });
});

export default router;
