import express from 'express';

const router = express.Router();
let matches = [];

// Obtener todos los partidos
router.get('/', (req, res) => {
  res.json(matches);
});

// Obtener un partido por ID
router.get('/:id', (req, res) => {
  const match = matches.find((m) => m.id === parseInt(req.params.id));
  if (!match) {
    return res.status(404).json({ error: 'Partido no encontrado' });
  }
  res.json(match);
});

// Crear un nuevo partido
router.post('/', (req, res) => {
  const { name, category, sport, location, result, comments } = req.body;

  if (!name || !category || !sport) {
    return res.status(400).json({ error: 'Faltan datos obligatorios' });
  }

  const newMatch = {
    id: matches.length + 1,
    name,
    category,
    sport,
    location: location || '',
    result: result || '',
    comments: comments || '',
  };

  matches.push(newMatch);
  res.status(201).json(newMatch);
});

// Actualizar un partido por ID
router.put('/:id', (req, res) => {
  const matchIndex = matches.findIndex((m) => m.id === parseInt(req.params.id));
  if (matchIndex === -1) {
    return res.status(404).json({ error: 'Partido no encontrado' });
  }

  const { result } = req.body;

  matches[matchIndex] = {
    ...matches[matchIndex],
    result: result || matches[matchIndex].result, // Solo se permite editar el marcador
  };

  res.status(200).json(matches[matchIndex]);
});

// Eliminar un partido por ID
router.delete('/:id', (req, res) => {
  const matchIndex = matches.findIndex((m) => m.id === parseInt(req.params.id));
  if (matchIndex === -1) {
    return res.status(404).json({ error: 'Partido no encontrado' });
  }

  matches.splice(matchIndex, 1);
  res.status(200).json({ message: 'Partido eliminado con éxito' });
});

export default router;
