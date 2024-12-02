import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import catalogRoutes from './src/routes/catalogRoutes.js';
import userRoutes from './src/routes/userRoutes.js';
import teamRoutes from './src/routes/teamRoutes.js'
import matchRoutes from './src/routes/matchRoutes.js';
import geocodeRoutes from './src/routes/geocodeRoutes.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Registrar rutas
app.use('/api/catalog', catalogRoutes);
app.use('/api/users', userRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/matches', matchRoutes);
app.use('/api/geocode', geocodeRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
