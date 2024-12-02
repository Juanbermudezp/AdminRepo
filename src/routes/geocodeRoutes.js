import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

const geocodeAddress = async (address) => {
  const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&addressdetails=1`);
  const data = await response.json();
  if (data.length > 0) {
    return { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) };
  }
  return null;
};

router.post('/', async (req, res) => {
  const { address } = req.body;
  try {
    const coordinates = await geocodeAddress(address);
    if (coordinates) {
      res.json(coordinates);
    } else {
      res.status(404).json({ message: 'No se encontraron coordenadas' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al geocodificar la dirección', error });
  }
});

export default router;
