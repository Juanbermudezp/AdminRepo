const Team = require('../models/teamModel');

exports.createTeam = async (req, res) => {
    try {
        const team = new Team(req.body);
        await team.save();
        res.status(201).json({ message: 'Equipo creado con éxito', team });
    } catch (error) {
        res.status(400).json({ message: 'Error al crear equipo', error });
    }
};

exports.getTeams = async (req, res) => {
    try {
        const teams = await Team.find();
        res.status(200).json(teams);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener equipos', error });
    }
};
