import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  director: { type: String, default: 'Desconocido' },
  categoria: { type: String, required: true },
  deporte: { type: String, required: true },
  ubicacion: { type: String, default: '' },
  jugadores: { type: [String], default: [] }, // Asegúrate de que sea un array de strings
});

const Team = mongoose.model('Team', teamSchema);

export default Team;
