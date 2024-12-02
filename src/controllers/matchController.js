const Match = require('../models/matchModel');

exports.createMatch = async (req, res) => {
    try {
        const match = new Match(req.body);
        await match.save();
        res.status(201).json({ message: 'Partido creado con éxito', match });
    } catch (error) {
        res.status(400).json({ message: 'Error al crear partido', error });
    }
};

exports.getMatches = async (req, res) => {
    try {
        const matches = await Match.find();
        res.status(200).json(matches);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener partidos', error });
    }
};
