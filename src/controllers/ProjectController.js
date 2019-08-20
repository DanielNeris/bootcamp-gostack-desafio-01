const projects = [
    { id: '1', title: 'New Project', tasks: ['New task'] },
    { id: '2', title: 'New Project2', tasks: ['New task2', 'teste'] },
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
};