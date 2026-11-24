const db = require('../models');

async function connectDatabase() {
    try{
        await db.sequelize.connectDatabase();
        console.log('Database connected successfully');

        await db.sequelize.sync({ alter: true });
        console.log('Database synchronized');
    } catch (err) {
        console.error('Error connecting to the database:', err);
        process.exit(1);
    }
}

module.exports = connectDatabase;