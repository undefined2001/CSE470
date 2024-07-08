const express = require('express');
const userRoutes = require('./routers/user.routes');
const sequelize = require('./models/db');
const PORT = 3000;
const app = express();

app.use(userRoutes);


sequelize.sync().then(
    app.listen(PORT, () => {
        console.log(`Server Started at http://localhost:${PORT}`)
    })
).catch(err => console.log(err));