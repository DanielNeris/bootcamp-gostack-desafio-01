const projects = require('../config/projects');

module.exports = {
    index(req, res) {
        try {
            return res.json(projects);
        } catch (error) {
            return res.status(400).json(error);
        }
    },

    store(req, res) {
        try {
            const { id, title, tasks } = req.body;
   
            const project = { id, title, tasks };

            projects.push(project)

            return res.json(projects);
        } catch (error) {
            return res.status(400).json(error);
        }
    },

    tasks(req, res) {
        try {
            const { id } = req.params;

            const { title } = req.body;
   
            const project = projects.find(p => p.id == id);

            project.tasks.push(title);

            return res.json(projects);
        } catch (error) {
            return res.status(400).json(error);
        }
    },

    update(req, res) {
        try {
            const { id } = req.params;

            const { title } = req.body;
   
            const project = projects.find(p => p.id == id);

            project.title = title;

            return res.json(project);
        } catch (error) {
            return res.status(400).json(error);
        }
    },

    delete(req, res) {
        try {
            const { id } = req.params;

            const project = projects.findIndex(p => p.id == id);

            projects.splice(project, 1);

            return res.json({ success: 'ok' });
        } catch (error) {
            return res.status(400).json({error});
        }
    },
};