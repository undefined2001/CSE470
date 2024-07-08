const app = require('./app');
const sequelize = require('./models/db');

const PORT = 3000;

// Function to start the server
const startServer = async () => {
    try {
        // Authenticate and sync the database
        await sequelize.authenticate();
        console.log('Database connected successfully.');

        await sequelize.sync();
        console.log('Database synchronized successfully.');

        // Start the server
        app.listen(PORT, () => {
            console.log(`Server started at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Unable to start the server:', error);
    }
};

// Call the function to start the server
startServer();
