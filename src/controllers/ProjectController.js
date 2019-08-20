const projects = [
    { id: '1', title: 'New Project', tasks: ['New task'] },
    { id: '2', title: 'New Project2', tasks: ['New task2', 'teste'] },
    { id: '3', title: 'New Project3', tasks: ['New task3', 'teste3', 'teste3'] },
];

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

    update(req, res) {
        try {
            const { id } = req.parms;

            const { title, tasks } = req.body;
   
            const project = { title, tasks };

            projects[id] = project;

            return res.json(projects);
        } catch (error) {
            return res.status(400).json(error);
        }
    },

    delete(req, res) {
        try {
            const { id } = req.parms;
            console.log(id)
   
            projects.splice(id, 1);

            return res.json({ success: 'ok' });
        } catch (error) {
            return res.status(400).json({error});
        }
    },
};