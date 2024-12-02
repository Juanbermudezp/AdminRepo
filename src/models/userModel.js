import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  rol: { type: String, required: true },
  deporte: { type: String, required: true },
  ubicacion: { type: String },
  correo: { type: String, required: true },
  descripcion: { type: String },
});

export default mongoose.model('User', UserSchema);
