import mongoose from 'mongoose';

const MatchSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    categoria: { type: String, required: true },
    deporte: { type: String, required: true },
    ubicacion: { type: String },
    resultado: { type: String },
    comentarios: { type: String },
});

export default mongoose.model('Match', MatchSchema);
