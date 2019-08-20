const express = require('express');

const projects = require('./config/projects');
const ProjectController = require('./controllers/ProjectController');

const routes = express.Router();

let log = 0;

function checkProjectExist(req, res, next) {
    const { id } = req.params;

    const project = projects.find(p => p.id == id);

    if(!project)
        return res.status(400).json({ message: 'Project does exists' });

    return next();
}

function countRequest(req, res, next) {

    log++;

    console.log(`Number of requisitions ${log}`);
    
    return next();
}

routes.get('/projects', countRequest, ProjectController.index);
routes.post('/projects', countRequest, ProjectController.store);
routes.put('/projects/:id', countRequest, checkProjectExist, ProjectController.update);
routes.delete('/projects/:id', countRequest, checkProjectExist, ProjectController.delete);

routes.post('/projects/:id/tasks', countRequest, checkProjectExist, ProjectController.tasks);

module.exports = routes;